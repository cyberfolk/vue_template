<script>
export default {
  name: "SiteHeader",
  components: {},
};
</script>

<template>
  <header id="app_header">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark shadow px-5">
      <a class="navbar-brand col-4" href="{{ url('/') }}">
        <img height="35" src="./../assets/image/cyberfolk-logo.png" alt="Personal Logo" class="pt-1">
      </a>
      <h1 class="text-center text-warning m-0 col-4"> Vue Template</h1>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" @click="visible = !visible">
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- navbar-toggler -->

      <div class="navbar-collapse collapse col-4 justify-content-end" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link text-white" active-class="active" :to="{ 'name': 'home' }" aria-current="page">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white" active-class="active" :to="{ 'name': 'quad' }">Quadrant</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <!-- navbar-collapse -->
  </header>
  <!-- /#app_header -->
</template>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

#app_header {
  height: $HEIGHT_HEADER;
}


.nav-link {
  font-size: larger;
  padding: 0 1.5rem !important;
}

.nav-link:hover {
  color: $warning !important;
}

.active {
  color: $warning !important;
}
</style>
