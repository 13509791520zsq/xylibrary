<template>
  <div class="borrows">
    <el-input placeholder="饭卡号" v-model='cardid'></el-input>
    <el-button type='primary' @click='getletters'>搜索</el-button>
    <div class="table">
      <el-table
          :data="tableData"
          height='90%'
          max-height="90%"
          border
          :header-cell-style="{background:'#eef1f6',color:'#606266'}"
          style="width: 100%"
          >
          <el-table-column
            type="index"
            label="序号"
            width="100"
            align='center'>
          </el-table-column>
  
          <el-table-column
            prop="name"
            label="书名"
            width="200"
            align='center'>
          </el-table-column>
          <el-table-column
          prop="library"
          label="书库"
          width="200"
          align='center'>
        </el-table-column>
        <el-table-column
          prop="data"
          label="借阅日期"
          width="200"
          align='center'>
        </el-table-column>
        <el-table-column
          prop="data"
          label="借阅时间"
          width="150"
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

  </div>
</template>
<script>
  export default{
    name: 'borrows',
    data(){
      return{
        cardid: '',
        tableData:[]
      }
    },
    methods:{
      getletters(){
        this.$axios.post('/apia/books/censuspersonalbycardid',{cardid: this.cardid})
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
  .borrows{
    width: 100%;
    height: 100%;
    /* background-color: whitesmoke; */
  }
  .table{
    width: 95%;
    height: 90%;
    position: relative;
    margin: 0 auto;
    top: 10%;
  }
  el-table::-webkit-scrollbar {
  width: 10px;
  height: 0;
}
el-table::-webkit-scrollbar-track{
-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
background-color: rosybrown;
border-radius: 3px;
}
el-table::-webkit-scrollbar-thumb{
border-radius: 7px;
-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
background-color: #E8E8E8;
}
/*定义两端按钮的样式*/
el-table::-webkit-scrollbar-button {
display: none;
}
/*定义右下角汇合处的样式*/
el-table::-webkit-scrollbar-corner {
background:khaki;
}
</style>