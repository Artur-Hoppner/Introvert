<template>
  <div id="app">
    {{ statusMessage }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'StatusMessage',
  computed: {
    ...mapGetters(['statusMessage'])
  }
};
</script>

<style lang="scss" scoped>
body {
  background-color: red;
}
</style>
