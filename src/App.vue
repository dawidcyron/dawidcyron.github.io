<template>
  <div id="app">
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
export default {
  name: 'app',
  data() {
    return {
      transitionName: 'slide',
    };
  },
  created() {
    this.$router.beforeEach((to, from, next) => {
      const toDepth = to.path.split('/')[1].length;
      const fromDepth = from.path.split('/')[1].length;
      const transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
      this.transitionName = transitionName;

      next();
    });
  },
};
</script>
