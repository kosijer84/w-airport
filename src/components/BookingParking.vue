<template>
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
</template>
