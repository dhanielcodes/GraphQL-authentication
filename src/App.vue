<template>
  <div id="app">
    <Nav />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    Nav: () => import("./components/nav.vue"),
  },
};
</script>

<style>
:root {
  --primary: #307fe2;
}
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Quicksand", sans-serifs;
}
</style>
