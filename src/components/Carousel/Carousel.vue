<template>
  <v-carousel
    interval="3000"
    cycle
    height="18"
    :show-arrows="false"
    hide-delimiters
  >
    <v-carousel-item
      id="testarDet"
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
      <v-sheet color="white" height="100%">
        <v-row align="end" justify="end">
          <div align="center" class=" text-color">
            Creativity
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
    <v-carousel-item
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
      <v-sheet color="white" height="100%">
        <v-row align="center">
          <div class=" text-color">Inovation</div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
    <v-carousel-item
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
      <v-sheet color="white" height="100%">
        <v-row align="center" justify="center">
          <div class=" text-color">Culture</div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
    <v-carousel-item
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
      <v-sheet color="white" height="100%">
        <v-row align="center" justify="start">
          <div class=" text-color">Social</div>
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
  margin-left: 40px;
  margin-right: 40px;
}
</style>
