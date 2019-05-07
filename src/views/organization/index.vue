<template>
  <div class="box">
    <div class="left">
      <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group>
      <el-menu
        default-active="1-4-1"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-menu-item v-for="route in headerRoutes" :key="route.path">
          <i class="el-icon-menu" />
          <router-link :to="route.path">{{ route.name }}</router-link>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Organization',
  data() {
    return {
      isCollapse: false
    }
  },
  computed: {
    headerRoutes() {
      debugger
      const routers = this.$router.options.routes
      const route = this.$route
      const header = routers
        .filter(item => item.name === 'header')[0]
        .children.map(v => ({ ...v, path: '/' + v.path }))
      return header
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  display: flex;
}
.left {
  width: 210px;
}
</style>
