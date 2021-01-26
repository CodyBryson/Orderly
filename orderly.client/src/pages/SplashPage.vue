<template>
  <div class="splash flex-grow-1 d-flex flex-column align-items-center justify-content-center bg-primary">
    <h1 class="display-1 text-dark customFont">
      Order<mark class="bg-dark text-primary">ly</mark>
    </h1>
    <h1 class="my-5 text-light p-3 rounded d-flex align-items-center">
      <div v-if="state.user.isAuthenticated">
        <router-link :to="{name: 'Home'}">
          <button class="btn-dark text-primary customFont p-2">
            Get Started
          </button>
        </router-link>
      </div>
      <div>
      </div>
    </h1>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'Splash',
  props: {
    boardProp: { type: Object, required: true }
  },
  setup(props) {
    const state = reactive({
      user: computed(() => AppState.user),
      boards: computed(() => AppState.boards),
      account: computed(() => AppState.account)
    })
    return {
      state

    }
  }
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');
.customFont{
  font-family: 'Raleway', sans-serif;
}
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>
