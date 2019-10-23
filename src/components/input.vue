<template>
<div class="content-box">
    <label  :style="{fontSize:labelFontSize}"><slot/></label>
    <div :style="inputBoxStyle" class="input-box">
        <input  :name="name" v-model="inputVal" :style="inputStyle" :type="typeInput">
        <slot name="icon">
            <div v-if="type==='password'" class="icon-box" @click="changeIcon">
                <img  v-if="show"  src="../asset/img/svg/show.svg" alt="">
                <img v-if="!show"  src="../asset/img/svg/hide.svg" alt="">
            </div>
            
        </slot>
    </div>
</div>
    
</template>
<script>
export default {
    name:'input-box',
    props:{
        name:{
            type:String,
            default:''
        },        
        inputStyle:{
            type:Object,
            default:function(){
                return{}
            }
        },
        inputBoxStyle:{
            type:Object,
            default:function(){
                return {}
            }
        },
        type:{
            type:String,
            default:'text'
        },
        labelFontSize:{
            type:String,
            default:'.3rem'
        },
        reg:{
            type:String,
            default:''
        }
    },
    data(){
        return{
            'typeInput':'',
            regrule:'',
            inputVal:'',
            isright:true,
            show:false
        }
    },
    methods: {
        regRule(val){
            let reg = null;
            switch (val){
                case 'email':
                    reg = /^(?:[a-z0-9]+[_\-+.]+)*[a-z0-9]+@(?:([a-z0-9]+-?)*[a-z0-9]+.)+([a-z]{2,})+$/;
                    break;
                case 'tel':
                    reg = /^(\+86)?\s?0?(13|14|15|18|17)[0-9]{9}$/;
                    break;
                default:
                    reg = null;
                    break;
            }
            return reg;
        },
        changeIcon(){
            this.show = !this.show;
            if(this.show){
                this.typeInput = 'text';
            }else{
                this.typeInput = this.type;
            }
        }
    },
    mounted() {
        let type = this.type;
        // 验证规则
        if(!this.reg){
            this.regrule = this.regRule(type);
        }else{
            this.regrule = this.reg;
        }
        this.typeInput = type
    },
    watch:{
        inputVal:function(val){
            let rule = this.regrule;           
            if(rule){
                this.isright = rule.test(val);
            }
            this.$emit('val',val)
        }
    }
}
</script>
<style lang="scss" scoped>
.content-box{
    display: flex;
    align-items: center;    
}
.input-box{
    display: inline-block;
    box-sizing: border-box;    
    width: 4rem;
    height: .6rem;   
    position: relative;
    input{
        box-sizing: border-box;           
        width: 100%;
        height: 100%;
        margin: 0;
        border:1px solid #ddd;
        border-radius:.6rem;
        padding:.05rem .6rem .05rem .2rem;
    }
    .icon-box{
        position: absolute;
        right: .2rem;
        top:50%;
        transform: translateY(-50%);
        width: .3rem;
        img{
            width: 100%;
        }
    }
}
</style>