<template>
  <div class="message" id="app">
    <h4 id="statusMessageText">{{ statusMessage }}</h4>
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
.message {
  border-radius: 1%;
  width: 100%;
  background-color: #ff969e;
  text-align: center;
  color: white;
}
</style>
