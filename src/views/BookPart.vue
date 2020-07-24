<template>
  <v-container v-if="part">
    <v-row justify="center">
      <book-part-content :part="part"></book-part-content>
      <book-part-words :words="part.words"></book-part-words>
    </v-row>
  </v-container>
</template>

<script>
import Vue from "vue";
import BookPartContent from "../components/BookPartContent";
import BookPartWords from "../components/BookPartWords";
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
  data() {
    return {
      part: null,
    };
  },
  computed: {
    // part() {
    //   let val = this.$store.getters.getParts.find(
    //     (b) => b.bookId == this.bookId && b.bookPartId == this.partId
    //   );
    //   return val;
    // },
  },
  created() {
    Vue.$db
      .collection("bookParts")
      .where("bookId", "==", this.bookId)
      .where("bookPartId", "==", this.partId)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((s) => {
          this.part = s.data();
        });
      })
      .catch((error) => console.log(error));
  },
  components: {
    BookPartContent,
    BookPartWords,
  },
};
</script>