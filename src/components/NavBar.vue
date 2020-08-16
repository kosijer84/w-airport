<template>
  <nav class="navbar navbar-expand-lg sticky-top shadow o-navbar">
    <button class="navbar-toggler" type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation">
      <span class="navbar-toggler-icon">
        <i class="fas fa-bars"></i>
      </span>
    </button>
    <router-link class="navbar-brand" to="/">
      <img src="../assets/images/logo.png" alt="w-airport logo">
      W-airport
    </router-link>


    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav mr-auto ml-auto mt-2 mt-lg-0">
        <li class="nav-item">
          <router-link class="nav-link" to="/flying">Flying</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/takeoff-landing">Take-off/Landing</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/parking">Parking</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/destinations">Destinations</router-link>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      </form>
    </div>
  </nav>
</template>
