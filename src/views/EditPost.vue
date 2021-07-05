<template>
  <div>
    <input id="postTitle" placeholder="Title" v-model="post.title"/>
    <textarea rows="5" placeholder="Add details here" v-model="post.content"></textarea>
    <div class="buttons">
      <div><button @click="backButton" class="btn">Back</button></div>
      <button @click="saveButton">Save Changes</button>
      <button @click="deleteButton">Delete</button>
    </div>
  </div>
</template>

<script lang="ts">
import IPost from '@/interface/Post';
import getPostFeed from '../composables/post-functions';
import { defineComponent, ref } from 'vue';
import router from '@/router';

export default defineComponent({
  props: {
    id: {
      type: Number,
      required: true,
    },
  },

  setup(props) {
    const key = ref(props.id);
    const { posts, saveEdit, deletePost } = getPostFeed();
    let index = 0;

    let post: IPost = {
      title: '',
      content: '',
      id: 0,
    };

    for (let i = 0; i < posts.value.length; i++) {
      if (posts.value[i].id == key.value) {
        index = i;
        post.title = posts.value[i].title;
        post.content = posts.value[i].content;
        post.id = posts.value[i].id;
      }
    }

    
    function backButton(){
      router.go(-1);
    }

    function deleteButton() {
      if (deletePost(index)) {
        router.replace('/feed');
      }
    }

    function saveButton() {
      if (post.title.trim() !== ''){
        if (saveEdit(post, index)) {
          router.go(-1);
        }
      } else {
        alert('The post does not have a title');
      }
      
    }

    return { post, saveButton, deleteButton, backButton };
  },
});
</script>

