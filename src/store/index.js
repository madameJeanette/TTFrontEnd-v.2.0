import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    tts: {}
  },
  actions: {
    LOAD_TT_LIST: function ({ commit }) {
      axios.get("http://localhost:8000/api/tarantulas").then(       //get tarantulas from db
        response => {
          commit("SET_TT_LIST", { list: response.data.items });
        },
        err => {
          console.log(err);
        }
      );
    },
    ADD_TT: function ({ commit }, tt) {
      axios.post("http://localhost:8000/api/tarantulas/", tt).then(  //add new tarantula in db
        response => {
          commit("ADD_NEW_TT", { tt: response.data });
        },
        err => {
          console.log(err);
        }
      );
    },
    DELETE_TT: function ({ commit }, tt) {
      axios.delete("http://localhost:8000/api/tarantulas/" + tt._id).then( //delete tarantula in db
        response => {
          commit("DELETE_TT_F_LIST", tt);
        },
        err => {
          console.log(err);
        }
      );
    },
    UPDATE_TT: function ({ commit }, tt) {
      console.log(tt);
      axios
        .put("http://localhost:8000/api/tarantulas/" + tt._id, { //update tarantula in db
          name: tt.name,
          latinName: tt.latinName,
          habitat: tt.habitat,
          collected: tt.collected
        })
        .then(
          response => {
            commit("UPDATE_TT_ITEMS", tt);  
          },
          err => {
            console.log(err);
          }
        );
    }
  },
  mutations: {
    SET_TT_LIST: (state, { list }) => {
      state.tts = list;
    },
    ADD_NEW_TT: (state, { tt }) => { //add new tarantula local store
      state.tts.push(tt);
    },
    DELETE_TT_F_LIST: (state, tt) => { //delete tarantula local store
      let deleteTt = state.tts
        .map(function (e) {
          return e._id;
        })
        .indexOf(tt._id);
      state.tts.splice(deleteTt, 1);
    },
    UPDATE_TT_ITEMS: (state, tt) => { //update tarantula local store
      let findTt = state.tts
        .map(function (e) {
          return e._id;
        })
        .indexOf(tt._id);
      state.tts.splice(findTt, 1, tt);
    }
  },
  getters: {
    
    
  }
});
export default store;
