<template>
  <div>
    <v-card class="mx-auto" max-width="1000">
      <v-img
        class="white--text align-end"
        height="300px"
        :src="book.imageUrl"
      >
        <v-card-title>{{book.title}}</v-card-title>
      </v-img>

      <v-card-subtitle class="pb-0">{{book.description}}</v-card-subtitle>

      <v-card-text class="text--primary">
        <div>Уровень: {{getBookLevel(book.level)}}</div>

        <div>Частей: {{book.parts.length}}</div>
      </v-card-text>

      <div class="ml-2">
        <!-- <v-rating
          v-model="book.rating"
          background-color="orange lighten-3"
          color="orange"
          large
          readonly
          dense
          half-increments
        ></v-rating> -->
      </div>

      <v-card-actions class="mr-2 ml-2">
        <!-- <div class="ml-2">
          <span>Оценка: {{book.rating}}</span>
          <span>(Оценило: {{book.ratingsCount}})</span>
        </div> -->
        <v-icon v-if="getUserDataBook(book.id)" large color="orange">mdi-cloud-check</v-icon>
        <v-spacer></v-spacer>
        <v-btn color="orange" text v-if="canLoadBook(book.id)" @click="loadBook(book.id)">Загрузить</v-btn>
        <div v-if="getUserDataBook(book.id)">
          
          Книга скачана: {{getBookAddedDate(book.id)}}
        </div>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import * as bookHelper from "@/helpers/book";
import {mapGetters} from "vuex"
export default {
  props: {
    book: {
      type: Object,
      required: true
    }
  },
  computed:{
    ...mapGetters(['isUserAuth', 'userData', "getProcessing"])
  },
  methods: {
    getBookLevel: bookHelper.getBookLevel,
    canLoadBook(bookId){
      let book = this.getUserDataBook(bookId)
      return this.isUserAuth && !this.getProcessing && !book
    },
    getUserDataBook(bookId){
      return this.userData.books[bookId]
    },
    loadBook(bookId){
      this.$store.dispatch('add_user_book', bookId)
    },
    getBookAddedDate(bookId){
      let book = this.getUserDataBook(bookId)
      return book.addedDate.toLocaleDateString()
    }
  }
};
</script>