<template>
    <div class="life">
        <div class="kb_main">
            <div class="kb_item">
                <div class="content_box content_img">
                    <img src="../../assets/images/Koala.jpg" alt="">
                </div>
                <div class="content_box">

                </div>
            </div>
            <div class="kb_item">
                <div class="content_box content_img">
                    <img src="../../assets/images/Hydrangeas.jpg" alt="">
                </div>
                <div class="content_box">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'life',
    data() {
        return{

        }
    }
}
</script>

<style scoped>
.life{
    width: 100%;
}
.kb_main{
    width: 50%;
    position: relative;
    z-index: 3;
    height: 800px;
    background: #fff;
    margin: 0 auto;
}
.kb_item{
    height: 200px;
    width: 100%;
    /* border: 1px solid #eee; */
    box-shadow: 1px 1px 10px 0 rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    margin-top: 30px;
}
.content_box{
    display: inline-block;
}
.content_img {
    padding: 30px 20px;
}
.content_box img{
    width: 140px;
    height: 140px;
    border-radius: 70px;
    object-fit: cover;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}
</style>