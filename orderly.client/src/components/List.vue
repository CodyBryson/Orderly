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
