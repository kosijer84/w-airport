<template>
  <!--example with bootstrap helper classes-->
  <div class="row pt-3 pb-3 a-social-icons">
    <div class="col-12 d-flex justify-content-center">
      <a class="ml-2 mr-2"
         v-for="(icon) in icons"
         :href="(icon.link)"
         :key="icon"
      >
        <i :class="(icon.icon)"></i>
      </a>
    </div>
  </div>
</template>

<script>

  export default {

    data() {

      return {
        icons: [
          {
            icon: 'fab fa-facebook-square',
            link: 'facebook'
          },
          {
            icon: 'fab fa-instagram',
            link: 'instagram'
          },
          {
            icon: 'fab fa-linkedin',
            link: 'linkedin'
          },
          {
            icon: 'fab fa-pinterest',
            link: 'pinterest'
          },
          {
            icon: 'fab fa-twitter',
            link: 'twitter'
          },
          {
            icon: 'fab fa-youtube',
            link: 'youtube'
          }
        ]
      }
    }
  }

</script>
