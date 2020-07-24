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

      <v-card-actions>
        <!-- <div class="ml-2">
          <span>Оценка: {{book.rating}}</span>
          <span>(Оценило: {{book.ratingsCount}})</span>
        </div> -->
        <v-spacer></v-spacer>
        <v-btn color="orange" text :to="{name: 'books'}">Назад</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import * as bookHelper from "@/helpers/book";
export default {
  props: {
    book: {
      type: Object,
      required: true
    }
  },
  methods: {
    getBookLevel: bookHelper.getBookLevel
  }
};
</script>