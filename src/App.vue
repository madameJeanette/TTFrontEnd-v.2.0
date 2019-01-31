<template>
  <div id="app">
    <Header/>
    <AddTt/>
    <Tts/>
    
  </div>
</template>

<script>
import Header from "./components/layout/Header";
import Tts from "./components/Tts";
import AddTt from "./components/AddTt";
// import axios from 'axios'

export default {
  name: "App",
  components: {
    Header,
    Tts,
    AddTt
  },
  mounted: function() {
    this.$store.dispatch("LOAD_TT_LIST");
  }

  // data() {
  //   return {
  //     tts: []
  //   };
  // },

  // methods: {
  //   deleteTt(_id) {
  //     axios
  //       .delete(`http://localhost:8000/api/tarantulas/${_id}`)

  //       .then((response) => {this.tts = this.tts.filter(tt => tt._id !== _id)})
  //       .catch(err => console.log(err));
  //   },

  //   editTt(_id) {
  //     axios
  //       .put(`http://localhost:8000/api/tarantulas/${_id}`, {
  //         name: this.tts.name,
  //         latinName: this.tts.latinName,
  //         habitat: this.tts.habitat,
  //         collected: this.tts.collected
  //       })
  //       .then(response => {
  //         console.log(response);
  //       })
  //       .catch(error => {
  //         console.log(error);
  //       });
  //   },

  //   addTt(newTt) {
  //     const { name, latinName, habitat, collected } = newTt;

  //     axios
  //       .post("http://localhost:8000/api/tarantulas", {
  //         name,
  //         latinName,
  //         habitat,
  //         collected
  //       })

  //       .then(response => (this.tts = [...this.tts, response.data]))
  //       .catch(error => console.log(error));
  //   }
  // },
  // created() {
  //   axios
  //     .get("http://localhost:8000/api/tarantulas")
  //     .then(response => (this.tts = response.data.items))
  //     .catch(err => console.log(err));
  // }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}

.btn {
  display: inline-block;
  border: none;
  background: darkgreen;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}

.btn:hover {
  background: seagreen;
}

.btn-edit {
  float: right;
  display: inline-block;
  border: none;
  background: grey;
  color: white;
  padding: 7px 20px;
  cursor: pointer;
}
</style>
