<template>
  <div class="home flex-grow-1 d-flex justify-content-center bg-dark">
    <div class="row ml-2 mr-auto my-2">
      <div class="col">
        <button type="button" class="btn btn-outline-primary" data-toggle="modal" data-target="#createBoardModal">
          <b>+ New Board</b>
        </button>
        <CreateBoardModal />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <Board v-for="board in state.boards" :key="board.id" :board-prop="board" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive, onMounted } from 'vue'
import { boardService } from '../services/BoardService'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'

export default {
  name: 'Home',
  setup() {
    const state = reactive({
      newBoard: {},
      boards: computed(() => AppState.boards),
      user: computed(() => AppState.user)
    })
    onMounted(async() => {
      try {
        await boardService.getBoards()
      } catch (error) {
        logger.error(error)
      }
    })
    return {
      state,
      boards: computed(() => AppState.boards)

    }
  }
}
</script>
