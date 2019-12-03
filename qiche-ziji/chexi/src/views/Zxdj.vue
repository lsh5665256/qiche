<template>
   <div class="wrap">
      <div class="header">
          <p>可向多个商家咨询最低价，商家及时回复</p>
          </div> 
      <div class="main">
          <div class="shang">
              <img src="http://img3.bitautoimg.com/autoalbum/files/20181213/218/0144152186_3.jpg" alt="">
              <div class="shang-right">
                   <p>驭胜S350</p>
                   <p>2018款 2.0T 手自一体 四驱 超豪华版 5座 柴油</p>
              </div>
            
          </div>
          <div class="zhong">个人信息</div>
      </div>
   </div>
</template> 


<script>
import {mapState,mapActions} from "vuex"
export default {
      created(){
          this.nashuju()
      },
      computed:{
          ...mapState({
              list:state=>state.Zxdj.list
          })

      },
      methods:{
          ...mapActions([{
               nashuju:"Zxdj/nashuju"
          }])
         
      }
}
</script>

<style>
   .wrap{
       width:100%;
       height:100%;
   }
   .header{
       width: 100%;
       height:37px;
      background: #79cd92;
      line-height: 37px;
   }
   .header p {
       color: white;
       text-align: center;
   }
   .shang{
       display: flex;
       width:100%;
       height: 50x;

   }
   .shang .shang-right{
       display: flex;
       flex-direction: column;

   }
   .shang .shang-right .p{
       margin-top: 10px;
    
   }
   .zhong{
       width: 100%;
       height: 30px;
       background: #ccc;
       color:#666;
   }
   

</style>