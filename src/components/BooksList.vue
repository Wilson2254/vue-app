<template>
  <v-container>
    <v-row>
      <v-col lg="4">
        <v-text-field label="Поиск" outlined v-model="searchBook"></v-text-field>
      </v-col>
      <v-col lg="2">
        <v-select label="Уровень" outlined v-model="level" :items="levels" multiple></v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="book in filteredBooks" :key="book.id">
       <Book :book="book"> </Book>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import Book from "./BooksListItem"
export default {
  data() {
    return {
      searchBook: null,
      levels: ["A1", "A2", "A3", "B1", "B2", "B3", "C1", "C2", "C3"],
      level: []
    };
  },
  computed: {
    books() {
      return this.$store.getters.getBooks;
    },
    filteredBooks() {
      let books = this.books;
      if (this.searchBook)
        books = books.filter(
          b => b.title.toLowerCase().indexOf(this.searchBook.toLowerCase()) >= 0
        );
      if (this.level.length)
        books = books.filter(
          b => this.level.filter(val => b.level.indexOf(val) !== -1).length > 0
        );
      return books;
    }
  },
  components:{
    Book
  }
};
</script>