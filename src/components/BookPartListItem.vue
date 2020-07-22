<template>
  <div>
    <v-card max-width="1000" class="mx-auto">
      <v-card-title class="headline">{{part.title}}</v-card-title>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text color="orange" :to="{name: 'bookPart', params:{bookId:bookId, partId:part.id}}">Открыть</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    part: {
      type: Object,
      required: true
    },
    bookId: {
      required: true
    }
  }
};
</script>