<template>
  <v-container v-if="part">
    <v-row justify="center">
      <v-card v-if="finishedDate" width="1000">
        <v-card-text>
          <div class="text-center text-h5">
            Данная часть прочитана
            <div class="text-center">{{finishedDate | formattedDate}}</div>
          </div>
          <div class="text-center">
            Моя оценка
            <v-rating v-model="savedRating" color="orange" background-color="green lighten-2" half-increments readonly large></v-rating>
          </div>
        </v-card-text>
      </v-card>
      <book-part-content :part="part"></book-part-content>
      <book-part-words :words="part.words"></book-part-words>
      <v-container>
        <v-row justify="center">
          <v-btn v-if="!finishedDate" color="success" orange @click="finishDialog = true">
            <v-icon>mdi-check</v-icon>Прочтение завершено
          </v-btn>
        </v-row>
      </v-container>

      <v-dialog v-model="finishDialog" max-width="300">
        <v-card>
          <v-card>
            <v-img
              src="https://firebasestorage.googleapis.com/v0/b/englishspeak-a8a45.appspot.com/o/resolutions-10-512.png?alt=media&token=75542db9-0f56-4602-b20d-017477004879"
              max-width="300px"
              max-height="250px"
              class="text-center"
            ></v-img>
            <v-card-title>
              <div class="headline">Ура! Всё прочитано!</div>
            </v-card-title>
            <v-card-text>
              <span>Моя оценка</span>
              <v-rating v-model="rating" color="orange" background-color="green lighten-2" half-increments large></v-rating>
            </v-card-text>
            <v-card-actions>
              <v-spacer>
                <v-btn color="red" text @click="finishDialog=false">
                  <v-icon>mdi-close</v-icon>Закрыть
                </v-btn>
                <v-btn color="success" text @click="finishWork">
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
    finishedDate() {
      return this.$store.getters.userData.books[this.bookId].parts[this.partId]
        .finishedDate;
    },
    savedRating() {
      return this.$store.getters.userData.books[this.bookId].parts[this.partId]
        .rating;
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
      this.finishDialog = false;
    },
  },
  components: {
    BookPartContent,
    BookPartWords,
  },
};
</script>