<template>
  <div class="content-list">
    <div>
      <form>
        <div class="form-control"><h3>Title</h3>
        <textarea
          id="contentTitle"
          v-model="content.title"
        />
        </div>
      <div class="form-control"><p>Details</p>
      <textarea
          rows="10"
          v-model="content.details"
      />
      </div>
      </form>
      <div class="buttons">
        <button><router-link id="newsfeed" to="/newsfeed">Back</router-link></button>
        <div>
          <button @click.prevent="saveEdit"><router-link id="newsfeed" to="/newsfeed">Save Changes</router-link></button>
          <button @click.prevent="onDelete" id="delete">
            <router-link id="newsfeed" to="/newsfeed">Delete</router-link>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import contentData from "../data/db";
import ContentInterface from "../interface/contentInterface";
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: ["id"],
  setup(props) {
    const key = ref(props.id);
    const contents = ref(contentData);
    let index = 0;

    let content: ContentInterface = {
      id: "",
      title: "",
      details: "",
    };

    for (let i = 0; i < contents.value.length; i++) {
      if (contents.value[i].id === props.id) {
        content.title = contents.value[i].title;
        content.details = contents.value[i].details;
        content.id = contents.value[i].id;
        index = i;
      }
    }

    function saveEdit() {
        alert("Post Updated");
        contents.value.splice(index, 1, content);
        console.log(contents);
    }

    function onDelete() {
        console.log("Post deleted");
        contents.value.splice(index, 1);
        console.log(contents);
    }

    return { key, contents, content, saveEdit, index, onDelete };
  },
});
</script>

<style>
.content-list{
  background:lightblue;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
  text-align: center;
  border: 5px solid #1C6EA4;
    }
.buttons {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>
