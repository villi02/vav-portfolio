// Verified in GA4: totalUsers, 2025-01-01 through 2026-10-13, read on 2026-10-14.
// Rounded down from 1,423 (Utveksling) and 426 (Timeplan). No individual data.
// Supabase HEAD count from the deployed Timeplan database: 178 schedules -> 150+.
export const projectFallbacks = {
  UTVEKSLING: { VISITORS: 1400, recordedAt: "2026-10-14T00:00:00.000Z" },
  TIMEPLAN: { VISITORS: 400, SCHEDULES: 150, recordedAt: "2026-10-14T00:00:00.000Z" },
};
