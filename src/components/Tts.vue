<template>
  <div>
    <v-app id="inspire">
      <v-expansion-panel>
        <v-expansion-panel-content v-bind:key="tt._id" v-for="tt in tts">
          <div slot="header"><h1>{{tt.name}}</h1></div>
          <v-card>
            <v-card-text>
              <h2>{{tt.latinName}}</h2>
              <h2>{{tt.habitat}}</h2>

              <form v-on:submit.prevent="editTt(tt)">
                <input type="text" v-model="name" name="name" placeholder="New spider">
                <input type="text" v-model="latinName" name="latinName" placeholder="latinName">
                <input type="text" v-model="habitat" name="habitat" placeholder="Habitat">
                
                <button @click="deleteTt(tt)" class="del">X</button>
                <input type="submit" value="Submit" class="btn">
              </form>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-app>
  </div>
</template>

<script>
// import TtItem from "./TtItem.vue";
import { mapState } from "vuex";
// import EditTt from "./EditTt"

export default {
  name: "Tts",
  components: {},
  computed: mapState(["tts"]),
  data() {
    return {
      name: "",
      latinName: "",
      habitat: ""
    };
  },
  methods: {
    deleteTt(tt) {
      this.$store.dispatch("DELETE_TT", tt);
    },
    editTt(tt) {
      const newTarantula = {
        _id: tt._id,
        name: this.name,
        latinName: this.latinName,
        habitat: this.habitat
      };
      console.log(newTarantula);
      this.$store.dispatch("UPDATE_TT", newTarantula);
    }
  }
};
</script>
<style scoped>
</style>
