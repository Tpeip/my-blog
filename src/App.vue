<template>
  <div id="app">
    <nav-bar></nav-bar>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/navbar";
import Wonder from "./assets/js/Wonder";
export default {
  name: "App",
  mounted() {
    new Wonder({
      el: "#app",
      dotsNumber: 60,
      lineMaxLength: 400,
      dotsAlpha: 1,
      speed: 1.5,
      clickWithDotsNumber: 5,
    });
    this.$nextTick(function () {
      let windowHeight = window.outerHeight;
      document.querySelector(".content").style.height =
        windowHeight - 150 + "px";
      document
        .querySelector(".content")
        .addEventListener("scroll", this.scrollHandler);
    });
  },
  methods: {
    scrollHandler() {
      let el = document.querySelector(".content");
      let el_target = document.querySelector(".kb_header");
      let top = el.scrollTop;
      let is_true = el_target.className.includes("s_down");
      if (top > 0 && !is_true) {
        el_target.classList.add("s_down");
      }
      if (top == 0) {
        el_target.classList.remove("s_down");
      }
    },
  },
  components: {
    NavBar,
  },
};
</script>

<style lang="less">
//@import "./assets/css/common/reset.css";
//@import "./assets/css/iconfont/iconfont.css";
//@import "./assets/css/common/common.css";
//@import "./assets/css/common/common.less";
#app {
  position: fixed;
  min-height: 100%;
  width: 100%;
  // left: 0;
  // top: 0;
  /* background: rgba(240, 249, 235, 0.2); */
}
canvas {
  position: absolute;
  top: 0;
  z-index: 1;
}
.content {
  //height: 900px;
  overflow: auto;
  position: relative;
  z-index: 4;
}
::-webkit-scrollbar {
  overflow: hidden;
}
.s_down {
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
  border-bottom: none !important;
}
</style>
