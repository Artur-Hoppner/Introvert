<template>
  <div class="home">
    <p class="color">It starts here</p>
    <SelectedEvent />
    <Events />
  </div>
</template>

<script>
import SelectedEvent from '../../components/SelectedEvent/SelectedEvent';
import Events from '../../components/Events/Events';
export default {
  name: 'Home',
  components: {
    SelectedEvent,
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
