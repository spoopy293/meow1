<script setup>
const user = useSupabaseUser();
</script>
<template>
  <header>
    <div>LOGO</div>
    <nav>
      <NuxtLink to="login">Log In</NuxtLink>
      <NuxtLink to="signup">Sign Up</NuxtLink>
    </nav>
    <div class="buttons">
      <p v-if="user">{{ user.email }}</p>
      <Logout />
    </div>
  </header>
</template>

<style scoped>
header {
  background-color: black;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
}
nav {
  display: flex;
  justify-content: space-around;
  gap: 2rem;
}
a,
div {
  color: white;
  text-decoration: none;
}
a:hover {
  color: lightblue;
}
.buttons {
  display: flex;
  gap: 8px;
}
</style>