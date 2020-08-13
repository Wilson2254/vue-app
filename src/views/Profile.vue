<template>
  <div>
    <v-container>
       <v-tabs v-model="tabMode" fixed-tabs color="orange" slider-color="green">
        <v-tab :key="'data'">Мои данные</v-tab>
        <v-tab :key="'books'">Мои книги</v-tab>
        <v-tab :key="'words'">Мои слова</v-tab>
        <v-tab-item :key="'data'">
            <user-profile-data>  </user-profile-data>
        </v-tab-item>
        <v-tab-item :key="'books'"></v-tab-item>
        <v-tab-item :key="'words'"></v-tab-item>
      </v-tabs>
    </v-container>
  </div>
</template>

<script>
import userProfileData from '../components/UserProfileData'
export default {
    data(){
        return{
            tabMode: 'data'
        }
    },
    components:{
        userProfileData
    }
};
</script>