import Vuex from 'vuex';
import Vue from 'vue'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
      users: [
        {
          id: 0,
          title: ''
        }
      ],
      posts: [],
    },
  
    mutations: {
      getUsers(state, payload) {
        state.users = payload;
      },
      savePost(state, payload) {
        state.posts.push(payload);
      }
    },
    actions: {
      async getUser(context){
          await context.commit('getUsers', getDataUser());
      },
      createPost(context, payload) {
        console.log(payload);
        context.commit('savePost', payload);
      } 
    },
  });
  
function getDataUser() {
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(json => {
    // context.commit('getUsers', json);
    console.log(json);
    return json;
    
  })
}

export default store;