<template>
  <v-container v-if="book">
    <v-row>
      <v-col>
        <book-details :book="book"></book-details>
        <div class="mt-2" v-for="part in book.parts" :key="part.id">
          <book-part-list-item :part="part" :bookId="book.id"></book-part-list-item>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BookDetails from "../components/BookDetails";
import BookPartListItem from "../components/BookPartListItem";
export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    book() {
      return this.$store.getters.getBooks.find(b => b.id == this.id);
    }
  },
  components: {
    BookDetails,
    BookPartListItem
  }
};
</script>