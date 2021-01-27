
<template>
  <div class="CreateBoardModal">
    <!-- Modal -->
    <div class="modal fade"
         id="createBoardModal"
         tabindex="-1"
         role="dialog"
         aria-labelledby="exampleModalCenterTitle"
         aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">
              Create New Board
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="createBoard">
              <div class="form-group">
                <input type="text"
                       name="title"
                       class="form-control"
                       placeholder="Title..."
                       v-model="state.newBoard.title"
                >
                <div
                  class="modal-footer"
                >
                  <button type="submit" class="btn btn-secondary">
                    Create
                  </button>
                </div>
              </div>
            </form>
          </div>
          <button type="button" class="btn btn-danger" data-dismiss="modal">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from 'vue'
import { boardService } from '../services/BoardService'
import { logger } from '../utils/Logger'
import { useRouter } from 'vue-router'
import { AppState } from '../AppState'
export default {
  name: 'CreateBoardModal',

  setup() {
    const router = useRouter()
    const state = reactive({
      newBoard: {},
      user: computed(() => AppState.user)
    })
    return {
      state,
      boards: computed(() => AppState.boards),

      async createBoard() {
        try {
          const id = await boardService.create(state.newBoard)
          state.newBoard = {}
          router.push({ name: 'BoardPage', params: { id } })
        } catch (error) {
          logger.error(error)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
