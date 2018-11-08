<template>
  <div class="main-content-wrap">
    <div class="main-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
    export default {
        name: "artiMainContentWrap"
    }
</script>

<style scoped>
  .main-content-wrap {
    vertical-align: top;
    display: inline-block;
    width: calc(100% - 255px);
    position: relative;
  }
  .main-content{
    width: 100%;
    position: absolute;
    height: calc(100vh - 80px);
    top: 0;
    left: 0;
    padding: 15px;
  }
</style>
