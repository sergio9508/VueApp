<template>
  <div>
      <table>
          <thead>
            <tr>
              <th v-for="columns in columns" :key="columns.id">
                {{ columns }}
              </th>
              <th>
                     
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="photos in photos" :key="photos.id">
              <td v-for="columns in columns" :key="columns.id">
                {{ photos[columns] }}
              </td>
              <td>
                <button class="myButton">Editar</button>
                <button class="myButton">Eliminar</button>
              </td>
                
            </tr>
          </tbody>
      </table>
  </div>

</template>
<script>
export default {
  data() {
    return {
      photos: []
    };
  },
  created() {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then(response => response.json())
      .then(json => (this.photos = json));
  },
  computed: {
    columns() {
      if (this.photos.length == 0) {
        return [];
      } else {
        return Object.keys(this.photos[0]);
      }
    }
  }
};
</script>
<style>
button {
  font-family: "Open Sans", sans-serif;
  background: #44475c;
  color: white;
}
table {
  font-family: "Open Sans", sans-serif;
  width: 1000px;
  border-collapse: collapse;
  border: 3px solid #44475c;
  margin: 2em 2em 3em 9em;
}

table th {
  text-transform: uppercase;
  text-align: center;
  background: #44475c;
  color: #fff;
  padding: 8px;
  min-width: 30px;
}

table td {
  text-align: center;
  padding: 9px;
  border-right: 2px solid #7d82a8;
}
table td:last-child {
  border-right: none;
}
table tbody tr:nth-child(2n) td {
  background: #d4d8f9;
}
.myButton {
  background-color: #44475c;
  -moz-border-radius: 7px;
  -webkit-border-radius: 7px;
  border-radius: 7px;
  border: 1px solid #7d82a8;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 12px;
  padding: 11px 15px;
  text-decoration: none;
}
.myButton:hover {
  background-color: #7d82a8;
}
.myButton:active {
  position: relative;
  top: 1px;
}
</style>
