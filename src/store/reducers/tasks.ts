import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Task from '../../models/Task'
import * as enums from '../../utils/enums/Task'

type TasksState = {
  itens: Task[]
}

const initialState: TasksState = {
  itens: [
    {
      id: 1,
      description: 'Rever exercício do módulo 7',
      priority: enums.Priority.URGENTE,
      status: enums.Status.CONCLUIDA,
      title: 'Estudar JavaScript'
    },
    {
      id: 2,
      description: 'Estudar material de apoio',
      priority: enums.Priority.NORMAL,
      status: enums.Status.PENDENTE,
      title: 'Estudar TypeScript'
    },
    {
      id: 3,
      description: 'Praticar construção de LP',
      priority: enums.Priority.IMPORTANTE,
      status: enums.Status.PENDENTE,
      title: 'Estudar Bootstrap'
    }
  ]
}

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((task) => task.id !== action.payload)
      ]
    },
    edit: (state, action: PayloadAction<Task>) => {
      const taskIndex = state.itens.findIndex((t) => t.id === action.payload.id)
      if (taskIndex >= 0) {
        state.itens[taskIndex] = action.payload
      }
    }
  }
})

export const { remove, edit } = taskSlice.actions

export default taskSlice.reducer
