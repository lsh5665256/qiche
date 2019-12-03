<template>
  <div class="wrap">
    <div v-for="(value,key) in obj2" :key="key">
      <p class="a1" :id="key">
        <span>{{key}}</span>
      </p>
      <!-- 这里是锚点链接，锚点猫的是id，既这里的key，是唯一的，在这里ABC -->
      <dl v-for="(item,index) in value" :key="index" @click="tanchu(item.MasterID)">
        <dt>
          <img v-lazy="item.CoverPhoto" alt />
        </dt>
        <dd >{{item.Name}}</dd>
      </dl>
    </div>
    <!-- 右边定位 -->
    <div class="b3">
      <div v-for="(value,key1) in obj2" :key="key1">
        <p>
          <a :href="'#'+key1">{{key1}}</a>
        </p>
      </div>
    </div>

    <!-- 弹出层 -->
    <div class="mask" :class="{active:flag}">
      <div v-for="(item,index) in tarr" :key="index">
        <p class="mp" @click="flag=false">{{item.GroupName}}</p>
        <div v-for="(ite,ind) in item.GroupList" :key="ind" class="mbig" @click="tiao(ite.SerialID)">
          <img :src="ite.Picture" alt class="mimg" />
          <div class="msmall">
            <p>{{ite.AliasName}}</p>
            <p class="zi">{{ite.DealerPrice}}</p>
          </div>
          <div class="line"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [],
      obj2: {},
      flag: false,
      tarr: null
    };
  },

  created() {
    this.axios
      .get("https://baojia.chelun.com/v2-car-getMasterBrandList.html")
      .then(res => {
        this.arr = res.data.data;
        this.fn();
      });
  },
  methods: {
    fn() {
      //处理数据
      let obj = {};
      this.arr.map(item => {
        if (!obj[item.Spelling.slice(0, 1)]) {
          obj[item.Spelling.slice(0, 1)] = [item];
        } else {
          obj[item.Spelling.slice(0, 1)].push(item);
        }
      });
      this.obj2 = obj;
    },
    tanchu(MasterID) {
      this.flag = true;
      this.axios
        .get(
          "https://baojia.chelun.com/v2-car-getMakeListByMasterBrandId.html",
          { params: { MasterID: MasterID } }
        )
        .then(res => {
          console.log(res.data);
          this.tarr = res.data.data;
        });
    },
    tiao(id){
       this.$router.push({path:"/detail",query:{SerialID:id}})
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  box-sizing: border-box;
}
html,
body {
  width: 100%;
}
dl {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  margin-top: 5px;
}
dt > img {
  width: 40px;
  height: 40px;
}

.line {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 2px;
  transform: scale(1,0.5);
  background: #ccc;
}
.a1 {
  width: 100%;
  height: 30px;
  background: #f4f4f4;
  line-height: 30px;
}
.a1 span {
  margin-left: 10px;
}
.b3 {
  position: fixed;
  top: 30%;
  left: 95%;
}
a {
  color: #333;
}
.mask {
  width: 80%;
  height: 100%;
  background: white;
  transform: translateX(100%);
  transition: all 1s ease;
  overflow-y: auto;
}
.mask.active {
  transition: all 1s ease;
  transform: translateX(0%);
  position: fixed;
  top: 0;
  right: 0;
}
.wrap {
  width: 100%;
}
.mp {
  width: 100%;
  height: 30px;
  background: #f4f4f4;
  line-height: 30px;
}
.mimg {
  width: 100px;
  height: 60px;
}
.mbig {
  display: flex;
  position: relative;
}
.zi {
  color: red;
}
</style>