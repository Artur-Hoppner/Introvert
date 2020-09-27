<template>
  <v-carousel
    interval="4000"
    cycle
    height="50"
    :show-arrows="false"
    hide-delimiters
  >
    <v-carousel-item
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
      <v-sheet color="white" height="100%">
        <v-row align="end">
          <div class="display-1 text-color">Creative</div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
    <v-carousel-item
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
      <v-sheet color="white" height="100%">
        <v-row>
          <div class="display-1 text-color">Inovation</div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.text-color {
  color: #ff969e;
  margin-left: 20px;
  margin-right: 20px;
}
</style>
