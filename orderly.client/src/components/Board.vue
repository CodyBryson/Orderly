<template>
  <router-link :to="{name: 'Board', params: {id: boardProp.id}}">
    <div class="Board">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">
            {{ boardProp.title }}
          </h4>
          <p class="card-text">
            {{ boardProp.createdAt }}
          </p>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>

export default {
  name: 'Board',
  props: {
    boardProp: { type: Object, required: true }
  }
}
</script>

<style lang="scss" scoped>

</style>
