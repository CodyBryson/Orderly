<template>
  <div class="BoardPage d-flex flex-grow-1 bg-dark" v-if="board.id">
    <h1 class="customFont text-primary m-2">
      <u>{{ board.title }}</u>
    </h1>
    <div class="col">
      <!--Lists go here-->
    </div>
  </div>
</template>

<script>
import { reactive, computed, onMounted } from 'vue'

import { AppState } from '../AppState'
import { boardService } from '../services/BoardService'
import { useRoute } from 'vue-router'
import { logger } from '../utils/Logger'

export default {
  name: 'BoardPage',
  setup() {
    const route = useRoute()
    const state = reactive({
      user: computed(() => AppState.user),
      activeBoard: computed(() => AppState.activeBoard),
      loaded: false
    })
    onMounted(async() => {
      try {
        await boardService.getOne(route.params.id)
      } catch (error) {
        logger.error(error)
      } finally {
        state.loaded = true
      }
    })
    return {
      state,
      board: computed(() => AppState.activeBoard)

    }
  }

}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');
.customFont{
  font-family: 'Raleway', sans-serif;
}
</style>
