<template>
  <li class="text-dark">
    This is a task
  </li>
</template>

<script>

export default {
  name: 'Task',
  props: {
    taskProp: { type: Object, required: true }
  }
}
</script>

<style lang="scss" scoped>

</style>
