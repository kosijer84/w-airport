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
        <div class="m-parking-plan">
          <div class="btn btn-secondary">Download parking-plan</div>
        </div>
      </div>
    </div>

    <div class="row o-parking-options">
      <div class="col-lg-4">
        <ParkingBox
                :imgCover="require('../assets/images/cover-budget.png')"
                title="Budget Parking"
                text="Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi."
        />
      </div>
      <div class="col-lg-4">
        <ParkingBox
                :imgCover="require('../assets/images/cover-budget.png')"
                title="Terminal Parking"
                text="Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi."
        />
      </div>
      <div class="col-lg-4">
        <ParkingBox
                :imgCover="require('../assets/images/cover-budget.png')"
                title="Premium Parking"
                text="Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi."
        />
      </div>
    </div>

    <div class="row o-parking-places">
      <div class="col-lg-4">
        <ParkingBox
                :class="[noBorder, smallTitle]"
                title="Special parking facilities"
                text="Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi."
        />
      </div>
      <div class="col-lg-4">
        <ParkingBox
                :class="[noBorder, smallTitle]"
                title="Get & Bring"
                text="Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi."
        />
      </div>
      <div class="col-lg-4">
        <ParkingBox
                :class="[noBorder, smallTitle]"
                title="Parking at the Visitors Park"
                text="Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi."
        />
      </div>
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
  import ParkingBox from '@/components/ParkingOptions.vue'
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
  import ContactForm from '@/components/ContactForm.vue'
  import SocialIcons from '@/components/SocialIcons.vue'
  import RoutePlanner from '@/components/RoutePlanner.vue'
  import ParkingFAQ from '@/components/ParkingFAQ.vue'
  import BookingParking from '@/components/BookingParking.vue'

  export default {
    name: 'Home',
    data() {

      return {
        noBorder: 'border-0',
        smallTitle: 'card-title-sm'
      }
    },
    components: {
      ParkingBox,
      Header,
      Footer,
      ContactForm,
      SocialIcons,
      RoutePlanner,
      ParkingFAQ,
      BookingParking
    }
  }
</script>
