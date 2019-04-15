<template>
  <section class="hero is-white has-text-centered">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column">
            <h1
              class="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile"
            >Full Stack & Mobile Developer</h1>
            <h2
              class="subtitle is-size-4-desktop"
            >I design and code simple, beautiful and useful software.</h2>
            <img src="@/assets/avatar.svg" alt="Avatar" class="avatar">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.hero {
  padding-top: 2rem;
}
.title {
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
}
.subtitle {
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
}
.avatar {
  margin: 2rem 0;
  width: 9.5rem;
}
@media screen and (min-width: 769px) {
  .avatar {
    width: 13.125rem;
  }
}
</style>

<script>
export default {
  name: 'main-section',
};
</script>
