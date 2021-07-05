<template>
  <div  @click="viewButton" class="single-content">
    <h3>{{ post.title }}</h3>
    <p>{{ snippet }}</p>
  </div>
  <div class="buttons">
    <button @click="editButton">Edit Post</button>
  </div>
</template>

<script lang="ts">
import getPostFeed from '@/composables/post-functions';
import IPost from '@/interface/Post';
import { defineComponent, PropType, computed } from 'vue';

export default defineComponent({
  props: {
    post: {
      type: Object as PropType<IPost>,
      required: true,
    },
  },
  setup(props) {
    const snippet = computed(() => {
      return props.post.content.substring(0,100)+'...'
    });
    
    const { toEdit, toView } = getPostFeed();

    function editButton() {
      toEdit(props.post.id);
    }

    function viewButton() {
     toView(props.post.id);
    }

    return { editButton, viewButton, snippet };
  },
});

</script>

<style>
    .single-content{
        background:lightblue;
        margin: 5px;
        padding: 10px 20px;
        cursor: pointer;
        text-align: center;
        border: 5px solid #1C6EA4;
    }
    .single-content:hover{
      background: white;
    }
</style>