<template>
    <div>
<div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="post.title"
          name="title"
        />
      </div>

      <div class="form-group">
        <label for="body">body</label>
        <input
          class="form-control"
          id="body"
          required
          v-model="post.body"
          name="body"
        />
      </div>

      <button @click="savePost" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newPost">Add</button>
    </div>
  </div>
    </div>
</template>

<script>
import DataService from '../services/service';

export default {
  name: "add-post",
  data() {
    return {
      post: {
        id: null,
        title: "",
        body: "",
        published: false
      },
      submitted: false
    };
  },
  methods: {
    savePost() {
      var data = {
        title: this.post.title,
        body: this.post.body
      };

      DataService.create(data)
        .then(response => {
          this.post.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },

    newPost() {
      this.submitted = false;
      this.post = {};
    }
  }
};
</script>
