<template>
  <div class="dashboard-container">
    1234566677777
    <div class="dashboard-text">name: {{ name }}</div>
    <el-button type="success" round @click='getAjax(name)'>成功按钮</el-button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import getAdd from '@/api/add'
export default {
  name: 'Addchildren',
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  methods:{
    getAjax(name){
        getAdd({name:name}).then((data)=>{
          console.log(data)
        }).catch((data)=>{
          console.log(data)
        })
    }

  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
