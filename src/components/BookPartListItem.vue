<template>
  <div>
    <v-card max-width="1000" class="mx-auto">
      <v-card-title class="headline">{{part.title}}</v-card-title>
      <v-card-actions>
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
      console.log( this.getProcessing);
      return (
        this.isUserAuth &&
        !this.getProcessing &&
        !!this.userData.books[this.bookId]
      );
    },
  },
};
</script>