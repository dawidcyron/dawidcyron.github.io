<template>
  <div class="hello hero">
    <hello-header></hello-header>
    <hello-form></hello-form>
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
