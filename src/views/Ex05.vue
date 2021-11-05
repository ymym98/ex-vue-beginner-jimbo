<template>
  <div class="main">
    <div class="error" v-if="name === ''">名前が入力されていません</div>
    <div>名前：<br /><input type="text" v-model="name" /></div>
    <div class="error" v-if="age === ''">年齢が入力されていません</div>
    <div>年齢：<br /><input type="text" v-model="age" /></div>
    <div class="error" v-if="comment === ''">コメントが入力されていません</div>
    <span
      >コメント：<br />
      <textarea
        name=""
        id=""
        cols="20"
        rows="5"
        v-model="comment"
      ></textarea></span
    ><br />
    <hr />
    <span>入力値：</span><br />
    <span>名前：{{ name }} </span><br />
    <span>年齢：{{ age }} </span><br />
    <span
      >コメント：
      <pre>{{ comment }}</pre></span
    ><br />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SampleComponent extends Vue {
  private name = "";
  private age = "";
  private comment = "";
}
</script>

<style scoped>
.error {
  color: red;
}
.main {
  border: solid;
}
</style>
