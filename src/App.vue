<script setup lang="ts">
import { onMounted } from "vue";
import { useHttp } from "./composables/useHttp";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const {
  data: posts,
  isLoading,
  isError,
  error,
  execute: fetchPosts,
} = useHttp<Post[]>();

onMounted(() => {
  fetchPosts("https://jsonplaceholder.typicode.com/posts");
});

</script>

<template>
  <div>
    <h1>Демонстрация useHttp</h1>

    <div v-if="isLoading">
      <p>Загрузка...</p>
    </div>

    <div v-if="isError">
      <p>Произошла ошибка:</p>
      <pre>{{ error }}</pre>
    </div>

    <div v-if="posts">
      <h2>Список постов ({{ posts.length }})</h2>
      <ul>
        <li v-for="post in posts.slice(0, 10)" :key="post.id">
          <strong>{{ post.title }}</strong>
        </li>
      </ul>
    </div>
  </div>



</template>

<style scoped>
  pre {
  background-color: #f4f4f4;
  padding: 10px;
  border-radius: 5px;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  padding: 5px 0;
  border-bottom: 1px solid #ccc;
}
</style>
