<template>
    <div>我是城市
        {{list}}
    </div>

</template>

<script> 
  import {mapState,mapActions} from "vuex"


export default {
      created(){
          this.nashu()
      },
      computed:{
          ...mapState({
              list:state=>state.City.list
          })

      },
      methods:{
          ...mapActions({
               nashu:"City/getlist" //City数据库下的nacity方法名
          })
         
      }
}

</script>

<style>

</style>