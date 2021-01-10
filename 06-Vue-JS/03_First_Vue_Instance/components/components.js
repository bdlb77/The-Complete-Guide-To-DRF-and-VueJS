const app = Vue.createApp({
  data() {
    return {
      comments: [
        {username: "alice", content: "first comment!"},
        {username: "bob", content: "This is great!"},
        {username: "Ironman", content: "New Armor!!"},
        {username: "Superman", content: "Kryptonite sucks."}
      ]
    }
  },
  methods: {
    addNewComment(new_comment) {
      this.comments.push(new_comment)
    }
  },
})
app.component("single-comment", {
  props: {
    comment: {
      type: Object,
      required: true
    }
  },
  template: `
    <div class="mb-2">
      <div class="card">
        <div class="card-header">
          <p>Published by: {{comment.username}}</p>
        </div>
        <div class="card-body">
          <p>{{ comment.content }}</p>
        </div>
      </div>
    </div>
  `
})

app.component("comment-list", {
  props: {
    comments: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      newComment:  null,
      commentAuthor:  null,
      error: null
    }
  },
  methods: {
    onSubmit() {

      if (this.newComment) {
        if (!this.commentAuthor){
          this.commentAuthor = "anon"
        }
        this.$emit('submit-comment', {
          username: this.commentAuthor,
          content: this.newComment
        })
        this.newComment = null;
        this.commentAuthor = null;

        if(this.error) this.error = null;
      } else {
        this.error = "Please enter a comment.";
      }
    }
  },
  template: `
    <div class="mt-2">
      <div class="container">
        <single-comment
          v-for="(comment, index) in comments"
          :comment="comment"
          :key="index">
        </single-comment>
        
        <h3>{{error}}</h3>
        <form @submit.prevent="onSubmit" class="mt-3" style="border: 1px solid black">
          <div class="form-group">
            <label for="commentAuthor">Your Username</label>
            <input 
              type="text" 
              class="form-control"
              id="commentAuthor"
              v-model="commentAuthor"/>
          </div>
          <div class="form-group">
            <label for="newComment">Add a Comment!</label>
            <textarea 
              class="form-control"
              id="newComment"
              rows="3"
              cols="50"
              v-model="newComment"></textarea>
          </div>
          <button 
            type="submit"
            class="btn btn-sm btn-primary">Publish</button>
        </form>
      </div>
    </div>
  `
})
app.mount("#app")