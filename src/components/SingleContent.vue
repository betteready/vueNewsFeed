<template>
  <div class="single-content">
    <h1>{{ content.title }}</h1>
    <p>{{content.id}}</p>
    <p>{{ snippet }}</p>

    <div class="buttons">
      <button>
        <router-link :to="{ name: 'viewDetails', params: { id: content.id } }">
          View Details
        </router-link>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

export default defineComponent({
  props: ["content"],
  setup(props){
    const snippet = computed(() => {
      return props.content.details.substring(0,75)+'....'
    })
    return{
      snippet
    }
  }
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
</style>