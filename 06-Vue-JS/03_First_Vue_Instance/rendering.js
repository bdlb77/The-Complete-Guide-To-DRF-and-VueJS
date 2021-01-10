const app = Vue.createApp({
  data() {
    return {
      users: [
        {
          id: 567,
          name: "alice",
          profession: "developer"
        }, 
        {
          id: 235,
          name: "bob",
          profession: "artist"
        }, 
        {
          id: 568,
          name: "batman",
          profession: "manager"
        }
      ]
    }
  },
  methods: {

  }
})

app.mount("#app")