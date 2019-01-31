<template>
  <div>
    <form @submit="addTt">
      <input type="text" v-model="name" name="name" placeholder="New spider" >
      <input type="text"  v-model="latinName" name="latinName" placeholder="latinName" >
      <input type="text"  v-model="habitat" name="habitat" placeholder="Habitats" >
       <input type="submit" value="Submit" class="btn">
    </form>
  </div>
</template>

<script>

export default {
  name: 'AddTt',
  data () {
    return {
      name: '',
      latinName: '',
      habitat: ''
    }
  },
  methods: {
    addTt (e) {
      e.preventDefault()
      var newTt = {

        name: this.name,
        latinName: this.latinName,
        habitat: this.habitat
      }
      this.$store.dispatch('ADD_TT', newTt)

      // //Send up to parent
      // this.$emit('add-tt', newTt);

      // this.name = '';
      // this.latinName= '';
      // this.habitat= '';

    }
  }
}
</script>

<style scoped>
  form {
    display: flex;
  }
  input[type="text"] {
    flex: 10;
    padding: 5px;
  }
  input[type="submit"] {
    flex: 2;
  }
</style>
