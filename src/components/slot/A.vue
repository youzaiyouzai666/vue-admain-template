<template>
  <div>
    A
    <slot />
  </div>
</template>

<script>
export default {
  name: 'A',
  mounted() {
    console.log(this)
  }
}
</script>

<style lang="scss" scoped>
</style>
