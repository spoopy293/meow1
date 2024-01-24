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
    <h1>Admin Login Page</h1>
    <section>
      <label for="email">
        email
        <input type="email" v-model="email" />
      </label>
      <label for="password">
        password
        <input type="password" v-model="password" />
      </label>

      <button @click="signIn">Sign In with E-Mail</button>
    </section>
    <section>
      <h1>Active user information</h1>
      <!-- Show user information -->
      <p v-if="user">{{ user.email }}</p>
    </section>
    <h1>Employees</h1>
    <!-- render the fetched data -->
    <ul>
      <li v-for="employee in eMPLOYEES" :key="employee.EMPLOYEE_ID">
        <h3>Name: {{ employee.FIRST_NAME }} {{ employee.LAST_NAME }}</h3>
        <p>Email: {{ employee.EMAIL }}</p>
        <p>Phone: {{ employee.PHONE_NUMBER }}</p>
      </li>
    </ul>
    <h1>Insert New Data</h1>
    <section>
      <label for="EMPLOYEE_ID">
        Employee ID
        <input type="EMPLOYEE_ID" v-model="EMPLOYEE_ID" />
      </label>
      <label for="FIRST_NAME">
        First Name
        <input type="FIRST_NAME" v-model="FIRST_NAME" />
      </label>
      <label for="LAST_NAME">
        Last Name
        <input type="LAST_NAME" v-model="LAST_NAME" />
      </label>
      <label for="EMAIL">
        Email
        <input type="EMAIL" v-model="EMAIL" />
      </label>
      <label for="PHONE_NUMBER">
        Phone Number
        <input type="PHONE_NUMBER" v-model="PHONE_NUMBER" />
      </label>
      <label for="HIRE_DATE">
        Hire Date
        <input type="HIRE_DATE" v-model="HIRE_DATE" />
      </label>
     </section>
    <section>
      <label for="JOB_ID">
        Job ID
        <input type="JOB_ID" v-model="JOB_ID" />
      </label>
      <label for="SALARY">
        Salary
        <input type="SALARY" v-model="SALARY" />
      </label>
      <label for="COMMISSION_PCT">
        Commission Percentage
        <input type="COMMISSION_PCT" v-model="COMMISSION_PCT" />
      </label>
      <label for="MANAGER_ID">
        Manager ID
        <input type="MANAGER_ID" v-model="MANAGER_ID" />
      </label>
      <label for="DEPARTMENT_ID">
        Department ID
        <input type="DEPARTMENT_ID" v-model="DEPARTMENT_ID" />
      </label>
    </section>
   <section>
      <button @click="Insert">Insert Data</button>
    </section>
  </main>
</template>