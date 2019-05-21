<template>
  <section class="section is-medium is-white has-text-centered project-section">
    <div class="container is-narrow">
      <h1 class="title is-spaced is-size-3-desktop is-size-4-mobile">My Recent Projects</h1>
      <h2 class="subtitle is-size-5-desktop">Here are a few of my projects from Github.</h2>
      <div class="projects">
        <div class="columns is-multiline is-mobile">
          <div class="column is-full-mobile is-half-tablet is-one-third-desktop"
           v-for="project in projects" v-bind:key="project">
            <project-box :name="project.name"
            :description="project.description"
            :html_url="project.html_url"
            :language="project.language"
            :live_url="project.live_url" />
          </div>
        </div>
      </div>
      <div class="columns is-centered">
        <div class="column">
          <a href="https://github.com/dawidcyron" target="_blank" class="button is-outlined is-primary
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
@import "@/assets/styles.scss";
.project-section {
  padding-top: 4.5rem !important;
}
.projects {
  padding: 2rem 0 4rem;
}
.button.is-medium {
  font-size: 1.15rem;
}
.button.is-primary.is-outlined {
  transition-timing-function: ease-in-out;
  transition-duration: $speed-slower;
}
</style>

<script>
import ProjectBox from '@/components/ProjectBox.vue';
import axios from 'axios';

export default {
  name: 'projects-section',
  data() {
    return {
      projects: [],
    };
  },
  components: {
    ProjectBox,
  },
  created() {
    axios.get('https://landing.dawidcyron.me').then((response) => {
      this.projects = response.data;
    }).catch(err => console.log(err));
  },
};
</script>
