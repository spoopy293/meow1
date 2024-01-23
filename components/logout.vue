<script setup>
const supabase = useSupabaseClient();

function logout() {
  try {
    const { error } = supabase.auth.signOut();
    // throw an error if one happens
    if (error) throw error;
  } catch (error) {
    // log the error
    console.error(error);
  }
}
</script>
<template>
  <button @click="logout">Log Out</button>
</template>

<style scoped>
button {
  height: 32px;
  background-color: blue;
  color: white;
}
</style>