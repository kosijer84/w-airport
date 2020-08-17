<template>
  <div class="card">
    <div class="card-body">
      <h4 class="card-title">Route Planner</h4>
      <form class="text-center">
        <div class="form-group">
          <select v-model="routePlanner.startingPoint" class="form-control" id="startPoint">
            <option value="" disabled selected>Select your starting point</option>
            <option v-for="start in startingPoints" :key="start">{{start}}</option>
          </select>
        </div>
        <div class="form-group">
          <select v-model="routePlanner.destination" class="form-control" id="endPoint">
            <option value="" disabled selected>Select your destination</option>
            <option v-for="end in destinations" :key="end">{{end}}</option>
          </select>
        </div>
        <button type="submit"
                class="btn btn-secondary a-btn"
                v-on:click.prevent="getRouteValues"
        >Route planing</button>
      </form>
    </div>
  </div>
</template>

<script>
  export default {

    data() {

      return {
        routePlanner: {
          startingPoint: '',
          destination: '',
        },

        startingPoints: ['London', 'Vienna', 'Novi Sad'],
        destinations: ['Munich', 'Stuttgart', 'Berlin']
      }
    },

    methods: {

      getRouteValues: function () {
        console.log('get values from route planner', this.routePlanner)
      }
    }
  }
</script>
