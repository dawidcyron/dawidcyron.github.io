<template>
  <div>
    <navbar></navbar>
    <main-section></main-section>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';
import MainSection from '@/components/MainSection.vue';

export default {
  name: 'home',
  components: {
    Navbar,
    MainSection,
  },
};
</script>
