<template>
  <div class="main">
    <div class="name">名前：{{ name }}</div>
    <div class="age">年齢：{{ age }}歳</div>
    <div class="afterAge">10年後の年齢：{{ age + 10 }}歳</div>
    <div>
      趣味：<span v-for="hobby of hobbies" v-bind:key="hobby">
        {{ hobby }}
      </span>
    </div>
    <br />
    <div>
      <a v-bind:href="url">自社ページリンク</a>
    </div>
    <br />
    <div>
      <img class="img_dog" v-bind:src="img" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SampleComponent extends Vue {
  private hobbies = ["映画鑑賞", "犬", "カラオケ"];
  private url = "https://www.rakus-partners.co.jp/";
  private img = "img/shibadog.jpg";
  private name = "神保佑美";
  private age = 23;
}
</script>

<style scoped>
.main {
  border: solid;
}
.img_dog {
  width: 150px;
  height: 80px;
}
</style>
