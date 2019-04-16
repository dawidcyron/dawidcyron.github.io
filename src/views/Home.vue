<template>
  <div>
    <main-section></main-section>
    <about-me></about-me>
    <skills-section></skills-section>
    <projects-section></projects-section>
    <call-to-action></call-to-action>
    <footer-section></footer-section>
  </div>
</template>

<script>
// @ is an alias to /src
import MainSection from '@/components/MainSection.vue';
import AboutMe from '@/components/AboutMe.vue';
import SkillsSection from '@/components/SkillsSection.vue';
import ProjectsSection from '@/components/ProjectsSection.vue';
import CallToAction from '@/components/CallToAction.vue';
import FooterSection from '@/components/Footer.vue';

export default {
  name: 'home',
  components: {
    MainSection,
    AboutMe,
    SkillsSection,
    ProjectsSection,
    CallToAction,
    FooterSection,
  },
};
</script>
