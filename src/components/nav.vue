<template>
  <div class="nav">
    <img src="../assets/logo.svg" alt="" srcset="" />
    <div class="links">
      <router-link :to="{ name: 'Login' }">Login</router-link>
      <router-link :to="{ name: 'Signup' }">Sign up</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0;
}
.links a {
  margin-left: 20px;
  text-decoration: none;
  color: black;
  font-weight: 500;
}
</style>
