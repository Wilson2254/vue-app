<template>
  <v-container v-if="part">
    <v-row>
      <v-col>
        <book-part-content :part="part"></book-part-content>
      </v-col>
      <v-col>
        <!-- <book-part-words :words="parts.words"></book-part-words> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BookPartContent from "../components/BookPartContent";
export default {
  props: {
    bookId: {
      type: String,
      required: true
    },
    partId: {
      type: String,
      required: true
    }
  },
  computed: {
    part() {
      console.log(
        this.$store.getters.getParts.find(
          b => b.bookId == this.bookId && b.bookPartId == this.partId
        )
      );
      return this.$store.getters.getParts.find(
        b => b.bookId == this.bookId && b.bookPartId == this.partId
      );
    }
  },
  components: {
    BookPartContent
  }
};
</script>