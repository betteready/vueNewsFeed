<template>
      <div v-for="post in posts" :key="post.id">
        <SinglePost :post="post" />
      </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from 'vue';
import SinglePost from './single-post.vue';
import IPost from '@/interface/Post';

export default defineComponent({
  name: 'PostList',
  props: {
    posts: {
      type: Array as PropType<IPost[]>,
      required: true,
    },
  },
  components: { SinglePost },
});
</script>