import { defineStore } from 'pinia'
import { UserState } from '@/store/user/types'

export const useUserStore = defineStore({
  id: 'user',
  state: (): UserState => ({
    username: 'bobo',
    age: 25
  }),
  getters: {
    doubleAge: (state) => state.age * 2
  },
  actions: {
    agePlus() {
      this.age++
    }
  }
})
