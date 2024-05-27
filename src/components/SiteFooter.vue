<script>
export default {
  name: "SiteFooter",
  components: {},
};
</script>

<template>
  <footer id="app_footer" class="d-flex align-items-center  justify-content-center bg-secondary">
    <span class="text-light"> Made with Rage &copy; powered by cyberfolk</span>
  </footer>
</template>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables.scss' as *;

#app_footer {
  height: $HEIGHT_FOOTER;
}
</style>

