<template>
  <div>
    <navbar></navbar>
    <main-section></main-section>
    <about-me></about-me>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';
import MainSection from '@/components/MainSection.vue';
import AboutMe from '@/components/AboutMe.vue';

export default {
  name: 'home',
  components: {
    Navbar,
    MainSection,
    AboutMe,
  },
};
</script>
