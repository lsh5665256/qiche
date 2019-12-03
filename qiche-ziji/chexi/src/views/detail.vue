<template>
    <div class="detail">
       <div class="main">
            <div class="img">
                <img :src="this.titImg" alt="">
                <span>{{list&&list.pic_group_count}}</span>
          </div>
           <!-- <img src="http://img2.bitautoimg.com/autoalbum/files/20160831/022/12341202292972_5235269_8.jpg" alt=""> -->
           <div class="into">
                <p>{{list.market_attribute&&list.market_attribute.dealer_price}}</p>
                <p>指导价{{list.market_attribute&&list.market_attribute.official_refer_price}}</p>
              
               <div class="flex-row action">
                   <button @click="goPage(list)">询问底价</button>
               </div>
           </div>
           <div class="c-type">
               <span>全部</span>
               <span>2019</span>
           </div>
           <div class="item" v-for="(item, index) in list.list" :key="index">
                <p>{{ item.exhaust_str }}/{{ item.max_power_str }} 涡轮增压</p>
                <ul>
                    <li class="line">
                    <p class="one">{{ item.car_name }}</p>
                    <p class="two">{{ item.trans_type }}</p>
                    <p class="three">
                        <span>指导价{{ item.market_attribute.official_refer_price }}</span>
                        <span>{{ item.market_attribute.dealer_price }}起</span>
                    </p>
                    <button>询问底价</button>
                    </li>
                </ul>
            </div>  
       </div>
       <div class="footer">
           <p>询问底价</p>
           <p>本地经销商为你报价</p> 
       </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            list:[],
            titImg:""
        }
    },
    methods:{
        getList(){
            this.axios.get("https://baojia.chelun.com/v2-car-getInfoAndListById.html", {
            params: { SerialID: this.$route.query.SerialID }
            }).then(res=>{
                console.log(res.data)
                if (res.data.code === 1) {
                    this.titImg = res.data.data.Picture
                    this.list = res.data.data
            
                }
            })
        },
        goPage(id){
            console.log(id.carId	)
            //  this.$router.push({path:'/home',query:{}})   
        }
    },
    created(){
        this.getList()
    }
}
</script>

<style scoped>
.detail{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #f4f4f4;
}
.main{
    width: 100%;
    flex: 1; 
    overflow-x: hidden;
}
.main .into{
    padding: .36rem .2rem .3rem;
    background: #fff;
    position: relative;
    height: 70px;
}
.main .into p:nth-child(2){
    height: 24px;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size:12px ;
    color: silver;
}
.main .into .action button{
    width: 100%;
    height: 100%;
    outline: none;
    border: 0;
    border-radius: 10px;
    background: #00afff;
    color: #fff;
}
.main .into .action{
    padding-top: .2rem;
    -webkit-box-pack: justify;
    justify-content: space-between;
    width: 50%;
    position: absolute;
    right: .1rem;
    top: .22rem;
    height: 50px;
}
.main .into  p:first-child{
    font-size:20px;
    color: red;
    font-weight: 500;
}
.main .c-type span {
    padding-right: .46rem;
    font-size: 17px;
}
.main .c-type{
    border-top: .15rem solid #f4f4f4;
    padding: 0 .3rem;
    font-size: .32rem;
    height: .77rem;
    line-height: .77rem;
    background: #fff;
    margin: 10px 0;
}

.main .img{
    width: 100%;
    height: 200px;
    position: relative;
}
.img img {
  width: 100%;
  height: 100%;
}
.img span {
  position: absolute;
  bottom: 0.15rem;
  right: 0.31rem;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 0.31rem;
  color: #fff;
  padding: 0.15rem;
}
.main .item {
  width: 100%;
  background: #fff;
  margin: 10px 0 10px;
}
.item > p {
  padding: 5px;
  display: flex;
  padding-bottom: 10px;
  justify-content: flex-start;
  align-items: center;
  color: #999;
  font-size: 14px;
  background: #f4f4f4;
}
.item ul {
  width: 100%;
  height: 2.4rem;
}
.item ul .line > .two {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 0.5rem;
  color: #999;
  padding: 0 10px;
}
.item ul .line > .one {
  height: 0.6rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 10px;
}
.item ul .line > .three {
  height: 0.5rem;
  padding: 0 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #999;
}
.item ul .line > .three > span:last-child {
  color: Red;
  margin-left: 10px;
}
.item ul button {
  height: .8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  color: #00afff;
  border: 0;
  width: 100%;
  font-size: 18px;
  background: #fff;
  border-top: 1px solid #ccc;
}
.footer{
    width: 100%;
    background: #3aacff;
    height:50px;
    color: #fff;       
}
.footer p:first-child {
    font-size: 20px;
    font-weight: 500;
    text-align: center;
}
.footer  p:nth-child(2) {
    font-size: 16px;
    text-align: center;
}
</style>