<template>
    <div class="header-box">
        <a href="#">返回</a>
        <span class="titles">{{titleName}}</span>
        <span class="login">登录</span>
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
export default class Shead extends Vue {

    
}
</script>
<style lang="scss" scoped>
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
</style>