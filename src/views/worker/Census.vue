<template>
  <div class="census">
    <el-form :inline="true" :model="searchinfo" class="demo-form-inline lostform">
      <el-select v-model="searchinfo.library" placeholder="请选择书库">
        <el-option
          v-for="item in librarys"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-select v-model="searchinfo.category" placeholder="请选择类别">
        <el-option
          v-for="item in categorys"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-form-item label="饭卡号">
        <el-input v-model="searchinfo.cardid" placeholder="饭卡号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>

    </el-form>

    


    <el-table
      :data="tableData"
      height='80%'
      max-height="80%"
      border
      style="width: 100%">
      <el-table-column
        type="index"
        label="序号"
        width="180"
        align='center'>
      </el-table-column>

      <el-table-column
        prop="bookname"
        label="书名"
        width="180"
        align='center'>
      </el-table-column>

      <el-table-column
        prop="date"
        label="借阅日期"
        width="220"
        align='center'>
      </el-table-column>
      
      <el-table-column
        prop="name"
        label="姓名"
        width="180"
        align='center'>
      </el-table-column>

      <el-table-column
        prop="overtime"
        label="超时时间"
        width="180"
        align='center'>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
  export default{
    name: 'census',
    data() {
      return {
        librarys: [
          {label: '第一书库',value: '第一书库'},
          {label: '第二书库',value: '第二书库'},
          {label: '第三书库',value: '第三书库'},
          {label: '第四书库',value: '第四书库'},
          {label: '第五书库',value: '第五书库'},

        ],
        categorys: [
          {label: '',value: ''},
          {label: '科技类',value: '科技类'},
          {label: '历史类',value: '历史类'},
          {label: '文学类',value: '文学类'},
          {label: '工具类',value: '工具类'},
          {label: 'IT类',value: 'IT类'},
        ],
        searchinfo: {
          library: '',
          cardid: '',
          category: '',
        },
        tableData: []

      }
    },
    methods: {
      onSubmit() {
          this.$axios.post('/apia/books/censusbooks',this.searchinfo)
                    .then(res=>{
                      if(res.status==200){
                        this.tableData = res.data
                      }
                    })
      }
    }
  }
</script>
<style scoped>
.census{
  width: 100%;
  height: 100%;
  background-color: rgb(235, 229, 221); 
  padding: 2rem;
  overflow: scroll;
}
.lostform{
  width: 100%;
  margin: 0 auto;

}
@media screen and (max-width: 768px){
  .lostquery{
    padding: 0;
  }
  .lostquery el-form-item{
    margin: 0;
    width: 50%;
  }
}

</style>