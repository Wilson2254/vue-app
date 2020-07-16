<template>
  <v-app>
    <v-app-bar app dark class="primary">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon >
      <v-toolbar-title v-text="'English Speak'"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-for="(items, item) in menuItems" :key="item" :to="items.route" text>
          <v-icon left v-html="items.icon"></v-icon>
          {{items.title}}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary class="hidden-md-and-up">
      <v-list nav dense>
        <v-list-item-group v-model="group">
          <v-list-item v-for="(items, item) in menuItems" :key="item" :to="items.route" text>
            <v-icon left v-html="items.icon"></v-icon>
            {{items.title}}
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
export default {
  data: function() {
    return {
      drawer: false,
      group: null
    };
  },
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
  },
  watch: {
    group() {
      this.drawer = false;
    }
  }
};
</script>

<style>
</style>