<template>
  <div class="selfinfo">
    <div class="info">
      <div class="username">姓名: {{name}}</div>
      <div class="no">学号: {{No}}</div>
    </div>
      <el-button type="primary" @click.native='quit' class="quitbtn">退出登录</el-button>

    <div class="editpassword">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="原密码">
          <el-input v-model="formInline.password" placeholder="原密码"></el-input>
        </el-form-item>
        <el-form-item label="新密码">
          <el-input v-model="formInline.newpassword" placeholder="新密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">修改密码</el-button>
        </el-form-item>
      </el-form>
    </div>

  </div>
</template>
<script>
  export default{
    name: 'selfinfo',
    data(){
      return{
        formInline: {
          password: '',
          newpassword: ''
        }
      }
    },
    computed:{
      name(){
        return this.$store.getters.user.name
      },
      No(){
        return this.$store.getters.user.No
      }
    },
    methods: {
      onSubmit() {
        this.$axios.post('/apia/users/editpassword',this.formInline)
                    .then(res=>{
                      if(res.status==200){
                        this.$message({
                          type: 'success',
                          message: res.data.message
                        })
                      }else if(res.status==400){
                        this.$message({
                          type: 'error',
                          message: res.data.message
                        })
                      }
                    })
      },
      quit(){
        localStorage.removeItem('eleToken')
        this.$router.go('/login')
      }
    },
    component: {

    }
  }
</script>
<style scoped>
.selfinfo{
  width: 100%;
  height: 100%;
  background-color: whitesmoke;
}
.info{
  width: 50%;
  height: 50%;
  position: relative;
  top: 15%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.no,
.identity,
.username{
  font-size: large;
  font-weight: bolder;
  font-family: Arial, Helvetica, sans-serif;
  color: #000;
  margin-top: 20px;
  text-align: left;
}
.editpassword{
  position:absolute;
  bottom: 10px;
  height:   80px;
  width: 100%;

}
.quitbtn{
  position: absolute;
  top: 10px;
  right: 10px;
}

</style>