<template>
  <div class="card mb-3 mb-lg-0" :class="{noBorder, smallTitle}">
    <img v-if="imgCover"
         :src=imgCover
         class="card-img-top" alt="parking cover">
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">{{ text }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {

      return {
        noBorder: false,
        smallTitle: false
      }
    },
    props: {
      text: String,
      title: String,
      imgCover: String,
    },
  }
</script>

<style scoped lang="scss">

  .card {
    border-radius: 0;

    &-title {
      font-weight: 700;
    }

    &-title-sm {
      background: transparent;

      .card-title {
        font-size: 16px;
      }
    }
  }

</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
