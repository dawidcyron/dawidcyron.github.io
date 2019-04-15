<template>
  <div>
    <navbar></navbar>
    <main-section></main-section>
    <about-me></about-me>
    <skills-section></skills-section>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';
import MainSection from '@/components/MainSection.vue';
import AboutMe from '@/components/AboutMe.vue';
import SkillsSection from '@/components/SkillsSection.vue';

export default {
  name: 'home',
  components: {
    Navbar,
    MainSection,
    AboutMe,
    SkillsSection,
  },
};
</script>
