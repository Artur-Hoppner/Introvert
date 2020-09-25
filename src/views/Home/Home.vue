<template>
  <div class="home">
    <Events />
  </div>
</template>

<script>
import Events from '../../components/Events/Events';
export default {
  name: 'Home',
  components: {
    Events
  }
};
</script>
<style lang="scss" scoped>
.color {
  font-size: 400%;
  color: red;
}
</style>
