<template>
  <div>
    <v-card class="mx-auto" max-width="1000">
      <v-card-title>{{userName}}</v-card-title>
      <v-card-title>{{userEmail}}</v-card-title>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" persistent max-width="500">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="orange" text v-bind="attrs" v-on="on">Изменить мои данные</v-btn>
          </template>
          <v-card>
            <v-card-title class="headline">Изменение данных</v-card-title>
            <v-card-text>
              <v-form v-model="valid">
                <v-text-field
                  label="Электронная почта"
                  name="login"
                  prepend-icon="mdi-account"
                  type="email"
                  color="orange"
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
                  color="orange"
                  required
                  v-model="password"
                  :rules="passwordRules"
                ></v-text-field>
                <h2>Хочу изменить:</h2>
                <v-radio-group v-model="changeType">
                  <v-alert type="warning" v-if="!error" :value="getError">{{getError}}</v-alert>
                  <v-alert type="warning" v-else>{{getError}}</v-alert>

                  <v-radio label="Никнейм" :value="'name'"></v-radio>

                  <v-text-field
                    label="Новый никнейм"
                    v-if="changeType == 'name'"
                    name="newname"
                    prepend-icon="mdi-account"
                    type="text"
                    color="orange"
                    required
                    v-model="newname"
                    :rules="nameRules"
                  ></v-text-field>

                  <v-radio label="Эл. почта" :value="'email'"></v-radio>
                  <v-text-field
                    label="Новая эл. почта"
                    v-if="changeType == 'email'"
                    name="newLogin"
                    prepend-icon="mdi-at"
                    type="email"
                    color="orange"
                    required
                    v-model="newEmail"
                    :rules="emailRules"
                  ></v-text-field>

                  <v-radio label="Пароль" :value="'password'"></v-radio>
                  <v-text-field
                    label="Новый пароль"
                    v-if="changeType == 'password'"
                    id="password"
                    name="newPassword"
                    prepend-icon="mdi-lock"
                    type="password"
                    color="orange"
                    required
                    v-model="newPassword"
                    :rules="passwordRules"
                  ></v-text-field>
                </v-radio-group>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="orange" text @click="dialog = false">Отмена</v-btn>
              <v-btn
                color="orange"
                text
                @click.prevent="changeUserData"
                :disabled="getProcessing
              ||
              !valid"
              >ОК</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      dialog: false,
      changeType: "name",
      email: "",
      password: "",
      newName: "",
      newEmail: "",
      newPassword: "",
      valid: false,
      nameRules: [(v) => !!v || "Пожалуйста введите никнейм"],
      emailRules: [
        (v) => !!v || "Пожалуйста введите email",
        (v) =>
          /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(
            v
          ) || "Неправильный email",
      ],
      passwordRules: [
        (v) => !!v || "Пожалуйста введите пароль",
        (v) => (v && v.length >= 6) || "Пароль должен иметь минимум 6 символов",
      ],
    };
  },
  computed: {
    ...mapGetters(["userName", "userEmail", "getProcessing", "getError"]),
  },
  methods: {
    changeUserData() {
      this.$store.dispatch("change_user_profile_data", {
        email: this.email,
        password: this.password,
        newName: this.newName,
        newEmail: this.newEmail,
        newPassword: this.newPassword,
        changeType: this.changeType,
      });
    },
  },
};
</script>

<style lang="stylus"></style>