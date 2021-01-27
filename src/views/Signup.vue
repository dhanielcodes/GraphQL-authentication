<template>
  <div>
    <form action="" autocomplete="on">
      <h2>Sign Up</h2>
      <div class="field">
        <label for="mail">EMAIL</label>
        <input type="email" name="email" id="mail" autocomplete="on" />
      </div>
      <div class="field">
        <label for="password">PASSWORD</label>
        <input type="password" name="password" id="password" />
      </div>
      <button>Submit</button>
    </form>
  </div>
</template>

<script>
export default {};
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
