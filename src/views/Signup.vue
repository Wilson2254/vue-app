<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Регистрация</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-alert type="warning" v-if="!error" :value="error">{{error}}</v-alert>
            <v-alert type="warning" v-else>{{error}}</v-alert>
            <v-form v-model="valid">
              <v-text-field
                label="Электронная почта"
                name="login"
                prepend-icon="mdi-account"
                type="email"
                required
                v-model="email"
                :rules="emailRules"
              ></v-text-field>

              <v-text-field
                id="password"
                label="Пароль"
                name="password"
                prepend-icon="mdi-lock"
                type="password"
                required
                v-model="password"
                :rules="passwordRules"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              @click.prevent="signup"
              :disabled="processing
              ||
              !valid"
            >Зарегистрироваться</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      valid: false,
      emailRules: [
        v => v || "Пожалуйста введите email",
        v => /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(v) || "Неправильный email"
      ],
      passwordRules: [
        v => v || "Пожалуйста введите пароль",
        v => (v && v.length >= 6) || "Пароль должен иметь минимум 6 символов"
      ]
    };
  },
  computed: {
    error() {
      return this.$store.getters.getError;
    },
    processing() {
      return this.$store.getters.getProcessing;
    },
    isUserAuth() {
      return this.$store.getters.isUserAuth;
    }
  },
  watch: {
    isUserAuth(val) {
      if (val === true) this.$router.push("/");
    }
  },
  methods: {
    signup() {
      this.$store.dispatch("signup", {
        email: this.email,
        password: this.password
      });
    }
  }
};
</script>