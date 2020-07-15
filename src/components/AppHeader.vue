<template>
<v-app>
  <v-app-bar app dark class="primary">
      <v-toolbar-title v-text="'English Speak'"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn v-for="(items, item) in menuItems" :key="item" :to="items.route" text>
            <v-icon left v-html="items.icon"> </v-icon>
            {{items.title}}
        </v-btn>
      </v-toolbar-items>
  </v-app-bar>
  </v-app>
</template>

<script>
export default {
  computed: {
    menuItems() {
      return [
        {
          icon: "mdi-eye",
          title: "Читать",
          route: "/books"
        },
        {
          icon: "mdi-puzzle",
          title: "Учить слова",
          route: "/words"
        },
        {
          icon: "mdi-account",
          title: "Кабинет",
          route: "/profile"
        },
        {
          icon: "mdi-logout",
          title: "Выйти",
          route: "/logout"
        },
        {
          icon: "mdi-login",
          title: "Войти",
          route: "/signin"
        },
        {
          icon: "mdi-account-plus",
          title: "Зарегистрироваться",
          route: "/signup"
        }
      ];
    }
  }
};
</script>

<style>
</style>