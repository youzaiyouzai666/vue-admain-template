<template>
  <div>
    <div>slot</div>
    <A>
      user.firstName:{{ user.firstName }}
      <B :user="user" />
    </A>
  </div>
</template>

<script>
import A from '@/components/slot/A'
import B from '@/components/slot/B'
export default {
  name: 'SlotDemo',
  components: {
    A,
    B
  },
  data() {
    return {
      user: {
        firstName: 'test'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
