<template>
  <div class="hello hero is-fullheight">
    <div class="hero-body">
      <div class="container">
      <div class="columns">
<hello-header class="column"></hello-header>
      </div>
      <div class="columns">
    <hello-form class="column"></hello-form>
      </div>


    </div>
      </div>

  </div>
</template>

<style lang="scss">

</style>


<script>
import HelloForm from '@/components/HelloForm.vue';
import HelloHeader from '@/components/HelloHeader.vue';

export default {
  name: 'hello',
  components: {
    HelloForm,
    HelloHeader,
  },
};
</script>
