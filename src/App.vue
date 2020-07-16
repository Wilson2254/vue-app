<template>
  <v-app>
    <AppHeader></AppHeader>
    <v-main>
      <router-view />
    </v-main>
    <AppFooter></AppFooter>
  </v-app>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
export default {
  components: {
    AppHeader, AppFooter
  }
};
</script>