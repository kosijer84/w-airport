<template>
  <div class="container p-home">
    <div class="row">
      <div class="col-12">

        <Header
                title="Short Parking Headline"
                text="Teasing the parking subject."
        />

      </div>
    </div>


    <div class="row o-booking-frame">
      <div class="col-lg-6">

        <BookingParking/>

      </div>
      <div class="col-lg-6 mt-3 mt-lg-0">

        <ContactForm/>

      </div>
    </div>

    <div class="row">
      <div class="col-12">

        <ParkingPlan/>

      </div>
    </div>

    <div class="row o-parking-options">

      <ParkingOptions/>

    </div>

    <div class="row o-parking-places">

      <ParkingPlaces/>

    </div>

    <div class="row o-planner-faq">
      <div class="col-lg-6 mb-3 mb-lg-0">

        <RoutePlanner/>

      </div>
      <div class="col-lg-6">

        <ParkingFAQ/>

      </div>
    </div>

    <SocialIcons/>

  </div>

  <Footer/>

</template>

<script>
  import ParkingOptions from '@/components/ParkingOptions.vue'
  import ParkingPlaces from '@/components/ParkingPlaces.vue'
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
  import ContactForm from '@/components/ContactForm.vue'
  import SocialIcons from '@/components/SocialIcons.vue'
  import RoutePlanner from '@/components/RoutePlanner.vue'
  import ParkingFAQ from '@/components/ParkingFAQ.vue'
  import BookingParking from '@/components/BookingParking.vue'
  import ParkingPlan from '@/components/ParkingPlan.vue'

  export default {
    name: 'Home',
    components: {
      ParkingOptions,
      ParkingPlaces,
      Header,
      Footer,
      ContactForm,
      SocialIcons,
      RoutePlanner,
      ParkingFAQ,
      BookingParking,
      ParkingPlan,
    }
  }
</script>
