<script>
export default {
    name: "NotFound",
}
</script>

<template>
    <section id="404_view">
        <div class="container text-center">
            <div class="text-center align-middle py-5 position-fixed start-50 top-50 translate-middle ms-ff-skratch">
                <h1>404 | NOT FOUND</h1>
                <router-link :to="{ 'name': 'home' }" class="d-block">&LeftArrow; Go back to home</router-link>
            </div>
        </div>
        <!-- /.container -->
    </section>
    <!-- /#404_view -->
</template>


<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
</style>
