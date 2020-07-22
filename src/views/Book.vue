<template>
  <v-container v-if="book">
    <v-row>
      <v-col>
        <book-details :book="book"></book-details>
      </v-col>
      <v-col v-for="part in book.parts" :key="part.id">
        <!-- <book-part-list-item></book-part-list-item> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BookDetails from '../components/BookDetails'
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
  components:{
      BookDetails
  }
};
</script>