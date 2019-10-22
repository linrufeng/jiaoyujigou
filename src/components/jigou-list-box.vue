<template>
    <div class="">
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
                    <p>
                        <span>评分： {{item.average}}分</span> 
                        <span>评论人数:{{item.comment}}</span>
                    </p>
                    <p>
                        <span>好评：{{item.averageClass.good}}</span>
                        <span>中评：{{item.averageClass.middle}}</span>
                        <span>差评：{{item.averageClass.low}}</span>
                    </p>
                </div>                
            </li>
        </ul>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'	
@Component({
    props: {
        list: Array
    }
})
export default class listJigou extends Vue {
}
</script>
<style lang="scss" scoped>
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