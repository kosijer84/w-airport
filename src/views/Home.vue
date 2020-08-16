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
        <h4 class="o-booking-title">Search and book a parking space</h4>
        <form>
          <div class="row">
            <div class="col mb-3 mb-md-0">
              <input type="text" class="form-control" placeholder="Arrival day" onfocus="(this.type='date')"/>
            </div>
            <div class="col">
              <input type="text" class="form-control" placeholder="Departure day" onfocus="(this.type='date')"/>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col">
              <input type="text" class="form-control" placeholder="Arrival time" onfocus="(this.type='time')"/>
            </div>
            <div class="col">
              <input type="text" class="form-control" placeholder="Departure time" onfocus="(this.type='time')"/>
            </div>
          </div>

          <div class="form-group mt-3">
            <textarea type="text" class="form-control" id="calendar" placeholder="Calendar place"></textarea>
          </div>

          <button type="submit" class="btn btn-primary a-btn">Book parking</button>
        </form>
      </div>
      <div class="col-lg-6 mt-3 mt-lg-0">
        <h4 class="o-booking-title">Get in Contact</h4>

        <form>
          <div class="form-group">
            <input type="text" class="form-control" id="name" placeholder="Your Name" required/>
          </div>
          <div class="form-group">
            <input type="text" class="form-control" id="email" placeholder="Your E-mail" required/>
          </div>
          <div class="form-group">
            <textarea type="text" class="form-control" id="message" placeholder="Your Message"></textarea>
          </div>
          <button type="submit" class="btn btn-primary a-btn">Send</button>
        </form>
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
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Route Planner</h4>
            <form class="text-center">
              <div class="form-group">
                <input type="text" class="form-control" id="startPoint" placeholder="Your Starting Point">
              </div>
              <div class="form-group">
                <input type="text" class="form-control" id="endPoint" placeholder="Your destination at the airport">
              </div>
              <button type="submit" class="btn btn-secondary a-btn">Route planing</button>
            </form>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Parking FAQ</h4>
            <div class="faq mb-3">
              <h3 class="faq-letter">Q</h3>
              <p class="card-text font-weight-bold">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt?
              </p>
            </div>
            <div class="faq">
              <h3 class="faq-letter">A</h3>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  <!--example with bootstrap helper classes-->
    <div class="row pt-3 pb-3 a-social-icons">
      <div class="col-12 d-flex justify-content-center">
        <a href="javascript:void(0)" class="mr-3"><i class="fab fa-facebook-square"></i></a>
        <a href="javascript:void(0)" class="mr-3"><i class="fab fa-instagram"></i></a>
        <a href="javascript:void(0)" class="mr-3"><i class="fab fa-linkedin"></i></a>
        <a href="javascript:void(0)" class="mr-3"><i class="fab fa-pinterest"></i></a>
        <a href="javascript:void(0)" class="mr-3"><i class="fab fa-twitter"></i></a>
        <a href="javascript:void(0)"><i class="fab fa-youtube"></i></a>
      </div>
    </div>

  </div>

  <Footer/>

</template>

<script>
  import ParkingBox from '@/components/ParkingOptions.vue'
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'

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
      Footer
    }
  }
</script>
