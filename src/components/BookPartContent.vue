<template>
    <v-card>
        <div>
            <div class="display-1"> {{part.bookTitle}}</div>
        </div>
    </v-card>
</template>

<script>
export default {
    props:{
        part:{
            type: Object,
            required: true
        }
    },
}
</script>