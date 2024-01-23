<script setup>
// TODO: Import the supabase client
const supabase = useSupabaseClient();

// TODO: add the email and password variables
const email = ref("");
const password = ref(null);

// TODO: add error handling variables (not as important for our uses)
const successMsg = ref(null);
// TODO: Add the sign up function that will send the data to the server
async function signUp() {
  // set a variable to the auth module using await syntax
  try {
    const { data, error } = await supabase.auth.signUp({
      // pass information to the auth module
      email: email.value,
      password: password.value,
      // TODO: send to confirmation page when successful
    });
    // pass error information along
    if (error) throw error;
    successMsg.value = "Check email to confirm account";
  } catch (error) {
    console.error(error);
  }
}
</script>

<template>
  <main>
    <h1>Sign Up</h1>
    <!-- TODO: Add a function called signUp that will send the information to the database when the form is filled out and submitted -->
    <form @submit.prevent="signUp">
      <label for="email">
        Email:
        <!-- TODO: create a variable for email -->
        <input type="email" v-model="email" />
      </label>
      <label for="password">
        Password:
        <!-- TODO: create a variable for password -->
        <input type="password" v-model="password" />
      </label>
      <button @click="signUp">Sign Up</button>
    </form>
  </main>
</template>