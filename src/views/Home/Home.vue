<template>
  <div class="home">
    <SearchBar />
    <Events />
  </div>
</template>

<script>
import SearchBar from '../../components/SearchBar/SearchBar';
import Events from '../../components/Events/Events';
export default {
  name: 'Home',
  components: {
    Events,
    SearchBar
  }
};
</script>
<style lang="scss" scoped>
.color {
  font-size: 400%;
  color: red;
}
</style>
