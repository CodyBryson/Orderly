/* eslint-disable no-console */
import { AppState } from '../AppState'
import { api } from './AxiosService'

class ListService {
  async getLists() {
    const res = await api.get('api/lists/')
    console.log(res)
    AppState.lists = res.data
  }

  async getOne(id) {
    const res = await api.get(`api/lists/${id}`)
    AppState.activeList = res.data
  }

  async create(list) {
    console.log(list)
    const res = await api.post('api/lists', list)
    console.log(res.data)
    AppState.lists.push(res.data)
    return res.data.id
  }
}
export const listService = new ListService()
