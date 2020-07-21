<template>
  <v-container>
    <v-row>
      <v-col lg="4">
        <v-text-field label="Поиск книги" outlined shaped></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="book in books" :key="book.id">
        <v-card class="mx-auto">
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://pm1.narvii.com/7272/3ded1d4deefd5002d2e0a32d29d582be11d873dbr1-1280-720v2_00.jpg"
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
              <span>{{book.rating}}</span>
              <span>({{book.ratingsCount}})</span>
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
  computed: {
    books() {
      return this.$store.getters.getBooks;
    }
  },
  methods: {
    getBookLevel(level) {
      return level.join("/");
    }
  }
};
</script>