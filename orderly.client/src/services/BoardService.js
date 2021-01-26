/* eslint-disable no-console */
import { AppState } from '../AppState'
import { api } from './AxiosService'

class BoardService {
  async getBoards() {
    const res = await api.get('api/boards/')
    console.log(res)
    AppState.boards = res.data
  }

  async getOne(id) {
    const res = await api.get(`api/boards/${id}`)
    AppState.activeBoard = res.data
  }

  async create(board) {
    console.log(board)
    const res = await api.post('api/boards', board)
    console.log(res.data)
    AppState.boards.push(res.data)
    return res.data.id
  }
}
export const boardService = new BoardService()
