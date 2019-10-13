<template>
    <div class="list-waper">
        <div class="fitter">
            <span>排名:</span><span @click="buyPingfen">按评分{{wayPingfen}}</span><span @click="buyPerNum">按评论数{{wayPerNum}}</span>
        </div>
        <ul>
            <li class="item-box" v-for="(item,key) in list" :key="key"> 
                <a class="router" :href="'#/detail?'+item.id"></a>             
                <div class="top">
                    <img src="../asset/img/test.jpg" alt="教育机构">
                    <div class="right">
                        <h3>{{item.name}}</h3>
                        <p>{{item.des}}</p>
                        <div><a :link="item.contact.ph">联系我们</a><a :link="item.addressId">到这去</a></div>
                    </div>
                </div>  
                <div class="bottom">
                    <span>评分： {{item.average}}分</span> 
                    <span>评论人数:{{item.comment}}</span>
                    <span>好评：{{item.averageClass.good}}</span>
                    <span>中评：{{item.averageClass.middle}}</span>
                    <span>差评：{{item.averageClass.low}}</span>
                </div>                
            </li>
        </ul>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'	
import { lists } from './../../data/jigoulist'
interface List{
        id:number,
        fullName: string,
        name: string,
        leader:string,
        des: string,
        classify:[],
        average:number,
        averageClass:{
            good:number,
            middle:number,
            low:number
        },
        comment:number,
        teacherNum:number,
        address:string,
        addressId:string,
        contact:{
            ph:string,
            email:string,
            weChat:string,
            qq:string
        },
        course:[],
        edgImgs:[],
        edgVideos:[]
}
@Component
export default class list extends Vue {
    wayPingfen:string ='up';
    wayPerNum:string = 'up';    
    list:List[] = [];
    mounted() {       
        (this as any).list = lists
    }
    sortByKey(array, key, updown) {
        return array.sort(function(a, b) {
            var x = a[key]
            var y = b[key]
            if (updown == 'up') {
                return (x < y) ? -1 : ((x > y) ? 1 : 0)
            }

            if (updown == 'down') {
                return (x < y) ? 1 : ((x > y) ? -1 : 0)
            }  
        })
    }
    buyPingfen() {
        const list = this.list 
        const wayPingfen = this.wayPingfen === 'up' ? 'down' : 'up'
        this.list = this.sortByKey(list, 'average', wayPingfen)
        this.wayPingfen = wayPingfen
    }
    buyPerNum() {
        const list = this.list 
        const wayPerNum = this.wayPerNum === 'up' ? 'down' : 'up'
        this.list = this.sortByKey(list, 'comment', wayPerNum)
        this.wayPerNum = wayPerNum
    }
}
</script>
<style lang="scss" scoped>
.list-waper{
    padding-top:1rem;
}
.fitter{
    background: #fff;
    position: fixed;
    width: 100%;
    height: .8rem;
    align-items: center;
    display: flex;
    top:0;
    z-index: 1;
    span{
        display: block;
        padding: 0 .1rem;
    }
}
.item-box{
    background: #fff;    
    width: 7.2rem;
    margin: 0 auto .2rem;
    padding: .2rem;
    position: relative;
    .router{
        position: absolute;
        width: 100%;
        height: 100%;
        top:0;
        left: 0;
    }
}
.top{
    display: flex;
    img{
        width:2.5rem;
        height: 1.5rem;
    }
    
}
.right{
    padding-left:.1rem;
    h3{
        font-size: 16px;
        color:#000;
        font-weight: bold;
    }
}
</style>
