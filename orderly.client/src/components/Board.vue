<template>
  <div class="Board">
    <div class="card m-2">
      <div class="card-body bg-dark">
        <i class="fas fa-times text-danger my-2 cursorChange" @click="deleteBoard()"></i>
        <router-link :to="{name: 'Board', params: {id: boardProp.id}}">
          <h4 class="card-title text-primary">
            {{ boardProp.title }}
          </h4>
        </router-link>
        <p class="card-text text-secondary">
          {{ boardProp.createdAt }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from 'vue'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { boardService } from '../services/BoardService'
// import { useRoute } from 'vue-router'
export default {
  name: 'Board',
  props: {
    boardProp: { type: Object, required: true }
  },
  setup(props) {
    // const route = useRoute()
    const state = reactive({
      account: computed(() => AppState.account),
      user: computed(() => AppState.user),
      boards: computed(() => AppState.boards)
    })
    return {
      state,

      async deleteBoard() {
        try {
          await boardService.deleteBoard(props.boardProp.id)
        } catch (error) {
          logger.error(error)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.cursorChange:hover{
  cursor:pointer;
}
</style>
