const app = Vue.createApp({
  data() {
    return {
      first_name: "John",
      last_name: "Doe"
    }
  },
  computed: {
    getRandomComputed() {
      return Math.random()
    }, 
    fullName() {
      return `${this.first_name} ${this.last_name}`
    }
  },
  methods: {
    getRandomNumber() {
      return Math.random()
    }
  }
})

app.mount("#app")
