<template>
    <div class="waper">
        
        
        <lay :titleName="'首页'"> 
            <!-- <div slot="centent" class="center">
1
            </div> -->
        </lay>
        <!-- banner -->
        <!-- 热门机构 -->
        <!-- 热门评论 -->
        <!-- 最新评论 -->
        
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'	
import lay from './../components/lay-top-to-bottom.vue'
@Component({
    components:{       
        lay
    }
})
export default class list extends Vue {
   
    mounted() {       
        // (this as any).list = lists
    }
}
</script>
<style lang="scss" scoped>

</style>
