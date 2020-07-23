<template>
  <v-card class="pa-2" width="1000">
    <div class="display-1 text-center">{{part.bookTitle}}</div>
    <div class="headline text-center">{{part.partTitle}}</div>
    <div class="text-center mt-2 mb-2">
      <youtube
        :video-id="part.youtube_id"
        :player-width="playerWidth"
        :player-height="playerHeight"
      ></youtube>
    </div>
    <div>
      <v-slider v-model="fontSize" :label="`Шрифт ${fontSize}`" color="orange" max="56" min="8" tick-size="15"></v-slider>
      <v-tabs v-model="tabMode" fixed-tabs color="orange" slider-color="green">
        <v-tab>Текст с подсказками</v-tab>
        <v-tab>Параллельно</v-tab>
        <v-tab-item>
          <div v-for="(paragraph, i) in part.content" :key="`par1${i}`">
            <br />
            <span v-for="(sentence, j) in paragraph.sentences" :key="`par1${i}sen1${j}`" :style="textStyle">
              <span>{{sentence.originText}}</span>
              <v-icon size="22" :style="textStyle" @click.prevent="toggleVisibility(i, j)">mdi-lightbulb</v-icon>
              <span
                v-if="getVisibilityFlag(i, j).value"
                class="success--text"
                style="font-weight:bold"
              >{{sentence.transText}}</span>
            </span>
          </div>
        </v-tab-item>
        <v-tab-item>
          <v-container>
            <v-row v-for="(paragraph, i) in part.content" :key="`par2${i}`">
              <v-col>
                <span v-for="(sentence, j) in paragraph.sentences" :key="`par2${i}sen2${j}_orig`" :style="textStyle">
                  <span>{{sentence.transText}}</span>
                </span>
              </v-col>
                <v-col>
                <span v-for="(sentence, j) in paragraph.sentences" :key="`par2${i}sen2${j}_trans`" :style="textStyle">
                  <span>{{sentence.originText}}</span>
                </span>
              </v-col>
            </v-row>
          </v-container>
        </v-tab-item>
      </v-tabs>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    part: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      tabMode: "English",
      visibilityKeys: [],
      fontSize: 18
    };
  },
  computed: {
    playerWidth() {
      return {
        xs: "250px",
        sm: "400px",
        md: "500px",
        lg: "600px",
        xl: "900px",
      }[this.$vuetify.breakpoint.name];
    },
    playerHeight() {
      return {
        xs: "200px",
        sm: "300px",
        md: "400px",
        lg: "500px",
        xl: "600px",
      }[this.$vuetify.breakpoint.name];
    },
    textStyle(){
      return {fontSize: `${this.fontSize}px`}
    }
  },
  methods: {
    getVisibilityFlag(i, j) {
      return this.visibilityKeys.find((k) => k.key == `${i}${j}`);
    },
    toggleVisibility(i, j) {
      let flag = this.getVisibilityFlag(i, j);
      flag.value = !flag.value;
    },
  },
  created() {
    for (let i = 0; i < this.part.content.length; i++) {
      for (let j = 0; j < this.part.content[i].sentences.length; j++) {
        this.visibilityKeys.push({
          key: `${i}${j}`,
          value: false,
        });
      }
    }
  },
};
</script>