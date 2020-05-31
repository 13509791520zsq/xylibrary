<template>
  <div class="booksquery">
    <el-form :inline="true" :model="bookform" class="demo-form-inline queryinfo">
      <el-form-item >
        <el-input v-model="bookform.user" placeholder="书籍名称"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="bookform.author" placeholder="作者"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="bookform.category" placeholder="类型"></el-input>
      </el-form-item>
      <el-form-item>
        <el-select v-model="bookform.library" placeholder="书库">
          <el-option label="第一书库" value="第一书库"></el-option>
          <el-option label="第二书库" value="第二书库"></el-option>
          <el-option label="第三书库" value="第三书库"></el-option>
          <el-option label="第四书库" value="第四书库"></el-option>
          <el-option label="第五书库" value="第五书库"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>

    <el-table
    :data="bookdata"
    height='50%'
    max-height='70%'
    border
    class="datatable"
    :header-cell-style="{background:'#eef1f6',color:'#606266'}"
    style="width: 100%">
      <el-table-column
        type="index"
        label="序号"
        width="100"
        align='center'>
      </el-table-column>
      <el-table-column
        prop="date"
        label="出版日期"
        width="180"
        align='center'>
      </el-table-column>
      <el-table-column
        prop="name"
        label="名称"
        width="180"
        align='center'>
      </el-table-column>
      <el-table-column
        prop="author"
        label="作者"
        width="180"
        align='center'>
      </el-table-column>
      <el-table-column
        prop="library"
        label="书库"
        width="100"
        align='center'>
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态"
        width="160"
        align='center'>
      </el-table-column>
      <el-table-column
        prop="category"
        label="类别"
        width="160"
        align='center'>
      </el-table-column>
    </el-table>


  </div>
</template>
<script>
  export default{
    name: 'booksquery',
    data() {
      return {
        bookform: {
          name: '',
          author: '',
          category: '',
          library: ''
        },
        bookdata: []
      }
    },
    methods: {
      onSubmit() {
        this.$axios.post('/apia/books/querybooks',this.bookform)
                    .then(res=>{
                      if(res.status==200){
                        this.bookdata = res.data
                      }else{
                        this.$message({
                          message: '查询错误',
                          type: 'error'
                        })
                      }
                    })
      }
    }
  }
</script>
<style scoped>
.booksquery{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.queryinfo {
  width: 100%;
  height: 20%;
  margin-top: 5%;
}
.datatable{
  width: 100%;
  height: 70%;

}

</style>
