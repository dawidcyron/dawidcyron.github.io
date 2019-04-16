<template>
  <section class="section cta is-primary has-text-centered">
    <div class="container is-narrow">
      <div class="box">
        <div class="columns is-centered">
          <div class="column has-text-white title is-marginless flex">
            <p class="has-margin-auto">Let's work together</p>
          </div>
          <div class="column">
            <p class="has-text-white">
                Interested in working together? We should talk it over. I'll buy the coffee.
            </p>
          </div>
          <div class="column has-margin-auto has-text-centered">
            <router-link
              to="/hello"
              class="button is-outlined is-rounded is-primary has-text-white is-medium">
              <p class="has-text-white">Let's do this!</p>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/styles.scss";
.cta {
  .box {
    padding: 3.5rem 2rem;
    background-color: $card-background;
    border-radius: 0.75rem;
  }
}
</style>

<script>
export default {
  name: 'call-to-action',
};
</script>
