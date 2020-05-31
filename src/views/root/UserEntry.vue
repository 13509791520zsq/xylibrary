<template>
  <div class="userentry">
      <div class="formdata">
        <el-form :model="userinfo" :rules="rules2" ref="userinfo" label-width="5  rem" class="demo-ruleForm formdiv">
    
          <el-form-item label="学号" prop='No' style="max-width: 100%;">
            <el-input v-model="userinfo.No" placeholder='请输入学号'></el-input>
          </el-form-item>
          <el-form-item label="名字" prop='name' style="max-width: 100%;">
            <el-input v-model="userinfo.name" placeholder='请输入名字'></el-input>
          </el-form-item>
          <el-form-item label="身份证号码" prop='numberid' style="max-width: 100%;">
            <el-input v-model="userinfo.numberid" placeholder='请输入身份证号码'></el-input>
          </el-form-item>
          <el-form-item label="饭卡号码" prop='cardid' style="max-width: 100%;">
            <el-input v-model="userinfo.cardid" placeholder='请输入饭卡号码'></el-input>
          </el-form-item>
          <el-form-item label="密码" prop='password' style="max-width: 100%;">
            <el-input v-model="userinfo.password"  placeholder='请输入密码'></el-input>
          </el-form-item>
          <el-form-item class="btn">
            <el-button type="primary" @click="submitForm('userinfo')">录入</el-button>
            <el-button @click="resetForm('userinfo')">  重置  </el-button>
          </el-form-item>
        </el-form>
      </div>
  </div>
</template>
<script>
  export default{
    name: 'userentry',
    data() {
      return {
        userinfo: {
          name: '',
          password: '123456',
          No: '',
          cardid: '',
          numberid: ''
        },
        rules2: {
          name: [
              { required: true, message: '请输入姓名', trigger: 'blur' },
            ],
            password: [
              { required: true, message: '请输入密码', trigger: 'blur' },
            ],
            No: [
              { required: true, message: '请输入学号', trigger: 'blur' },
              { min: 12, max: 12, message: '长度12 个字符', trigger: 'blur' }
            ],
            cardid: [
              { required: true, message: '请输入饭卡号码', trigger: 'blur' }
            ],
            numberid: [
              { required: true, message: '请输入身份证号码', trigger: 'blur' },
              { min: 18, max: 18, message: '长度18个字符', trigger: 'blur' },
            ]
        }

      }
    },
    methods: {
      submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              this.$axios.post('/apia/users/entryusers',this.userinfo)
                    .then(res=>{
                      if(res.status==200){
                        this.$message({
                          message: res.data.message,
                          type: 'success'
                        })
                        resetForm(this.userinfo)
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
.userentry{
  width: 100%;
  height: 100%;
  background-color: rgb(235, 229, 221);
}
.formdata{
  width: 50%;
  margin: 0 auto;
  padding-top: 20px;

}
</style>