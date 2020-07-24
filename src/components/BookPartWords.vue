<template>
  <v-card class="pa-3" width="1000">
    <v-data-iterator
      :items="words"
      :items-per-page.sync="itemsPerPage"
      hide-default-footer
      :page="page"
    >
      <template v-slot:header>
        <v-toolbar class="mb-2 text-center" color="orange" dark flat>
          <v-toolbar-title>Слова</v-toolbar-title>
          <v-spacer></v-spacer>

          <span class="mr-4">{{ page }}/{{ numberOfPages }}</span>
          <v-btn dark color="brown darken-3" class="mr-1" @click="formerPage">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn dark color="brown darken-3" class="ml-1" @click="nextPage">
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-toolbar>
      </template>

      <template v-slot:default="props">
        <v-row>
          <v-col v-for="item in props.items" :key="item.name">
            <v-card>
              <v-card-title class="subheading font-weight-bold">{{ item.origWord }}</v-card-title>

              <v-divider></v-divider>

              <v-card-title class="font-weight-bold">{{ item.transWord }}</v-card-title>
              
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn small color="orange" fab><v-icon>mdi-plus</v-icon></v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </template>
    </v-data-iterator>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      itemsPerPage: 2,
      page: 1,
    };
  },
  props: {
    words: {
      type: Array,
      required: true,
    },
  },
  computed: {
    numberOfPages() {
      return Math.ceil(this.words.length / this.itemsPerPage);
    },
  },
  methods: {
    nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1;
    },
    formerPage() {
      if (this.page - 1 >= 1) this.page -= 1;
    },
  },
};
</script>