<template>
  <div>
    <v-app-bar
      app
      color="#fcb69f"
      dark
      src="https://i.picsum.photos/id/114/3264/2448.jpg?hmac=DOmBAsmlq14qncJF_8kOc4zPjtJtVBqmymXphtNHPOA"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
      <router-link to="/" tag="span" style="cursor:pointer">
        <v-toolbar-title v-text="'English Speak'"></v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-for="(items, item) in menuItems" :key="item" :to="items.route" text>
          <v-icon left v-html="items.icon"></v-icon>
          {{items.title}}
        </v-btn>
        <v-btn text @click.prevent="signout" v-if="isUserAuth">
          <v-icon left>mdi-logout</v-icon>Выйти
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
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null
  }),
  computed: {
    isUserAuth() {
      return this.$store.getters.isUserAuth;
    },
    menuItems() {
      return this.isUserAuth
        ? [
            {
              icon: "mdi-eye",
              title: "Читать",
              route: "/books"
            },
            {
              icon: "mdi-account",
              title: "Личный кабинет",
              route: "/profile"
            }
          ]
        : [
            {
              icon: "mdi-eye",
              title: "Читать",
              route: "/books"
            },
            {
              icon: "mdi-account-plus",
              title: "Зарегистрироваться",
              route: "/signup"
            },
            {
              icon: "mdi-login",
              title: "Войти",
              route: "/signin"
            }
          ];
    }
  },
  watch: {
    group() {
      this.drawer = false;
    }
  },
  methods: {
    signout() {
      this.$store.dispatch("signout");
    }
  }
};
</script>

<style>
</style>