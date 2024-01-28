import { serverSupabaseClient } from "#supabase/server";

export default eventHandler(async (event) => {
  const client = await serverSupabaseClient(event);
  const { data } = await client.from('eMPLOYEES').select(); // Adjust the case accordingly
  return { employees: data };
});