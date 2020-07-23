<template>
  <v-card class="pa-2" width="1000">
    <div class="display-1 text-center">{{part.bookTitle}}</div>
    <div class="headline text-center">{{part.partTitle}}</div>
    <div class="text-center mt-2 mb-2">
      <youtube
        :video-id="part.youtube_id"
        :player-width="playerWidth"
        :player-height="playerHeight"
      ></youtube>
    </div>
    <div>
      <v-tabs v-model="tabMode" fixed-tabs color="orange">
        <v-tab :key="german">Текст с подсказками</v-tab>
        <v-tab :key="sidebyside">Параллельно</v-tab>
      </v-tabs>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    part: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      tabMode: "English",
    };
  },
  computed: {
    playerWidth() {
      return {
        xs: "250px",
        sm: "400px",
        md: "500px",
        lg: "600px",
        xl: "900px",
      }[this.$vuetify.breakpoint.name];
    },
    playerHeight() {
      return {
        xs: "150px",
        sm: "300px",
        md: "400px",
        lg: "500px",
        xl: "600px",
      }[this.$vuetify.breakpoint.name];
    },
  },
};
</script>