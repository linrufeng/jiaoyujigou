<template>
    <div class="warper">
        <div class="header">
            <a href="" class="back">返回</a>
            机构详情
        </div>
        <div class="banner">
            <img src="../asset/img/test.jpg" alt="">
        </div>
        <div class="detial">
            <h3>红果果机构</h3>
            <div class="des">文案文案文案文案文案文案文案文案文案文案文案文案</div>
            <div><span>联系我们</span><span>到这去</span></div>
            <div class="bottom">
                <p>
                    <span>评分： 10分</span> 
                    <span>评论人数:10</span>
                </p>                
                <p>
                    <span>好评：10</span>
                    <span>中评：1</span>
                    <span>差评：2</span>
                </p>
                
            </div>
        </div>
        <ul class="classify">
            <li>语文</li>
            <li>数学</li>
            <li>外语</li>
            <li>历史</li>
            <li>物理</li>
            <li>体育</li>
            <li>体操</li>
        </ul>
        <ul class="pinglun-list">
            <li class="pinglun">               
                <div class="head-box">
                    <div class="img-box">
                        <img src="./../asset/img/touxiang.jpg" alt="">
                    </div>
                    <div class="person">
                        <p> <span class="name">用户：小王子</span><span class="fen">用户评分:5.6</span></p>
                        <p>评论时间：2019年12月12日 星期二</p>
                    </div>
                   
                </div>
                <div class="des">
                    <div class="img-box">
                        <div class="img-cell">
                            <img src="./../asset/img/test.jpg" alt="">
                        </div>                        
                        <div class="img-cell">
                            <img src="./../asset/img/test.jpg" alt="">
                        </div>
                    </div>
                    <div class="msg">
                        这个机构做的很好，语文老师很友好
                        这个机构做的很好，语文老师很友好
                        这个机构做的很好，语文老师很友好
                        这个机构做的很好，语文老师很友好
                        这个机构做的很好，语文老师很友好
                        这个机构做的很好，语文老师很友好
                    </div>
                </div>
                <div class="tool">
                    <span>回复</span>
                    <span>支持</span>
                    <span>不支持</span>
                </div>
            </li>
            <li class="pinglun">               
                <div class="head-box">
                    <div class="img-box">
                        <img src="./../asset/img/touxiang.jpg" alt="">
                    </div>
                    <div class="person">
                        <p> <span class="name">用户：小王子</span><span class="fen">用户评分:5.6</span></p>
                        <p>评论时间：2019年12月12日 星期二</p>
                    </div>
                   
                </div>
                <div class="des">
                    <div class="img-box">
                        <div class="img-cell">
                            <img src="./../asset/img/test.jpg" alt="">
                        </div>                        
                        <div class="img-cell">
                            <img src="./../asset/img/test.jpg" alt="">
                        </div>
                    </div>
                    <div class="msg">
                        这个机构做的很好，语文老师很友好
                        这个机构做的很好，语文老师很友好
                        这个机构做的很好，语文老师很友好
                        这个机构做的很好，语文老师很友好
                        这个机构做的很好，语文老师很友好
                        这个机构做的很好，语文老师很友好
                    </div>
                </div>
                <div class="tool">
                    <span>回复</span>
                    <span>支持</span>
                    <span>不支持</span>
                </div>
            </li>
        </ul>
        <div class="bottom-fl">
            <p>留下您精辟的评论</p>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'	
@Component
export default class list extends Vue {

}
</script>
<style lang="scss" >
.pinglun-list{
    background: #fff;
    margin-top: .2rem;
}
.pinglun{
    padding: 0 .2rem .2rem;
    border-bottom: 1px solid #f1f1f1;
    margin-bottom: .2rem;
    .head-box{ 
        display: flex;
        background: #fff;
        padding: .2rem 0;
        .img-box{
            display: flex;
            width: 1rem;
            height: 1rem;
            border-radius: 50%;
            overflow: hidden;           
        }
        img{
            width: 1rem;
            height: 1rem;
            
        }
        .person{
            padding-left: .1rem;
            p{
                padding:.05rem 0;
            }
        }
    }
    .des{
        background: #fff;
        border-top:1px solid #f1f1f1;
        padding:.2rem .2rem;
        .img-box{
            display: flex;
            margin-bottom: .2rem;
            .img-cell{
                width: 1.2rem;
                height: 1.6rem;               
                overflow: hidden;
                margin-right:.2rem;
                display: flex;
                flex-shrink:0;
                img{
                    flex-grow:0;
                    width: 100%;
                    height: auto;
                } 
            }
        }
    }
}
.banner{
    img{
        width: 7.5rem;
    }
}
.warper{
    padding: .8rem 0 1rem 0;
}
.header{
    position: fixed;
    width: 100%;
    height: .8rem;
    line-height: .8rem;
    background: #fff;
    top:0;
}

.bottom-fl{
    position: fixed;
    bottom: 0;
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    background:#fff;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid #f2f2f2;
    box-shadow: 0px -2px 20px 0px #ccccccc2;
    p{
        height: .6rem;
        line-height: .6rem;
        width: 6rem;
        border-radius: .3rem;
        background: #f2f2f2;
        color:#bbb;
    }
    
}
.classify{
    display: flex;
    background: #fff;
    padding:.2rem;
    margin-top:.2rem;
    li{
        display: block;
        padding: 0 .2rem;
    }
}
.detial{
    background: #fff;
    margin-top: .2rem;
    padding:0 .2rem;
}
</style>
