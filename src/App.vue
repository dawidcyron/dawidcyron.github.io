<template>
  <div id="app">
    <navbar :buttonPath="this.path" :buttonText="this.text"></navbar>
    <transition :name="this.transitionName">
      <router-view/>
    </transition>
  </div>
</template>

<style lang="scss">
@import "@/assets/styles.scss";
#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'app',
  data() {
    return {
      transitionName: 'slide',
      path: String,
      text: String,
    };
  },
  created() {
    if (this.$route.path === '/') {
      this.path = '/hello';
      this.text = 'Say Hello';
    } else {
      this.path = '/';
      this.text = 'Go Back';
    }

    this.$router.beforeEach((to, from, next) => {
      const toDepth = to.path.split('/')[1].length;
      const fromDepth = from.path.split('/')[1].length;
      const transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
      this.transitionName = transitionName;
      if (toDepth < fromDepth) {
        this.path = '/hello';
        this.text = 'Say Hello';
      } else {
        this.path = '/';
        this.text = 'Go Back';
      }
      next();
    });
  },
  components: {
    Navbar,
  },
};
</script>
