<template>
  <div class="bookentry">
    <div class="formdata">
      <el-form :model="bookinfo" :rules="rules2" ref="bookinfo" label-width="5  rem" class="demo-ruleForm formdiv">
  
        <el-form-item label="书名" prop='name' style="max-width: 100%;">
          <el-input v-model="bookinfo.name" placeholder='请输入书名'></el-input>
        </el-form-item>
        <el-form-item label="作者" prop='author' style="max-width: 100%;">
          <el-input v-model="bookinfo.author" placeholder='请输入作者'></el-input>
        </el-form-item>
        <el-form-item label="出版时间" prop="date" style="max-width: 100%;">
              <el-date-picker type="date" placeholder="选择日期" v-model="bookinfo.date" style="width: 100%;"></el-date-picker>
        </el-form-item>

        <el-form-item label="书库" prop="library" style="max-width: 100%;">
          <el-select v-model="bookinfo.library" placeholder="请选择书库">
            <el-option label="第一书库" value="第一书库"></el-option>
            <el-option label="第二书库" value="第二书库"></el-option>
            <el-option label="第三书库" value="第三书库"></el-option>
            <el-option label="第四书库" value="第四书库"></el-option>
            <el-option label="第五书库" value="第五书库"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="类别" prop="category">
          <el-select v-model="bookinfo.category" placeholder="请选择类别">
            <el-option label="科技类" value="科技类"></el-option>
            <el-option label="文学类" value="文学类"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="btn">
          <el-button type="primary" @click="submitForm('bookinfo')">录入</el-button>
          <el-button @click="resetForm('bookinfo')">  重置  </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
  export default{
    name: 'bookentry',
    data() {
      return {
        bookinfo: {
          name: '',
          author: '',
          date: '',
          library: '',
          category: ''
        },
        rules2: {
          name: [
              { required: true, message: '请输入书名', trigger: 'blur' },
            ],
            author: [
              { required: true, message: '请输入作者', trigger: 'blur' },
            ],
            date: [
              { required: true, message: '请选择时间', trigger: 'blur' },
            ],
            library: [
              { required: true, message: '请选择书库', trigger: 'blur' }
            ],
            category: [
              { required: true, message: '请选择类别', trigger: 'blur' }
            ]
        }

      }
    },
    methods: {
      submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              this.$axios.post('/apia/books/entrybooks',this.bookinfo)
                    .then(res=>{
                      if(res.status==200){
                        this.$message({
                          message: res.data.message,
                          type: 'success'
                        })
                        resetForm(this.bookinfo)
                      }else{
                        this.$message({
                          message: '录入出错',
                          type: 'error'
                        })
                      }
                    })
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        }
    }
  }
</script>
<style scoped>
.bookentry{
  width: 100%;
  height: 100%;
  background-color: rgb(235, 229, 221);
}
.formdata{
  width: 40%;
  margin: 0 auto;
  padding-top: 20px;

}
</style>