import request from '@/utils/request';

// 获取首页品牌列表
export let nashuju = ()=>{
    return request('/v2-car-getInfoAndListById.html')
}