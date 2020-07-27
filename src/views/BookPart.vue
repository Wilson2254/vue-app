<template>
  <v-container v-if="part">
    <v-row justify="center">
      <book-part-content :part="part"></book-part-content>
      <book-part-words :words="part.words"></book-part-words>
      <v-container>
        <v-row justify="center">
          <v-btn v-if="!finishDate" color="success" orange @click="finishDialog = true">
            <v-icon>mdi-check</v-icon>Прочтение завершено
          </v-btn>
        </v-row>
      </v-container>

      <v-dialog v-model="finishDialog" width="300">
        <v-card>
          <v-card>
            <v-img
              src="https://firebasestorage.googleapis.com/v0/b/englishspeak-a8a45.appspot.com/o/356-3569430_checked-and-done-done-and-done-clipart.png?alt=media&token=a8873e69-b70b-4264-b6b9-083fd9d90bd8"
              max-width="300px"
              max-height="200px"
              class="text-center"
            ></v-img>
            <v-card-title>
              <div class="headline">Ура! Всё прочитано!</div>
            </v-card-title>
            <v-card-text>
              <span>Моя оценка</span>
              <v-rating v-model="rating" color="succes" half-increments large></v-rating>
            </v-card-text>
            <v-card-actions>
              <v-spacer>
                <v-btn color="red" text @click="finishDialog=false">
                  <v-icon>mdi-close</v-icon>Закрыть
                </v-btn>
                <v-btn color="success" text @click="finishWork=false">
                  <v-icon>mdi-check</v-icon>Прочтение завершено
                </v-btn>
              </v-spacer>
            </v-card-actions>
          </v-card>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
import Vue from "vue";
import BookPartContent from "../components/BookPartContent";
import BookPartWords from "../components/BookPartWords";
export default {
  props: {
    bookId: {
      type: String,
      required: true,
    },
    partId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      part: null,
      finishDialog: false,
      rating: 0,
    };
  },
  computed: {
    // part() {
    //   let val = this.$store.getters.getParts.find(
    //     (b) => b.bookId == this.bookId && b.bookPartId == this.partId
    //   );
    //   return val;
    // },
    finishDate() {
      return this.$store.getters.userData.books[this.bookId].parts[this.partId]
        .finishedDate;
    },
  },
  created() {
    Vue.$db
      .collection("bookParts")
      .where("bookId", "==", this.bookId)
      .where("bookPartId", "==", this.partId)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((s) => {
          this.part = s.data();
        });
      })
      .then(() => {
        this.$store.dispatch("update_user_book_stats", {
          bookId: this.bookId,
          partId: this.partId,
        });
      })
      .catch((error) => console.log(error));
  },
  methods: {
    finishWork() {
      this.$store.dispatch("finish_user_book_part", {
        bookId: this.bookId,
        partId: this.partId,
        rating: this.rating,
      });
    },
  },
  components: {
    BookPartContent,
    BookPartWords,
  },
};
</script>