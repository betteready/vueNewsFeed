<template>
  <div>
      <div id="postTitle">
        <h3>{{post.title}}</h3>
        <p>{{post.content}}</p>
    </div>
    <div class="buttons">
      <div><button @click="backButton">Back</button></div>
    </div>
  </div>
</template>

<script lang="ts">
import IPost from '@/interface/Post';
import router from '@/router';
import getPostFeed from '../composables/post-functions';
import { defineComponent, ref } from 'vue';


export default defineComponent({
  props: {
    id: {
      type: Number,
      required: true,
    },
  },

  setup(props) {
    const key = ref(props.id);
    const { posts } = getPostFeed();

    let post: IPost = {
      title: '',
      content: '',
      id: 0,
    };

    for (let i = 0; i < posts.value.length; i++) {
      if (posts.value[i].id == key.value) {
        post.title = posts.value[i].title;
        post.content = posts.value[i].content;
        post.id = posts.value[i].id;
      }
    }

    function backButton(){
      router.go(-1);
    }

    return { post, backButton };
  },
});
</script>