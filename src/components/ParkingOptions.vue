<template>
  <div class="col-lg-4"
       v-for="(box, index) in parkingBoxes"
       :key="index"
  >
    <div class="card mb-3 mb-lg-0">
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

        parkingBoxes: [
          {
            imgCover: require("../assets/images/cover-budget.png"),
            title: 'Budget Parking',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ' +
                'labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ' +
                'laboris nisi.'
          },
          {
            imgCover: require("../assets/images/cover-budget.png"),
            title: 'Terminal Parking',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ' +
                'labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ' +
                'laboris nisi.'
          },
          {
            imgCover: require("../assets/images/cover-budget.png"),
            title: 'Premium Parking',
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
  }

</style>
