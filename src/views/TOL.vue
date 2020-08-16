<template>
  <div class="container text-center">
    <div class="row">
      <div class="col-12">

        <Header
                title="This is an Take-off/landing page"
                text="Teasing the parking subject."
        />

      </div>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/Header.vue'

  export default {
    name: 'Home',
    components: {
      Header,
    }
  }
</script>
