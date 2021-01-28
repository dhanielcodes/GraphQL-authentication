<template>
  <div>
    <form @submit.prevent="login" method="POST" autocomplete="on">
      <h2>Login</h2>
      <div class="field">
        <label for="mail">EMAIL</label>
        <input type="email" v-model="email" name="email" id="mail" autocomplete="on" />
      </div>
      <div class="field">
        <label for="password">PASSWORD</label>
        <input type="password" v-model="password" name="password" id="password" />
      </div>
      <button>Submit</button>
    </form>
  </div>
</template>

<script>
import gql from "graphql-tag";
import { onLogin } from "../vue-apollo";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.$apollo
        .mutate({
          // Query
          mutation: gql`
            mutation($email: String!, $password: String!) {
              login(email: $email, password: $password) {
                token
                email
              }
            }
          `,
          variables: {
            email: this.email,
            password: this.password,
          },
        })
        .then((data) => {
          onLogin(this.$apollo.provider.defaultClient, data.data.login.token);
          console.log(data);
          localStorage.setItem("email", data.data.login.email);
          this.$router.push({ name: "Admin" });
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style scoped>
* {
  color: var(--primary);
}
form {
  padding: 40px;
  width: 400px;
  margin: auto;
  margin-top: 40px;
  border: 5px solid var(--primary);
  border-radius: 20px;
}
form .field {
  margin-top: 40px;
}
form input {
  padding: 20px;
  width: 100%;
  margin-top: 10px;
  border: none;
  background: #3080e221;
  border-radius: 20px;
  outline: none;
}
form button {
  padding: 20px;
  width: 100%;
  margin-top: 50px;
  border: none;
  background: var(--primary);
  border-radius: 20px;
  color: white;
  font-size: 20px;
  outline: none;
}
@media screen and (max-width: 520px) {
  form {
    width: 90%;
  }
}
</style>
