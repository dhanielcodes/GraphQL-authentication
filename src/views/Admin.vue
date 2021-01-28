<template>
  <div>
    <h1>Admin</h1>
    <h2>{{ me.email }}</h2>
  </div>
</template>

<script>
import gql from "graphql-tag";
export default {
  data() {
    return {
      me: null,
    };
  },
  apollo: {
    me: gql`
      query {
        me {
          email
        }
      }
    `,
  },
};
</script>

<style scoped></style>
