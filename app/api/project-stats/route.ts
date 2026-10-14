import { getProjectStats } from "@/lib/project-stats";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  return Response.json(await getProjectStats(), {
    headers: { "Cache-Control": "public, max-age=60, s-maxage=60" },
  });
}
