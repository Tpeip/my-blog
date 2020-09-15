<template>
  <div class="kb_header">
    <ul class="kb_header_main">
      <li
        class="kb_header_item"
        v-for="(nav, index) in navData"
        :key="index"
        :class="index==currentIndex?'kb_header_checked':''"
        @click="changeNav(index)"
      >{{nav.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
      currentIndex: 0,
      navData: [
        {
          name: "首页",
          path: "/home",
        },
        {
          name: "1", //"随笔记录",
          path: "/tech",
        },
        {
          name: "2", //"生活趣事",
          path: "/life",
        },
        {
          name: "3", //"相关资源",
          path: "/resource",
        },
        {
          name: "4", //"关于",
          path: "/other",
        },
      ],
    };
  },
  methods: {
    changeNav(index) {
      this.currentIndex = index;
      let path = this.navData[index].path;
      this.$router.push({ path: path });
      //路由传参数
      //this.$router.push({ name: 'tech', params: {id: 123} });
    },
  },
};
</script>

<style scoped>
.kb_header {
  height: 80px;
  width: 100%;
  border-bottom: 1px solid #eee;
  padding-right: 100px;
  position: relative;
  z-index: 5;
  background: #fff;
}
.kb_header_main {
  float: right;
}
.kb_header_item {
  display: inline-block;
  padding: 0 16px;
  height: 80px;
  line-height: 90px;
  min-width: 90px;
  cursor: pointer;
  text-align: center;
  position: relative;
  font-weight: bold;
  color: #666;
  letter-spacing: 2px;
}
.kb_header_item:after {
  content: "";
  width: 0;
  height: 2px;
  background: #409EFF;
  position: absolute;
  top: calc(100% - 2px);
  left: 50%;
  transition: all 0.3s;
}
.kb_header_checked,
.kb_header_item:hover {
  /* background: #F4F4F5; */
  color: #409EFF;
}
.kb_header_checked:after,
.kb_header_item:hover:after {
  left: 0%;
  width: 100%;
}
.kb_header_checked {
  color: #409EFF;
  /* font-weight: bold; */
}
</style>