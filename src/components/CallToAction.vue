<template>
  <section class="section cta is-primary has-text-centered">
    <div class="container is-narrow">
      <div class="box">
        <div class="columns">
          <div class="column has-text-white title is-marginless flex">
            Let's work together
          </div>
          <div class="column has-text-white">
            <p>Interested in working together? We should talk it over. I'll buy the coffee.</p>
          </div>
          <div class="column">
              <a href="" class="button is-outlined is-rounded is-primary has-text-white is-medium">
                <p class="has-text-white">
                  Let's do this!
                </p>
              </a>
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
