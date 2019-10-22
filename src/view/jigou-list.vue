<template>
    <div class="list-waper">      
        <div class="banner">
            <img src="../asset/img/test.jpg" alt="教育机构">
        </div>
        <div class="fitter">
            <span>排名:</span><span @click="buyPingfen">按评分{{wayPingfen}}</span><span @click="buyPerNum">按评论数{{wayPerNum}}</span>
        </div>   
        <jigouList :list="list"/> 
    </div>
</template>
<script lang="ts">
import { lists } from './../../data/jigoulist'
import Vue from 'vue'
import Component from 'vue-class-component'	
import jigouList from './../components/jigou-list-box.vue';
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
@Component({
    components:{
        jigouList,      
    }
})
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
   
}

.banner{
    width: 7.5rem;
    margin:0 auto;
    img{
        width: 7.5rem;
    }
}
.fitter{
    background: #fff;   
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


</style>
