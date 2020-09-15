<template>
  <div class="kb_main">
    <div class="kb_main_box kb_left">
      <div class="kb_item" v-for="(a,index) in 5" :key="index">
        <p class="kb_title">正则表达式</p>
        <div class="kb_tags">
          <i class="iconfont icon-discount"></i>
          <span class="kb_tag">正则</span>
          <span class="kb_tag">表达</span>
        </div>
        <div class="kb_content">
          正则表达式，又称规则表达式。（英语：Regular Expression，在代码中常简写为regex、regexp或RE），计算机科学的一个概念。正则表达式通常被用来检索、替换那些符合某个模式(规则)的文本。
          许多程序设计语言都支持利用正则表达式进行字符串操作。例如，在Perl中就内建了一个功能强大的正则表达式引擎。正则表达式这个概念最初是由Unix中的工具软件（例如sed和grep）普及开的。正则表达式通常缩写成“regex”，单数有regexp、regex，复数有regexps、regexes、regexen
          许多程序设计语言都支持利用正则表达式进行字符串操作
        </div>
      </div>
    </div>
    <div class="kb_main_box kb_right">
       <div class="kb_card">
        <div class="caret"></div>
        <img src="../../assets/images/Tulips.jpg" alt="">
        <div class="kb_content"></div>
      </div>
      <div class="kb_card">
        <div class="kb_title">
          <span>关于</span>
        </div>
        <div class="kb_content"></div>
      </div>
      <div class="kb_card">
        <div class="kb_title">
          <span>最新</span>
        </div>
        <div class="kb_content">
          <ul>
            <li v-for="(content, index) in dataList" :key="index">
              <template v-if="index<8">
                <i class="iconfont fs_18" :class="'icon-xuhao_'+(index+1)"></i>
                <a>{{content}}</a>
              </template>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      dataList: [
        "正则表达式这个概念",
        "在Perl中就内建了一个功能强大",
        "计算机科学的一个概念",
        "组件就是基于视图的模块",
        "不同框架、工具对组件的定义和实现各不相同，但可以用一句话来概括",
        "组件的核心任务就是将数据渲染到视图并监听用户在视图上的操作",
        "Vue 的模板编译器可分为 3 步",
        "解析过程包括 词法分析 和 语法分析",
        "组件的核心任务就是将数据渲染到视图并监听用户在视图上的操作",
      ],
    };
  },
};
</script>

<style scoped>
.kb_main {
  margin-top: 20px;
  display: flex;
  width: 100%;
  height: 700px;
}
.kb_left {
  flex: 1;
}
.kb_right {
  width: 40%;
}
.kb_main_box {
  height: 100%;
  padding: 20px;
}
.kb_card {
  min-height: 300px;
  min-width: 300px;
  width: 50%;
  background: #fff;
  border-radius: 4px;
  border: 1px solid #eee;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
  z-index: 3;
  position: relative;
}
.kb_card .kb_title {
  height: 50px;
  line-height: 50px;
  width: 100%;
  border-bottom: 1px dotted #d7d7d7;
  padding: 0 16px;
}
.kb_card .kb_content {
  box-sizing: border-box;
  padding: 16px 30px 24px 16px;
  max-height: 300px;
  overflow: hidden;
}
.kb_card ul li {
  height: 32px;
  line-height: 32px;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.kb_item {
  padding: 20px;
  width: 70%;
  height: 200px;
  min-width: 480px;
  border-bottom: 1px solid #eee;
  float: right;
  margin-bottom: 20px;
  z-index: 3;
  position: relative;
  background: #fff;
}
.kb_item .kb_title {
  font-size: 20px;
  color: #409EFF;
}
.kb_item .kb_tags {
  margin: 16px 0;
}
.kb_item .kb_tag {
  display: inline-block;
  font-size: 13px;
  color: #fff;
  background: #409EFF;
  border: 1px solid #409EFF;
  padding: 4px 8px;
  border-radius: 2px;
}
.kb_item .kb_content {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-indent: 2em;
  color: #333;
  font-size: 14px;
  line-height: 24px;
}
.kb_tags .iconfont {
  font-size: 22px;
}
.caret{
  height: 0;
  width: 0;
  border-top: 80px solid #B3D8FF;
  border-left: 180px solid transparent;
  border-right: 180px solid transparent;
  border-bottom: none;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 4;
}
.caret + img{
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 40px;
  margin-left: 140px;
  margin-top: 25px;
  background: #fff;
  z-index: 5;
  position: relative;
}
</style>
