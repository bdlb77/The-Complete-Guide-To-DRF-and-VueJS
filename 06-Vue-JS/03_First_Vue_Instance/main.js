const app = Vue.createApp({
  data() {
    return {
      flag: true,
      styleObject: { backgroundColor: 'green', border: '5px solid orange'}
    }
  },
  methods: {
    changeShape() { 
      console.log(this.flag)
      this.flag = !this.flag
    }
  }
})

app.mount("#app")