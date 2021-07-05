<template>
  <div>
    <NewsFeed />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NewsFeed from "@/components/news-feed.vue";

export default defineComponent({
  name: "Main",
  components: {
    NewsFeed,
  },
});
</script>
