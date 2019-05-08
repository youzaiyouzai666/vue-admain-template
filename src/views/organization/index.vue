<template>
  <div class="box">
    <SidebarLeft router-parents-path="organization" />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import SidebarLeft from '@/components/SidebarLeft'
export default {
  name: 'Organization',
  components: { SidebarLeft }
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
