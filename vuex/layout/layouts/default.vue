<template>
  <div>
    <arti-nav></arti-nav>
    <arti-content-wrap>
      <arti-left-wrap></arti-left-wrap>
      <arti-main-content-wrap>
        <nuxt></nuxt>
      </arti-main-content-wrap>
    </arti-content-wrap>
  </div>
</template>

<script>
  import "../assets/style/reset.css";
  import ArtiNav from "../components/layout/header/artiNav";
  import ArtiContentWrap from "../components/layout/content/artiContentWrap";
  import ArtiLeftWrap from "../components/layout/content/artiLeftWrap";
  import ArtiMainContentWrap from "../components/layout/content/artiMainContentWrap";

  export default {
    components: {ArtiMainContentWrap, ArtiLeftWrap, ArtiContentWrap, ArtiNav}
  }
</script>
