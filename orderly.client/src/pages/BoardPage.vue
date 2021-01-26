// <template>
  //   <div class="BoardPage" v-if="board.id">
    //     <h1> This is the Board Page </h1>
    //
  </div>
  //
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

</style>
