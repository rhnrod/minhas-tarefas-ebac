import { useState } from 'react'
import * as S from './styles'

export type Props = {
  titulo: string
  prioridade: string
  status: string
  descricao: string
}

const Tarefa = ({ titulo, prioridade, status, descricao }: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)

  return (
    <S.Card>
      <S.Title>{titulo}</S.Title>
      <S.Tag>{prioridade}</S.Tag>
      <S.Tag>{status}</S.Tag>
      <S.Description value={descricao} />
      <S.ActionBar>
        {estaEditando ? (
          <>
            <S.Button>Salvar</S.Button>
            <S.Button onClick={() => setEstaEditando(false)}>Cancelar</S.Button>
          </>
        ) : (
          <>
            <S.Button onClick={() => setEstaEditando(true)}>Editar</S.Button>
            <S.Button>Remover</S.Button>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  )
}

export default Tarefa
