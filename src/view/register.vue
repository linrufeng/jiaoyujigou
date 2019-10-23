<template>
    <div>
        <div class="wrapper">
            <div class="content">
                <div class="wel-box">
                    <span class="name">欢迎注册</span>
                    <div class="line"></div>
                </div>
                <div class="name item">
                    <input-box @val="nameFun" :name="'user'">账号：</input-box>                   
                </div>
                <div class="pass-word item">
                   <input-box @val="passwordFun" :name="'key'" :type="'password'"> 密码：</input-box>
                </div>
                <div class="button-box">
                    <button @click="login">注册并登陆</button>                    
                </div>
            </div>   
        </div>
    </div>
</template>

<script>
import inputBox from './../components/input';
import axios from '../axios';
export default {
    components: {
        inputBox
    },
    data() {
        return {            
           name:'',
           password:''
        }
    },
    created() {},
    mounted() {           
    },
    destroyed() {},
    methods: {
        nameFun(val){
            this.name = val
        },
        passwordFun(val){
            this.password = val;
        },
        login(){
            // 注册接口
            axios({
                 type: 'post',
                 url:'http://localhost:3001/login/register',
                 data:{                    
                    'name':this.name,
                    'password':this.password
                 }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.wrapper{
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
}
.wel-box{
    font-size: .16rem;
    position: relative;
    width: 100%;
    text-align: center;
    margin-bottom: 1rem;
    .name{
        background: #fff;
        position: relative;
        z-index: 1;
        padding: 0 .2rem;
        color: #666;
        font-size: .4rem;
    }
    .line{
        position: absolute;
        z-index: 0;
        height: 1px;
        width: 4rem;
        background: #ccc;
        top:50%;
        left: 50%;
        transform: translate(-50%,50%);
    }
}
.item{
    margin-top: .1rem;
}
.button-box{
    button{
        margin-top: .2rem;
        width: 100%;
        border:none;
        color: #fff;
        height: .6rem;        
        background: #419dde;
        font-size: .3rem;
        border-radius: .4rem;
    }
    .tip{
        margin-top: .4rem;
        text-align: right;        
        display: flex;
        a{
            font-size: .24rem;
        }
    }
    .log{
        margin-right: auto;
    }
}
</style>
