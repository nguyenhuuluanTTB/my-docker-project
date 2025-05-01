<template>
  <header>
    <h1>HEADER</h1>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/signin">Sign In</router-link>
      <router-link to="/signup">Sign Up</router-link>
    </nav>
  </header>
</template>

<script>
export default {
    name: 'HeaderComponent'
}
</script>

<style>

</style>