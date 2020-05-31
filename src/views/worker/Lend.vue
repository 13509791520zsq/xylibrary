<template>
  <div class="lend">
    <el-form :inline="true" :model="studentinfo" class="demo-form-inline forma">
      <el-form-item label="饭卡号">
        <el-input v-model="studentinfo.cardid" placeholder="饭卡号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <el-form :inline="true" :model="borrows" class="demo-form-inline formb">
      <el-form-item label="姓名">
        <el-input v-model="borrows.name" placeholder="姓名"></el-input>
      </el-form-item>
      <el-form-item label="饭卡号">
        <el-input v-model="borrows.cardid" placeholder="饭卡号"></el-input>
      </el-form-item>
      <el-form-item label="书籍id">
        <el-input v-model="borrows.bookid" placeholder="书籍id"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit2">借出</el-button>
      </el-form-item>
    </el-form>

    <el-table
    class="tablediv"
    :data="tabledata"
    border
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="bookname"
      label="书名">
    </el-table-column>
    <el-table-column
      prop="library"
      label="书库">
    </el-table-column>
    <el-table-column
      prop="category"
      label="类型">
    </el-table-column>
  </el-table>


  </div>
</template>
<script>
  export default{
    name: 'lend',
    data() {
      return {
        studentinfo: {
          cardid: ''
        },
        borrows: {
          bookid: '',
          name: '',
          carid: ''
        },
        tabledata: []
      }
    },
    methods: {
      onSubmit() {
        this.$axios.post('/apia/users/queryinfo',this.studentinfo)
                    .then(res=>{
                      if(res.status==200){
                        this.borrows.name = res.data.name
                        this.borrows.cardid = res.data.cardid
                      }else if(res.status==404){
                        this.$message({
                          type: 'error',
                          message: res.data.message
                        })
                      }
                    })
      },
      onSubmit2() {
        this.$axios.post('/apia/books/borrowbooks',this.borrows)
                    .then(res=>{
                      if(res.status==200){
                        console.log(res.data)
                        this.tabledata = res.data
                      }else if(res.status==400){
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
.lend{
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgb(235, 229, 221);
}
.forma,.formb,.tablediv{
  margin-top: 10%;
}


</style>