<template>
  <div class="main">
    <span><input type="text" v-model.number="num1" /></span>
    <span>+</span>
    <span><input type="text" v-model.number="num2" /></span>
    <span>=</span>
    {{ answer }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SampleComponent extends Vue {
  private num1 = "";
  private num2 = "";

  get answer() {
    return this.num1 + this.num2;
  }
}
</script>

<style></style>
