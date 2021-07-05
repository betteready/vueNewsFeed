import postData from '@/data/post-data';
import IPost from '@/interface/Post';
import { ref } from 'vue';
import router from '@/router';
import { RouteName } from '@/constants/route-names';

function getPostFeed() {
  const posts = ref(postData);

  function addPost(title: string, content: string) {
    alert("Post Added!");
    posts.value.unshift({
      title: title,
      content: content,
      id: Math.floor(Math.random() * 1000),
    });
  }

  function toView(key: number){
    router.push({ name: RouteName.ViewPost, params: { id: key } });
  }

  function toEdit(key: number) {
    router.push({ name: RouteName.EditPost, params: { id: key } });
  }

  function deletePost(index: number){
      alert('Post deleted');
      posts.value.splice(index, 1);
      return true;
  }

  function saveEdit(post: IPost, index: number) {
      alert('Saved Changes');
      posts.value.splice(index, 1, post);
      return true;
  }

  return { posts, addPost, saveEdit, deletePost, toEdit, toView };

}

export default getPostFeed;