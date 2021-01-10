const app = Vue.createApp({
  data() {
    return {
      comment: null,
      comments: [],
      errors: null
    }
  },
  computed: {

  },
  methods: {
    onSubmit() {
      if (this.comment) {
        const new_comment = this.comment;
        this.comments.push(new_comment)
        this.comment = null;
        if (this.errors) this.errors = null
      } else {
        this.errors = "The Comment field can't be empty."
      }
    }
  },
})

app.mount("#app")