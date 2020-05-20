 
<template>
  <div class="logo-factor">
    <img src="../img/logo.png"/>
  </div>
</template>
<script lang="ts">
import { setting } from "@factor/api"
export default {
  methods: { setting },
}
</script>

<style lang="less" scope>
.logo-factor {
  svg {
    width: 130px;
    display: block;
    @media (max-width: 900px) {
      width: 100px;
    }
  }
  .letters {
    fill: #fff;
  }
}
</style>