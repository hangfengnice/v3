<template>
  <div class="blog-post">
    <h1>{{title}}</h1>
    <p>author: {{author}}</p>
    <p>sex: {{sex}}</p>

  </div>
</template>

<script>
export default {
  name: 'blog-post',
  props: {
    title: {
      type: String
    },
    author: {
      type: String
    },
    sex: {
      type: String
    },
    great: {
      type: Boolean
    }
  }
}
</script>
