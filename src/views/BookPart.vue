<template>
  <v-container v-if="part">
    <v-row justify="center">
      <book-part-content :part="part"></book-part-content>
    </v-row>
    <v-row>
      <!-- <book-part-words :words="parts.words"></book-part-words> -->
    </v-row>
  </v-container>
</template>

<script>
import BookPartContent from "../components/BookPartContent";
export default {
  props: {
    bookId: {
      type: String,
      required: true,
    },
    partId: {
      type: String,
      required: true,
    },
  },
  computed: {
    part() {
      let val = this.$store.getters.getParts.find(
        (b) => b.bookId == this.bookId && b.bookPartId == this.partId
      );
      return val;
    },
  },
  components: {
    BookPartContent,
  },
};
</script>