<template>
  <div class="m-header">
    <i class="fas fa-parking"></i>
    <i class="fas fa-car"></i>
    <div class="m-header-content">
      <h1>{{title}}</h1>
      <p>{{text}}</p>
    </div>
    <img class="img-fluid" alt="parking image" src="../assets/images/juke.png">
  </div>
</template>
<script>
  export default {
    props: {
      text: String,
      title: String,
    },
  }
</script>
