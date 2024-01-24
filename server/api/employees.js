import { serverSupabaseClient } from "#supabase/server";

export default eventHandler(async (event) => {
  const client = await serverSupabaseClient(event);

  // Fetch data from the "eMPLOYEES" table
  const { data } = await client.from("eMPLOYEES").select("*");

  // Insert data into the "eMPLOYEES" table
  const { data: insertData, error } = await client
    .from('eMPLOYEES')
    .insert([
      { some_column: 'someValue', other_column: 'otherValue' },
    ])
    .select();

  return { eMPLOYEES: data, insertedData: insertData, error };
});
