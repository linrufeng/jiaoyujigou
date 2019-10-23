import axios from 'axios';
export default async function(option){
       let params = {
            method:option.type,
            url:option.url,
            withCredentials:true           
       }
       //     
       if(option.type==='get'){
        params = Object.assign(params,{ params:option.data})
       }else{
        params = Object.assign(params,{ data:option.data})
       }
       // 获取    
       let res =  await axios(params)
       return res;
}