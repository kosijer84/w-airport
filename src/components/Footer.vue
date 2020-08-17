<template>
  <div class="container-fluid footer text-center text-sm-left">
    <div class="row">
      <div class="col-xl-2 mb-3 mb-xl-0">
        <small>© <span id="year"></span> Acrontum GmbH</small>
      </div>
      <div class="col-sm-6 col-lg-3 col-xl-2">
        <h5 class="footer-title">Flying</h5>
        <p><a href="javascript:void(0)">Lorem ipsum</a></p>
        <p><a href="javascript:void(0)">dolor sit amet</a></p>
        <p><a href="javascript:void(0)">adipisicing</a></p>
        <p><a href="javascript:void(0)">consectur</a></p>
      </div>
      <div class="col-sm-6 col-lg-3 col-xl-2">
        <h5 class="footer-title">Take-off/Landing</h5>
        <p><a href="javascript:void(0)">Lorem ipsum</a></p>
        <p><a href="javascript:void(0)">dolor sit amet</a></p>
        <p><a href="javascript:void(0)">consectur</a></p>
      </div>
      <div class="col-sm-6 col-lg-3 col-xl-2">
        <h5 class="footer-title">Parking</h5>
        <p><a href="javascript:void(0)">Lorem ipsum</a></p>
        <p><a href="javascript:void(0)">dolor sit amet</a></p>
        <p><a href="javascript:void(0)">adipisicing</a></p>
        <p><a href="javascript:void(0)">consectur</a></p>
      </div>
      <div class="col-sm-6 col-lg-3 col-xl-2">
        <h5 class="footer-title">Destinations</h5>
        <p><a href="javascript:void(0)">Lorem ipsum</a></p>
        <p><a href="javascript:void(0)">dolor sit amet</a></p>
        <p><a href="javascript:void(0)">consectur</a></p>
      </div>
      <div class="col-lg-6 col-xl-2">

        <ContactForm/>

      </div>
    </div>

    <hr>

    <div class="row">
      <div class="col-md-10 offset-md-2">
        <h5 class="footer-notice"><a href="javascript:void(0)">Imprint and Legal Notice</a></h5>
      </div>
    </div>
  </div>
</template>
<script>

  import ContactForm from '@/components/ContactForm.vue'

  export default {

    components: {
      ContactForm
    },

    mounted () {

      let currentYear = new Date().getFullYear();

      document.getElementById('year').innerHTML = currentYear;
    }
  }
</script>
