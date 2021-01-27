<template>
  <div class="List col-4">
    <div class="card m-2">
      <div class="card-body bg-light">
        <h4 class="card-title text-dark text-center">
          <u>{{ listProp.title }}</u>
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
    listProp: { type: Object, required: true }
  }
}
</script>

<style lang="scss" scoped>

</style>
