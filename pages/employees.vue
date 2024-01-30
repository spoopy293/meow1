<script setup>
// TODO: Set up the supabase client
const supabase = useSupabaseClient();

// TODO: set up input variables
const email = ref("");
const password = ref(null);
// Fetch the data from a server route

const { data } = await useFetch("/api/employees", {
  headers: useRequestHeaders(["cookie"]),
});
const employees = data._value.employees;
// TODO: create sign in function
async function signIn() {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  });
  if (error) throw error;
}
// TODO: access the logged in user and show the users information
const user = useSupabaseUser();
</script>
<template>
  <main>
  
    <h1>Employees</h1>
    <!-- render the fetched data -->
    <ul>
      <li v-for="employee in employees" :key="employee.EMPLOYEE_ID">
        <h3>Name: {{ employee.FIRST_NAME }} {{ employee.LAST_NAME }}</h3>
        <p>Email: {{ employee.EMAIL }}</p>
        <p>Phone: {{ employee.PHONE_NUMBER }}</p>
      </li>
    </ul>
  </main>
</template>