<template>
    <div class="users">
        <h1>usercomponent</h1>
        <ul>
            <li v-for="user in user" :key="user.id">
                {{user.nombre}} - {{user.email}} 
                <button class='btn' v-on:click="deleteUser(user)">X</button>
            </li>
        </ul>
        <form v-on:submit.prevent="addUser">
            <input type="text" v-model="newUser.nombre" placeholder="nombre">
            <input type="email" v-model="newUser.email"
            placeholder="email">
            <button type="submit">Add</button>
        </form>
    </div>
</template>
<script>
export default {
  data() {
    return {
      user: [
        {
          nombre: "Joe",
          email: "Joe@gmail.com"
        },
        {
          nombre: "James",
          email: "James@gmail.com"
        },
        {
          nombre: "Ryan",
          email: "Ryan@gmail.com"
        }
      ],
      newUser: {}
    };
  },
  methods: {
    addUser(e) {
      this.user.push(this.newUser);
      this.newUser = {};
    },
    deleteUser(user) {
      this.user.splice(this.user.indexOf(user), 1);
    }
  }
};
</script>
<style>
.users {
  background: teal;
  color: white;
  padding: 20px;
}
.btn {
  background: red;
  color: white;
}
</style>
