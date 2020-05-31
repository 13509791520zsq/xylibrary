<template>
<div class="login">
  <label>登录</label>
  <el-form :model="loginform" :rules="rules" ref="loginform" label-width="4rem" class="demo-ruleForm formdiv">
    <el-form-item label="学号" prop ='No''  style="max-width: 100%;">
      <el-input v-model="loginform.No" ></el-input>
    </el-form-item>
    <el-form-item label="密码" prop ='password' style="max-width: 100%;">
      <el-input v-model="loginform.password" type="password"></el-input>
    </el-form-item>
    <el-form-item class="btn">
      <el-button type="primary" @click="submitForm('loginform')">登录</el-button>
      <el-button @click="resetForm('loginform')">重置</el-button>
    </el-form-item>
    <p class="bottomtext"><router-link  to="/forget">忘记密码？</router-link></p>
  </el-form>

  <vue-particles
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="2"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="repulse"
        class="lizibg bgimg"
      >
      </vue-particles>
</div>

</template>
<script>
import jwt_decode from 'jwt-decode'
export default {
  name: 'login',
  data(){
    return{
      loginform: {
        No: '',
        password: ''
      },
      rules: {
          No: [
            { required: true, message: '请输入学号', trigger: 'blur' },
            { min: 12, max: 12, message: '长度为12个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 3, max: 16, message: '长度在 3 到 16 个字符', trigger: 'blur' }
          ]
      }
    }
  },
  methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$axios.post('/apia/users/login',this.loginform)
                       .then(res=>{
                        if(res.status==404){
                          this.$message({
                            type: 'error',
                            message: res.data
                          })
                        }else if(res.status==400){
                          this.$message({
                            type: 'error',
                            message: res.data
                          })
                        }else if(res.status==200){
                          this.$message({
                            type: 'success',
                            message: '登陆成功！'
                          })
                          const {token} = res.data
                          localStorage.setItem('eleToken',token)
                          const decode = jwt_decode(token)
                          this.$store.dispatch('setAuthenticated',!this.isEmpty(decode))
                          this.$store.dispatch('setUser', decode)
                          this.$message({
                              type: 'success',
                              message: '登陆成功'
                            })
                            this.$router.push('/index')
                            console.log(this.$store.getters.user)
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
      },
      isEmpty(value) {
      return ((value === undefined) ||
        (value === null) ||
        (typeof value === 'object' && Object.keys(value).length === 0) ||
        (typeof value === 'string' && value.trim().length === 0))
    }
  }
}
</script>

<style scoped>
.login{
  width: 100vw;
  height: 100vh;

  /* background: url("../../public/images/loginbg.jpg") no-repeat;
  background-size: cover; */
  /* z-index: -1; */
}
label{
  color: darkcyan;
  font-size: 4rem;
  font-weight: bolder;
  display: block;
  width: 10rem;
  height: 5rem;
  margin: 0 auto;
  position: relative;
  top: 10%;
}
.formdiv{
  /* border: 1px solid red; */
  width: 30%;
  height: auto;
  margin: 0 auto;
  position: relative;
  top: 35%;
  transform: translateY(-50%);
  padding: 2rem;
  background-color: rgba(229, 240, 217, 0.7);
  border-radius: 1rem;
  box-shadow: 0px 0px 5px 5px rgb(75, 73, 77);
}
.bottomtext{
    float: right;
    font-size: small;
}
a{
  text-decoration: none;
}
.lizibg{
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-image: url('../assets/loginbg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}
.bgimg{
  background-image: url('../assets/loginbg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -2;
}


@media only screen and (max-width: 768px) {
  label{
    top: 0;
  }

  .formdiv{
    width: 80%;
  }
  .btn button{
    margin: 0.3rem;

  }
}




</style>