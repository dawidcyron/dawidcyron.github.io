<template>
  <div class="column skill-column">
    <h1 class="title is-spaced">{{this.title}}</h1>
    <p>{{this.desc}}</p>
    <p class="skill-header">Languages I use:</p>
    <p>{{this.languages}}</p>
    <p class="skill-header">My tools:</p>
    <p>
      <ul>
        <li v-for="tool in this.tools" v-bind:key="tool" class="tool">
          {{tool}}
        </li>
      </ul>
    </p>
  </div>
</template>

<style lang="scss">
@import "@/assets/mixins.scss";
.skill-column {
  padding: 50px 30px !important;
  border-bottom: 1px solid $skill-border-color;
}
.skill-header {
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: $primary;
  font-size: 1.1rem;
}
.tool {
  margin-top: 0.5rem;
  border: none !important;
  padding: 0.5rem 1rem;
}
@media screen and (min-width: 769px) {
  .skill-column {
    border-right: 1px solid $skill-border-color;
    border-bottom: none;
  }
}
</style>

<script>
export default {
  name: 'skill-column',
  props: ['title', 'description', 'languages', 'tools'],
};
</script>
