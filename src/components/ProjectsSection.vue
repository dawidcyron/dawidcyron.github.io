<template>
  <section class="section is-medium is-white has-text-centered">
    <div class="container is-narrow">
      <h1 class="title is-spaced is-size-3-desktop is-size-4-mobile">My Recent Projects</h1>
      <h2 class="subtitle is-size-5-desktop">Here are a few of my projects from Github.</h2>
      <div class="projects">
        <div class="columns is-multiline is-mobile">
          <div class="column is-12-mobile is-half-tablet is-one-third desktop"
           v-for="project in projects" v-bind:key="project">
            <project-box :name="project.name"
            :description="project.description"
            :html_url="project.html_url"
            :language="project.language" />
          </div>
        </div>
      </div>
      <div class="columns is-centered">
        <div class="column">
          <a href="https://github.com/dawidcyron" target="_bland" class="button is-outlined is-primary
            is-medium is-rounded">
              <span class="icon">
                <i class="fab fa-github"></i>
              </span>
              <span>See more on GitHub</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/mixins.scss";
.projects {
  padding: 2rem 0 4rem;
}
.button.is-medium {
  font-size: 1.15rem;
}
.button.is-primary.is-outlined {
  background-color: transparent !important;
  border-color: $primary !important;
  color: $primary !important;
  transition-timing-function: ease-in-out;
  transition-duration: $speed-slower;
}
.button.is-primary.is-outlined:hover {
  background-color: $primary !important;
  border-color: transparent !important;
  color: $white !important;
}
</style>

<script>
import ProjectBox from '@/components/ProjectBox.vue';

export default {
  name: 'projects-section',
  components: {
    ProjectBox,
  },
};
</script>
