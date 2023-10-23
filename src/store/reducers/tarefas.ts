import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

type TarefasState = {
  itens: Tarefa[]
}

const initialState: TarefasState = {
  itens: [
    {
      id: 1,
      titulo: 'Estudar TypeScript',
      descricao: 'Estudar tipagem',
      status: enums.Status.PENDENTE,
      prioridade: enums.Prioridade.IMPORTANTE
    },
    {
      id: 2,
      titulo: 'Estudar Python',
      descricao: 'Responder o exercício de python no módulo 3 da EBAC',
      status: enums.Status.PENDENTE,
      prioridade: enums.Prioridade.NORMAL
    },
    {
      id: 3,
      titulo: 'Estudar estrutura de dados e algoritmos',
      descricao:
        'Ler o livro "Estrutura de dados e algoritmos com Javascript" da Loiane Groner',
      status: enums.Status.PENDENTE,
      prioridade: enums.Prioridade.IMPORTANTE
    },
    {
      id: 4,
      titulo: 'Estudar algoritmos',
      descricao: 'Ler o livro "Entendendo algoritmos" do Adityia Baghava',
      status: enums.Status.CONCLUIDO,
      prioridade: enums.Prioridade.URGENTE
    }
  ]
}

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((tarefa) => tarefa.id !== action.payload)
      ]
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Tarefa, 'id'>>) => {
      const tarefaJaExiste = state.itens.find(
        (tarefa) =>
          tarefa.titulo.toLocaleLowerCase() ===
          action.payload.titulo.toLocaleLowerCase()
      )

      if (tarefaJaExiste) {
        alert('Tarefa já cadastrada.')
      } else {
        const ultimaTarefa = state.itens[state.itens.length - 1]

        const novaTarefa = {
          ...action.payload,
          id: ultimaTarefa ? ultimaTarefa.id + 1 : 1
        }

        state.itens.push(novaTarefa)
      }
    },
    alteraStatus: (
      state,
      action: PayloadAction<{ id: number; finalizado: boolean }>
    ) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa].status = action.payload.finalizado
          ? enums.Status.CONCLUIDO
          : enums.Status.PENDENTE
      }
    }
  }
})

export const { remover, editar, cadastrar, alteraStatus } = tarefasSlice.actions
export default tarefasSlice.reducer
