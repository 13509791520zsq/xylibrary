<template>
  <div class="index">
    <div class="leftmenu">
      <el-menu
      default-active="2"
      class="el-menu-vertical-demo  menu"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router>

      <el-menu-item index="/booksquery">
        <i class="el-icon-menu"></i>
        <span slot="title">书籍查询</span>
      </el-menu-item>
      <el-menu-item index="borrows">
        <i class="el-icon-document"></i>
        <span slot="title">借阅统计</span>
      </el-menu-item>
      <el-menu-item index="selfinfo">
        <i class="el-icon-setting"></i>
        <span slot="title">个人信息</span>
      </el-menu-item>

      <el-submenu index="1" v-if='isworker'>
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>管理员</span>
        </template>
        <el-menu-item-group>
          <template slot="title">借阅管理</template>
          <el-menu-item index="/lend">借书</el-menu-item>
          <el-menu-item index="return">还书</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <template slot="title">借阅统计</template>
          <el-menu-item index="census">借阅统计</el-menu-item>
          <el-menu-item index="overtimecensus">超时统计</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
  
  
  
      <el-submenu index="2" v-if='isroot'>
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>超级管理员</span>
        </template>
        <el-menu-item-group>
          <template slot="title">学生信息</template>
          <el-menu-item index="/userentry">录入</el-menu-item>
          <el-menu-item index="userdelete">删除</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <template slot="title">书籍信息</template>
          <el-menu-item index="bookentry">录入</el-menu-item>
          <el-menu-item index="bookdelete">删除</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

    </el-menu>
    

    </div>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  export default{
    name: 'index',
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    computed:{
      isroot(){
        return this.$store.getters.user.power==3
      },
      isworker(){
        return this.$store.getters.user.power >= 2
      }
    }
  }
</script>
<style scoped>
.index{
  width: 100%;
  height: 100%;
  /* border: 1px red solid; */
}
.leftmenu{
  width: 20%;
  height: 100%;
  float: left;
  overflow:scroll;
}
.leftmenu .menu{
  width: 100%;
  height: 100%;
}
.main{
  float: right;
  width: 80%;
  height: 100%;
}

</style>