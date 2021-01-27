<template>
  <div class="List col-4">
    <div class="card m-2">
      <div class="card-body bg-light">
        <h4 class="card-title text-dark">
          {{ listProp.title }}
        </h4>
        <ul>
        <!--Tasks go here as <li> tags-->
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'List',
  props: {
    boardProp: { type: Object, required: true }
  }
}
</script>

<style lang="scss" scoped>

</style>
