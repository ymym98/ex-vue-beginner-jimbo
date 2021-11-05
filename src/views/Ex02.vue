<template>
  <div class="main">
    <span>名前：{{ myName }}</span
    ><br />
    <span>年齢：{{ myAge }}歳</span>
    <br />
    <span>10年後の年齢：{{ afterAge }}歳</span><br />
    <span>
      趣味：<span v-for="hobby of hobbies" v-bind:key="hobby"
        >{{ hobby }}&nbsp;</span
      >
    </span>
    <br />
    <span><a v-bind:href="url">自社ページ</a></span
    ><br />
    <img v-bind:src="img" v-bind="attributes" /><br />
    <button type="button" v-on:click="onclick" v-bind:disabled="canNotClick">
      ボタン
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SampleComponent extends Vue {
  private myName = "";
  private myAge = 0;
  private afterAge = 0;
  private hobbies = new Array<string>();
  private url = "";
  private img = "";
  private canNotClick = false;
  private attributes = { width: "0px", height: "0px" };

  onclick(): void {
    this.myName = "神保佑美";
    this.myAge = 23;
    this.afterAge = this.myAge + 10;
    this.hobbies = ["映画鑑賞", "犬", "カラオケ"];
    this.url = "https://www.rakus-partners.co.jp/";
    this.img = "img/shibadog.jpg";
    this.canNotClick = true;
    this.attributes = { width: "100px", height: "80px" };
  }
}
</script>

<style scoped>
/* attributes {
  width: 100px;
  height: 80px;
} */
/* img {
  width: 100px;
  height: 80px;
} */
.main {
  border: solid;
}
</style>
