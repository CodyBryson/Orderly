<template>
  <div class="List col-4">
    <div class="card m-2">
      <div class="card-body bg-light">
        <h4 class="card-title text-dark text-center">
          <u>{{ listProp.title }}</u>
        </h4>
        <ul>
          <!-- <Task v-for="task in state.tasks" :key="task.id" :task-prop="task" /> -->
        </ul>
      </div>
      <form class="form-inline bg-light">
        <div class="form-group">
          <input type="text"
                 name="createList"
                 id="createList"
                 class="form-control"
                 placeholder="Add a task..."
                 aria-describedby="helpId"
          >
        </div>
        <button type="submit" class="btn btn-secondary m-1">
          Create Task
        </button>
      </form>
      <div class="d-flex display-block bg-light">
        <button class="btn btn-danger ml-auto" v-if="state.account.id == listProp.creatorId" @click="deleteList()">
          Delete List
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from 'vue'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { listService } from '../services/ListService'
// import { useRoute } from 'vue-router'
export default {
  name: 'List',
  props: {
    listProp: { type: Object, required: true }
  },
  setup(props) {
    // const route = useRoute()
    const state = reactive({
      account: computed(() => AppState.account),
      user: computed(() => AppState.user)
    })
    return {
      state,

      async deleteList() {
        try {
          await listService.deleteList(props.listProp.id)
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
