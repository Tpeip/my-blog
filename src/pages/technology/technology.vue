<template>
    <div class="tech">
        <div class="kb_box box_left">
            <ul>
                <li v-for="(type, index) in typeList" :key="index">{{type}}</li>
            </ul>
        </div>
        <div class="kb_box box_right">
            <div class="kb_item" v-for="(i, index) in 4" :key="index">
                <p class="kb_tags">
                    <i class="icon"></i>
                    <span>HTML</span>
                </p>
                <p class="kb_title">正则表达式</p>
                <p class="kb_content">正则表达式，又称规则表达式。（英语：Regular Expression，在代码中常简写为regex、regexp或RE），计算机科学的一个概念。正则表达式通常被用来检索、替换那些符合某个模式(规则)的文本。
          许多程序设计语言都支持利用正则表达式进行字符串操作。例如，在Perl中就内建了一个功能强大的正则表达式引擎。正则表达式这个概念最初是由Unix中的工具软件（例如sed和grep）普及开的。正则表达式通常缩写成“regex”，单数有regexp、regex，复数有regexps、regexes、regexen
          许多程序设计语言都支持利用正则表达式进行字符串操作</p>
                <p class="kb_footer">2019.10.12   浏览 110</p> 
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'technology',
    data() {
        return{
            typeList: ['全部', 'HTML', 'CSS', 'JavaScript', '算法']
        }
    }
}
</script>

<style lang="less" scoped>
@fontSize: 18px;
.tech{
    font-size: @fontSize;
    display: flex;
    margin-top: 30px;
    width: 100%;
    position: relative;
    z-index: 3;
}
.icon{
    display: inline-block;
    height: 24px;
    width: 24px;
    background: #409EFF;
    border-radius: 12px;
    position: relative;
    margin-top: 3px;
    margin-left: 3px;
}
.icon::after{
    content: '#';
    position: absolute;
    font-size: 20px;
    color: #fff;
    left: 5px;
    top: 2px;
}
.kb_box{
    padding: 0 16px;
    height: 600px;
    background: #fff;
}
.box_left{
    width: 280px;
    margin-left: 300px;
    text-align: right;
    border-right: 1px solid #eee;
}
.box_right{
    width: calc(100% - 880px);
    text-align: left;
    padding: 0 30px 0 40px;
}
.box_left ul{
    text-align: center;
    padding: 0 0 50px 0;
}
.box_left ul li{
    padding: 0 40px;
    text-align: left;
    height: 36px;
    line-height: 36px;
    font-size: 14px;
}
.box_left ul li:hover{
    cursor: pointer;
    background-color: rgba(144, 147, 153, .1);
}
.kb_item{
    height: 200px;
    width: 100%;
    // border: 1px solid #eee;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 20px;
    margin-bottom: 20px;
    cursor: pointer;
}
.kb_item:hover .kb_title{
    color: #409EFF;
}
.kb_item > p{
    margin-bottom: 10px;
}
.kb_tags{
    display: inline-block;
    width: auto;
    height: 30px;
    background: rgba(244, 244, 245, 0.6);
    border-radius: 15px;
    padding-right: 12px;
    font-size: 16px;
}
.kb_tags span{
    display: inline-block;
    vertical-align: top;
    line-height: 30px;
    color: #409EFF;
}
.kb_title{
    font-size: 18px;
}
.kb_content{
    margin-top: 10px;
    margin-bottom: 30px !important;
    font-size: 14px;
    color: #606266;
    text-indent: 2em;
    line-height: 24px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.kb_footer{
    font-size: 13px;
    color: #909399;
}
</style>