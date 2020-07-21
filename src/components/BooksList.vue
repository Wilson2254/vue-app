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
        <v-card class="mx-auto" max-width="570">
          <v-img
            class="white--text align-end"
            height="300px"
            src="https://avatars.mds.yandex.net/get-zen_doc/1898242/pub_5dfe227d86c4a900ad29bb87_5dfe239e9515ee00ac5860d1/scale_1200"
          >
            <v-card-title>{{book.title}}</v-card-title>
          </v-img>

          <v-card-subtitle class="pb-0">{{book.description}}</v-card-subtitle>

          <v-card-text class="text--primary">
            <div>Уровень: {{getBookLevel(book.level)}}</div>

            <div>Частей: {{book.parts}}</div>
          </v-card-text>

          <div class="ml-2">
            <v-rating
              v-model="book.rating"
              background-color="orange lighten-3"
              color="orange"
              large
              readonly
              dense
              half-increments
            ></v-rating>
          </div>

          <v-card-actions>
            <div class="ml-2">
              <span>Оценка: {{book.rating}}</span>
              <span>(Оценило: {{book.ratingsCount}})</span>
            </div>
            <v-spacer></v-spacer>
            <v-btn color="orange" text>Почитать</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<script lang="ts">
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
  methods: {
    getBookLevel(level) {
      return level.join("/");
    }
  }
};
</script>