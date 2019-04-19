<template>
  <div class="box project is-one-third">
    <h1 class="title has-text-white is-spaced">{{this.name}}</h1>
    <h2 class="subtitle has-text-white">{{this.description}}</h2>
    <h2 class="subtitle has-text-white">Language:{{this.language}}</h2>
    <div class="columns">
      <div class="column subtitle has-text-white">
        <a :href="this.html_url" target="_blank" class="has-text-white">
          <span class="icon">
            <i class="fas fa-code"></i>
          </span>
          <p>View Source</p>
        </a>
      </div>
      <div class="column subtitle has-text-white">
        <a :href="'http://' + this.name + '/dawidcyron.me'">
          <span class="icon">
            <i class="fas fa-desktop"></i>
          </span>
          <p>View Live</p>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/styles.scss";
.project {
  background-color: $card-background !important;
}
</style>

<script>
export default {
  name: 'project-box',
  props: {
    html_url: String,
    name: String,
    description: String,
    language: String,
  },
};
</script>
