<template>
  <router-link :to="{name: 'Board', params: {id: boardProp.id}}">
    <div class="Board">
      <div class="card m-2">
        <div class="card-body bg-dark">
          <h4 class="card-title text-primary">
            {{ boardProp.title }}
          </h4>
          <p class="card-text text-secondary">
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
