import {nashuju} from '@/services/index'

const state = {
    list: []
}

const mutations = {
    updateList(state, payload){
        state.list = payload;
    }
}

const actions = {
    async  nashuju({commit}, payload){
        let res = await nashuju({cityId:201,carId:138648});
        console.log('res...', res.data);
        commit('updateList', res.data);
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}