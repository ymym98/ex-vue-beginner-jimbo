<template>
  <div>
    <span> <input type="text" v-model.number="item1" /></span><br />
    <span> <input type="text" v-model.number="item2" /></span><br />
    <span> <input type="text" v-model.number="item3" /></span><br />
    <span>税抜き価格：{{ withoutTax.toLocaleString() }}円</span><br />
    <span>税込価格：{{ inTax.toLocaleString() }}円</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SampleComponent extends Vue {
  private item1 = 0;
  private item2 = 0;
  private item3 = 0;

  get withoutTax() {
    return this.item1 + this.item2 + this.item3;
  }
  get inTax(): number {
    return Math.trunc((this.item1 + this.item2 + this.item3) * 1.1);
  }
}
</script>

<style></style>
