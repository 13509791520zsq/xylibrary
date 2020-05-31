<template>
  <div class="return">
    <el-form :inline="true" :model="formInline" class="demo-form-inline returnbook">
      <el-form-item label="书籍id">
        <el-input v-model="formInline.id" placeholder="书籍id"></el-input>
      </el-form-item>
     
      <el-form-item>
        <el-button type="primary" @click="onSubmit2">查询</el-button>
        <el-button type="danger" @click="onSubmit">归还</el-button>
      </el-form-item>
    </el-form>

    <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="bookname"
      label="书名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="bookid"
      label="书籍id"
      width="180">
    </el-table-column>
    <el-table-column
      prop="date"
      label="借书日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="overtime"
      label="超时时间">
    </el-table-column>
    <el-table-column
    prop="money"
    label="超时费用">
  </el-table-column>
  </el-table>
  </div>
</template>
<script>
  export default{
    name: 'return',
    data() {
      return {
        formInline: {
          id: ''
        },
        tableData: []
      }
    },
    methods: {
      onSubmit() {
        this.$axios.post('/apia/books/returnbook',this.formInline)
                    .then(res=>{
                      if(res.status==200){
                        this.$message({
                          type: 'successs',
                          message: res.data.message
                        })
                      }
                    })
      },
      onSubmit2() {
        this.$axios.post('/apia/books/querybookborrow',this.formInline)
                    .then(res=>{
                      if(res.status==200){
                        this.tableData = req.data
                        this.tableData[0].money = this.tableData[0].overtime*0.1
                      }
                    })
      }
    }
  }
</script>
<style scoped>
.return{
  width: 100%;
  height: 100%;
  background-color: rgb(235, 229, 221); 
  overflow: hidden;
}
.return .returnbook{
  margin-top: 10%;
}
</style>