<template>
  <div class="bookdelete">
    <h1>删除书籍信息</h1>
    <el-form :inline="true" :model="formInline" class="demo-form-inline delform">
      <el-form-item label="书籍id">
        <el-input v-model="formInline.id" placeholder="书籍id"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="danger" @click="onSubmit">删除</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  export default{
    name: 'bookdelete',
    data() {
      return {
        formInline: {
          id: ''
        }
      }
    },
    methods: {
      onSubmit() {
        this.$axios.post("/apia/books/deletebooks",this.formInline)
                    .then(res=>{
                      if(res.status==200){
                        this.$message({
                          type: 'success',
                          message: res.data.message
                        })
                      }
                    })
      }
    }
  }
</script>
<style scoped>
.bookdelete{
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgb(235, 229, 221);
}
.bookdelete h1{
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