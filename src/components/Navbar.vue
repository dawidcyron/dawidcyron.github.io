<template>
  <nav class="navbar is-transparent">
    <div class="container">
      <div class="navbar-brand is-marginless">
        <router-link
          to="/"
          class="navbar-item title has-text-weight-normal is-marginless">
            Dawid Cyron
        </router-link>
      </div>
      <div class="navbar-menu is-marginless">
        <div class="navbar-end">
          <div class="navbar-item">
            <router-link
              :to="this.buttonPath"
              class="button is-primary is-outlined is-rounded">
                {{this.buttonText}}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
@import "@/assets/mixins.scss";
.navbar {
  padding: 1.2rem 0;
  .container {
    padding: 0 0.8rem;
  }
  .navbar-brand {
    .navbar-item:hover {
      color: $primary;
    }
  }
}
.button {
  padding: 1.2rem !important;
  font-size: 1.125rem;
  border-width: 2px !important;
}
</style>

<script>
export default {
  name: 'navbar',
  props: {
    buttonPath: String,
    buttonText: String,
  },
};
</script>
