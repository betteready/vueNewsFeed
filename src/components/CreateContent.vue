<template>
    <form @submit="onSubmit" class="add-form">
        <div class="form-control">
            <label>Title: </label>
            <input type="text" v-model="title" name="title"
            placeholder="Add Title of News" />
        </div>
        <div class="form-control">
            <label>Details: </label>
            <input
                type="text"
                rows = "10"
                v-model="details"
                name="details"
                placeholder="Add Content"
            />
        </div>
    </form>
    <div class="buttons">
        <button @click.prevent="addContent">Create Post</button>
    </div>
</template>

<script>

import { ref } from "vue";
import getData from '@/composables/getData';

export default {
    name: 'CreateContent',
    setup() {
        let {contents} = getData();
        const title = ref("");
        const details = ref("");

        function addContent() {
          if(title.value!=""){
            contents.value.unshift({
                id: Math.floor(Math.random() * 1000),
                title: title.value,
                details: details.value,
            });
          }
          else{
            alert("Please add a valid Title!")
          }
        }
        title.value = "";
        details.value = "";


        return {
            contents,
            title,
            details,
            addContent
        }
    },
}
</script>


<style scoped>
.add-form {
  margin-bottom: 40px;
}

.form-control {
  margin: 20px 0;
}

.form-control label {
  display: block;
}

.form-control input {
  width: 90%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}

.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.form-control-check label {
  flex: 1;
}

.form-control-check input {
  flex: 2;
  height: 20px;
}

</style>
