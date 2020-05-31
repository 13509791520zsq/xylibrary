<template>
  <div class="userdelete">
    <h1>删除用户信息</h1>
    <el-form :inline="true" :model="formInline" class="demo-form-inline delform">
      <el-form-item label="学号">
        <el-input v-model="formInline.No" placeholder="学号"></el-input>
      </el-form-item>
      <el-form-item label="饭卡号">
        <el-input v-model="formInline.cardid" placeholder="饭卡号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="danger" @click="onSubmit">删除</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  export default{
    name: 'userdelete',
    data() {
      return {
        formInline: {
          No: '',
          cardid: ''
        }
      }
    },
    methods: {
      onSubmit() {
        this.$axios.post("/apia/users/deleteuser",this.formInline)
                    .then(res=>{
                      if(res.status==200){
                        this.$message({
                          type: 'success',
                          message: res.data.message
                        })
                      }else if(res.status==400 || res.status==403){
                        this.$message({
                          type: 'error',
                          message: res.data.message
                        })
                      }
                    })
      }
    }
  }
</script>
<style scoped>
.userdelete{
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgb(235, 229, 221);
}
.userdelete h1{
  margin-top: 10%;
  letter-spacing: 0.5rem;
  font-weight: bolder;
  font-size: 42px;

}
.delform{
  width: 100%;
  height: 20%;
  margin-top: 10%;
}
</style>