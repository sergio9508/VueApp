<template>
  <div id="app">
    <h1>Hello From Vue</h1>
    <nav>
      <ul>
        <li>
          <router-link to="/Test">
            prueba
          </router-link>
        </li>
        <li>
          <router-link to="/">
            Test
          </router-link>
        </li>
        <li>
          <router-link to="/table">
            Table
          </router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
    
  </div>
</template>

<script>
import Test from "./components/Test";
import prueba from "./components/prueba";
import table from "./components/table";
export default {
  name: "App",
  components: {
    prueba,
    Test,
    table
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
