<template>
  <div class="col-lg-4"
       v-for="(box, index) in parkingPlaces"
       :key="index"
  >
    <div class="card card-title-sm mb-3 mb-lg-0 border-0"
    >
      <img v-if="(box.imgCover)"
           :src="(box.imgCover)"
           class="card-img-top"
           alt="parking cover"
      >
      <div class="card-body">
        <h5 class="card-title">{{ box.title }}</h5>
        <p class="card-text">{{ box.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {

      return {

        parkingPlaces: [
          {
            title: 'Special parking facilities',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ' +
                'labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ' +
                'laboris nisi.'
          },
          {
            title: 'Get & Bring',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ' +
                'labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ' +
                'laboris nisi.'
          },
          {
            title: 'Parking at the Visitors Park',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ' +
                'labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ' +
                'laboris nisi.'
          }
        ]
      }
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
