<template>
    <div class="content-wrap">
      <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "artiContentWrap"
    }
</script>

<style scoped>
  .content-wrap{
    height: calc(100vh - 80px);
  }
</style>
