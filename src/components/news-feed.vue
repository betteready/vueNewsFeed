<template>
  <div id="postform">
    <PostForm />
  </div>
  <div id="post-list">
    <PostList :posts="posts" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PostList from './post-list.vue';
import PostForm from './post-form.vue';
import getPostFeed from '../composables/post-functions';

export default defineComponent({
  name: 'NewsFeed',
  components: {
    PostList,
    PostForm,
  },
  setup() {
    const { posts } = getPostFeed();
    return { posts };
  },
});
</script>

<style>
div #postform {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 3fr));
  grid-auto-rows: minmax(200px, auto);
  grid-gap: 0px;
  max-width: 50%;
  margin: 0 auto;
  justify-content: left;
  text-align: left;
}

@media only screen and (max-width: 960px) {
  div #postform {
    max-width: 100%;
  }

  .post-list {
    max-width: 100%;
  }
}

textarea {
  font-family: Arial, Helvetica, sans-serif;
  resize: vertical;
  padding: 20px;
  text-align: left;
  border-radius: 10px;
  color: black;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border: 2px solid gray;
  font-size: 1.2em;
}

#postTitle {
  font-family: Arial, Helvetica, sans-serif;
  resize: vertical;
  padding: 10px;
  text-align: left;
  border-radius: 10px;
  color: black;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border: 2px solid rgb(219, 219, 219);
  font-size: 1.2em;
}

.buttons {
  display: flex;
  justify-content: flex-end;
  margin-top: 0px;
}

button {
  padding: 10px;
  margin: 5px;
  background: green;
  border-radius: 5px;
  color: white;
}

button:hover {
  background-color: lightgreen;
}

button:active {
  transform: scale(0.90);
}
</style>