<template>
  <div class="left-menu">
    <div class="menu-content">list</div>
  </div>
</template>

<script>
    export default {
        name: "artiLeftWrap"
    }
</script>

<style scoped>
  .left-menu{
    display: inline-block;
    border-right: 1px solid #e9e9e9;
    height: calc(100vh - 80px);
    width: 250px;
    position: relative;
  }
  .menu-content,
  .main-content{
    width: 100%;
    position: absolute;
    height: calc(100vh - 80px);
    top: 0;
    left: 0;
    padding: 15px;
  }
</style>
