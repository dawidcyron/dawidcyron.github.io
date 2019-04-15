<template>
  <section class="section is-medium is-primary has-text-centered is-long about-me">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-three-fifths">
          <h1 class="title is-spaced is-size-3-desktop is-size-4-mobile has-text-white">
            Hi, I'm Dawid.
            <br class="is-hidden-tablet">Nice to meet you.
          </h1>
          <h2 class="subtitle is-size-5-desktop has-text-white">
            Since beginning my journey with programming nearly 6 years ago,
            I've learned 4 programming languages,
            worked on multiple personal projects and
            constantly expanded my knowledge. I'm a confident, talkative and naturally curious.
          </h2>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/styles.scss";
.is-long {
  padding-bottom: 14rem !important;
}
.section.is-primary {
  background-color: $primary;
}
@media screen and (min-width: 769px) {
  .is-long {
    padding-bottom: 18rem !important;
  }
}
</style>
