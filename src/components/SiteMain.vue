<script>
export default {
  name: "SiteMain",
  components: {},
};
</script>

<template>
  <main id="app_main" class="d-flex">
    <router-view />
  </main>
</template>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables.scss' as *;

#app_main {
  height: $HEIGHT_MAIN;
}
</style>
