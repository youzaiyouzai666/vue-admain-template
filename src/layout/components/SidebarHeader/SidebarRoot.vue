<template>
  <el-menu
    class="el-menu-demo"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    @select="handleSelect"
  >
    <!-- <router-link
      v-for="route in headerRoutes"
      :key="route.path"
      tag="li"
      to="router.path"
      :item="route"
      :base-path="route.path"
    >
      <el-menu-item>{{ route.name }}</el-menu-item>
    </router-link>-->
    <el-menu-item v-for="route in headerRoutes" :key="route.path">
      <router-link :to="route.path">{{ route.name }}</router-link>
    </el-menu-item>
  </el-menu>
</template>
<script>
export default {
  name: 'SidebarRoot',
  props: {},
  computed: {
    headerRoutes() {
      const routers = this.$router.options.routes
      const header = routers
        .filter(item => item.name === 'header')[0]
        .children.map(v => ({ ...v, path: '/' + v.path }))
      return header
    }
  },
  methods: {
    handleSelect() {}
  }
}
</script>
