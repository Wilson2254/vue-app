<template>
  <div>
    <v-card max-width="1000" class="mx-auto">
      <v-card-title class="headline">{{part.title}}</v-card-title>
      <v-card-actions>
        <div v-if="finishedDate && this.isUserAuth">
          <v-icon color="orange" large class="mb-2 ml-1">mdi-check-bold</v-icon>
          Прочитано {{finishedDate | formattedDate}}
        </div>
        <div v-if ="!this.isUserAuth" class="ml-2">
          Для прочтения необходимо
          <router-link :to="{name: 'signin',}" style="color: orange; text-decoration: none">авторизироваться</router-link>
        </div>
        <v-spacer></v-spacer>
        <v-btn
          text
          color="orange"
          v-if="isUserBookLoaded"
          :to="{name: 'bookPart', params:{bookId:bookId, partId:part.id}}"
        >Открыть</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    part: {
      type: Object,
      required: true,
    },
    bookId: {
      required: true,
    },
  },
  computed: {
    ...mapGetters(["isUserAuth", "userData", "getProcessing"]),
    isUserBookLoaded() {
      return (
        this.isUserAuth &&
        !this.getProcessing &&
        !!this.userData.books[this.bookId]
      );
    },
    finishedDate() {
      let book = this.userData.books[this.bookId];

      if (book && book.parts[this.part.id])
        return book.parts[this.part.id].finishedDate;

      return false;
    },
  },
};
</script>