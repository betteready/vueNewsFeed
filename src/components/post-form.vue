<template>
  <div>
    <form>
      <input 
        id="postTitle" 
        placeholder="Title" 
        v-model="title"/>
      <textarea 
        id="textarea" 
        placeholder="Add details here" 
        v-model="content">
      </textarea>
      <div class="buttons">
        <button @click.prevent="createPost">Create Post</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import getPostFeed from '@/composables/post-functions';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'PostForm',
  setup() {
    let { addPost } = getPostFeed();

    const title = ref('');
    const content = ref('');

    function createPost() {
      if (title.value.trim() !== '') {
        addPost(title.value, content.value);
        title.value = '';
        content.value = '';
      } else {
        alert('Please indicate a title');
      }
    }

    getPostFeed();

    return { content, title, createPost};
  },
});
</script>

<style></style>
