<template>
  <div>
    <h1>Admin</h1>
    <h2>{{ me }}</h2>
    <a href="/" @click.prevent="logout">Logout</a>
  </div>
</template>

<script>
import { onLogout } from "../vue-apollo";
export default {
  data() {
    return {
      me: null,
    };
  },
  methods: {
    logout() {
      onLogout();
      this.$router.push({ name: "Login" });
      localStorage.removeItem("email");
    },
  },
  created() {
    this.me = localStorage.getItem("email");
  },
};
</script>

<style scoped></style>
