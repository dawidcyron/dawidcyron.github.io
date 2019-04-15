<template>
  <section class="section skills has-text-centered">
    <div class="container is-narrow">
      <div class="box is-paddingless">
        <div class="columns is-centered is-marginless">
          <skill-column
            title="Front-end Developer"
            description="I create simple, yet beautiful
             websites, following the principles of modern web."
            languages="HTML, CSS, JavaScript, SASS, Vue.js"
            v-bind:tools="['VS Code', 'WebStorm',
             'Bulma', 'Bootstrap', 'GitHub']"/>
          <skill-column
            title="Back-end Developer"
            description="I create efficient, scalable backends made to
             handle even the biggest traffics."
            languages="Java, Golang, JavaScript (Node.js)"
            v-bind:tools="['VS Code', 'IntelliJ Idea', 'Insomnia',
             'Postman', 'Docker', 'GitHub']"/>
          <skill-column
            title="Mobile Developer"
            description="I create mobile application using both native and hybrid technologies."
            languages="Java, Kotlin, Dart (Flutter)"
            v-bind:tools="['Android Studio', 'VS Code', 'GitHub']"/>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.skills {
  margin-top: -14rem;
  padding-bottom: 1rem;
  .column:last-child {
    border-right: none;
    border-bottom: none;
  }
}
.container.is-narrow {
  max-width: 1200px;
}
</style>

<script>
import SkillColumn from '@/components/SkillColumn.vue';

export default {
  name: 'skills-section',
  components: {
    SkillColumn,
  },
};
</script>
