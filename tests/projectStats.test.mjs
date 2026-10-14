import test from 'node:test';
import assert from 'node:assert/strict';
import { generateKeyPairSync } from 'node:crypto';
import { createStatsService, parseCount, roundDown } from '../lib/project-stats.mjs';

const emptyEnv = { TIMEPLAN_FALLBACK_SCHEDULES: '170', TIMEPLAN_FALLBACK_VISITORS: '6476', UTVEKSLING_FALLBACK_VISITORS: '999' };
test('rounds conservatively, including the requested examples', () => {
  for (const [n, expected] of [[170,150],[6476,6400],[0,0],[99,90],[999,950],[1000,1000],[12543,12000]]) assert.equal(roundDown(n), expected);
  for (const bad of [undefined,null,'', 'no',-1,Infinity,1.2,{},'12bad']) assert.equal(parseCount(bad),null);
});
test('missing credentials return rounded public snapshots without fetching', async () => {
  const get = createStatsService({env:emptyEnv,fetcher:()=>{throw new Error('Should not fetch')}});
  const result=await get();
  assert.equal(result['ntnu-timeplan'].visitors.value,6400);
  assert.equal(result['ntnu-timeplan'].schedules.value,150);
  assert.equal(result['ntnu-utveksling'].schedules,null);
  assert.equal(result['ntnu-timeplan'].visitors.status,'fallback');
});
test('HEAD count, zero, caching, stale rounding, and recovery work independently', async () => {
  let clock=0, value=170, fail=false, calls=0;
  const get=createStatsService({env:{...emptyEnv,TIMEPLAN_SUPABASE_URL:'https://example.supabase.co',TIMEPLAN_SUPABASE_KEY:'sb_publishable_test'},now:()=>clock,fetcher:async(url,options)=>{
    calls++;assert.equal(options.method,'HEAD');assert.equal(options.headers.Prefer,'count=exact');assert.equal(options.headers.Authorization,undefined);
    if(fail)throw new Error('sensitive upstream detail');
    return new Response(null,{headers:{'content-range':`*/${value}`}});
  }});
  let result=await get();assert.equal(result['ntnu-timeplan'].schedules.value,170);assert.equal(result['ntnu-timeplan'].schedules.status,'live');
  await get();assert.equal(calls,1);
  clock=901000;fail=true;result=await get();assert.equal(result['ntnu-timeplan'].schedules.value,150);assert.equal(result['ntnu-timeplan'].schedules.status,'stale');
  assert.equal(JSON.stringify(result).includes('sensitive'),false);
  clock+=61000;fail=false;value=0;result=await get();assert.equal(result['ntnu-timeplan'].schedules.value,0);assert.equal(result['ntnu-timeplan'].schedules.status,'live');
});
test('malformed counts use fallback instead of false zero',async()=>{
  const get=createStatsService({env:{...emptyEnv,TIMEPLAN_SUPABASE_URL:'https://example.supabase.co',TIMEPLAN_SUPABASE_KEY:'test'},fetcher:async()=>new Response(null,{headers:{'content-range':'*/*'}})});
  assert.equal((await get())['ntnu-timeplan'].schedules.value,150);
});
test('GA uses a single full-period totalUsers report per project and shares token work',async()=>{
  const {privateKey}=generateKeyPairSync('rsa',{modulusLength:2048});
  let authCalls=0,reports=0;
  const env={...emptyEnv,GA_CLIENT_EMAIL:'test@example.test',GA_PRIVATE_KEY:privateKey.export({type:'pkcs8',format:'pem'}),TIMEPLAN_GA_PROPERTY_ID:'123',UTVEKSLING_GA_PROPERTY_ID:'456',TIMEPLAN_GA_START_DATE:'2025-01-01',UTVEKSLING_GA_START_DATE:'2025-01-01'};
  const get=createStatsService({env,fetcher:async(url,options)=>{
    if(String(url).includes('oauth2')){authCalls++;return Response.json({access_token:'private-test-token'});}
    reports++;const body=JSON.parse(options.body);assert.deepEqual(body.metrics,[{name:'totalUsers'}]);assert.equal(body.dimensions,undefined);assert.deepEqual(body.dateRanges,[{startDate:'2025-01-01',endDate:'today'}]);
    assert.equal(options.headers.Authorization,'Bearer private-test-token');
    return Response.json({rows:[{metricValues:[{value:'6476'}]}]});
  }});
  const [a,b]=await Promise.all([get(),get()]);assert.equal(authCalls,1);assert.equal(reports,2);assert.deepEqual(a,b);assert.equal(a['ntnu-timeplan'].visitors.value,6476);assert.equal(JSON.stringify(a).includes('private-test-token'),false);
});
