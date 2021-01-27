<template>
  <div class="BoardPage d-flex flex-column flex-grow-1 bg-dark" v-if="board.id">
    <h1 class="customFont text-primary m-2">
      <u>{{ board.title }}</u>
    </h1>
    <form class="form-inline" @submit.prevent="createList">
      <div class="form-group">
        <input type="text"
               name="createList"
               id="createList"
               class="form-control"
               placeholder="List Name..."
               aria-describedby="helpId"
               v-model="state.newList.title"
        >
      </div>
      <button type="submit" class="btn btn-secondary mx-1">
        Create List
      </button>
    </form>
    <div class="row flex-row">
      <List v-for="list in state.lists" :key="list.id" :list-prop="list" />
    </div>
  </div>
</template>

<script>
import { reactive, computed, onMounted } from 'vue'
import { listService } from '../services/ListService'
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
      newList: {},
      lists: computed(() => AppState.lists),
      tasks: computed(() => AppState.tasks),
      loaded: false
    })
    onMounted(async() => {
      try {
        await boardService.getOne(route.params.id)
        await listService.getLists(route.params.id)
      } catch (error) {
        logger.error(error)
      } finally {
        state.loaded = true
      }
    })
    return {
      state,
      board: computed(() => AppState.activeBoard),

      async createList() {
        try {
          await listService.create(state.newList)
        } catch (error) {
          logger.error(error)
        }
      }

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
