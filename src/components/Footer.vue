<template>
  <footer class="section is-primary is-small has-text-centered">
    <div class="container is-narrow">
      <div class="columns is-centered">
        <div class="column is-one-third">
          <h1 class="title is-size-5-touch has-text-white has-text-weight-light">
              Coding and enjoying life one day at a time.
          </h1>
        </div>
      </div>
      <div>
        <p class="row">
          <a
            href="https://github.com/dawidcyron"
            class="button is-medium social"
            target="_blank">
            <i class="fab fa-github"></i>
          </a>
          <a
            href="https://www.facebook.com/mrdawidcyron"
            class="button is-medium social"
            target="_blank">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://twitter.com/MrDawidCyron"
            class="button is-medium social"
            target="_blank">
            <i class="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/dawidcyron/"
            class="button is-medium social"
            target="_blank">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
@import "@/assets/styles.scss";
footer {
  .title {
    opacity: 0.8;
    margin: 2rem auto;
    font-size: 1.5rem;
  }
  .button {
    background-color: transparent;
    border-radius: 100%;
    color: #fff;
    height: 48px;
    width: 48px;
    border: 2px solid rgba(255,255,255, 0.4)
  }
  .button:hover {
    background-color: #fff;
    border-radius: 100%;
    color: $primary;
    height: 48px;
    width: 48px;
    border: 2px solid rgba(255,255,255, 1);
    transition: all $speed-slower ease-in-out;
  }
}
.social {
  border-radius: 100%;
  margin: 0 0.2rem;
}
footer.section {
  padding-top: 0;
}
@media screen and (min-width: 769px) {
  .social {
    margin: 0 0.8rem;
  }
}
</style>
