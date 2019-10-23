<template>
    <div class="lay">
        <!-- 登录功能/ 游客 、会员、机构管理者、超级管理员 -->

        <div class="header-box">
            <a href="#">返回</a>
            <span class="titles">{{titleName}}</span>
            <span class="login">登录</span>
        </div>
        <slot name="centent">暂无</slot>
        
           
        
        <!--首页  机构  个人中心-->
        <div class="foot-box">
            <a href="" class="item">首页</a>
            <a href="" class="item">分类</a>
            <a href="" class="item">广场</a>
            <a href="" class="item">我</a>
        </div>        
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'	
@Component({
    props:{
        titleName:{
            type:String,
            default:'首页'
        }
    }
})
export default class lays extends Vue {

    
}
</script>
<style lang="scss" scoped>
.lay{
    box-sizing: border-box;
    padding:1rem 0 1rem 0;
    min-height: 100vh;
}
.header-box{
    height: 1rem;
    line-height: 1rem;
    background: #fff;
    display: flex;
    padding: 0 .2rem;
    justify-content: center;   
    position: fixed;
    top: 0;
    left: 0;
    width: 100%; 
    .titles{
        margin:auto;
        font-size: 16px;
        font-weight: bold;
    }
}
.foot-box{
    height: 1rem;
    line-height: 1rem;
    background: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    .item{
        display: inline-block;
        width: 25%;
        text-align: center;
    }
}
</style>