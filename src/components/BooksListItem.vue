<template>
  <v-card class="mx-auto" max-width="570">
    <v-list-item :to="{name: 'book', params:{id:book.id}}">
      <v-img class="white--text align-end" height="300px" :src="book.imageUrl">
        <v-card-title>{{book.title}}</v-card-title>
      </v-img>
    </v-list-item>
    <v-list-item dense class="mt-3">{{book.description}}</v-list-item>

      <v-list-item dense>Уровень: {{getBookLevel(book.level)}}</v-list-item>

    <v-list-item dense>Частей: {{book.parts.length}}</v-list-item>


    <!-- <div class="ml-2">
      <v-rating
        v-model="book.rating"
        background-color="orange lighten-3"
        color="orange"
        large
        readonly
        dense
        half-increments
      ></v-rating>
    </div>-->

    <v-card-actions>
      <!-- <div class="ml-2">
        <span>Оценка: {{book.rating}}</span>
        <span>(Оценило: {{book.ratingsCount}})</span>
      </div>-->
      <v-spacer></v-spacer>
      <v-btn color="orange" text :to="{name: 'book', params:{id:book.id}}">Открыть</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import * as bookHelper from "@/helpers/book";
export default {
  props: {
    book: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getBookLevel: bookHelper.getBookLevel,
  },
};
</script>
