<template>
  <div class="content-list">
    <div v-for="content in contents" :key="content.id" class="list">
      <SingleContent :content="content" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SingleContent from "@/components/SingleContent.vue";

export default defineComponent({
  name: "ContentList",
  props: ["contents"],
  components: { SingleContent },
});
</script>

