import { useDispatch } from 'react-redux'
import { ChangeEvent, useEffect, useState } from 'react'

import { remover, editar, alteraStatus } from '../../store/reducers/tarefas'
import TarefaClass from '../../models/Tarefa'
import { Button, ButtonCancelRemove, ButtonSave } from '../../styles'
import * as S from './styles'
import * as enums from '../../utils/enums/Tarefa'

export type Props = TarefaClass

const Tarefa = ({
  titulo,
  prioridade,
  status,
  descricao: descricaoOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [descricao, setDescricao] = useState('')

  useEffect(() => {
    if (descricaoOriginal.length > 0) {
      setDescricao(descricaoOriginal)
    }
  }, [descricaoOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setDescricao(descricaoOriginal)
  }

  function alteraStatusTarefa(evento: ChangeEvent<HTMLInputElement>) {
    dispatch(
      alteraStatus({
        id,
        finalizado: evento.target.checked
      })
    )
  }

  return (
    <S.Card>
      <label htmlFor={titulo}>
        <input
          type="checkbox"
          id={titulo}
          checked={status === enums.Status.CONCLUIDO}
          onChange={alteraStatusTarefa}
        />
        <S.Title>
          {estaEditando && <em>Editando: </em>}
          {titulo}
        </S.Title>
      </label>
      <S.Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag>
      <S.Description
        disabled={!estaEditando}
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      />
      <S.ActionBar>
        {estaEditando ? (
          <>
            <ButtonSave
              onClick={() => {
                dispatch(
                  editar({
                    titulo,
                    prioridade,
                    status,
                    descricao,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </ButtonSave>
            <ButtonCancelRemove onClick={cancelarEdicao}>
              Cancelar
            </ButtonCancelRemove>
          </>
        ) : (
          <>
            <Button onClick={() => setEstaEditando(true)}>Editar</Button>
            <ButtonCancelRemove onClick={() => dispatch(remover(id))}>
              Remover
            </ButtonCancelRemove>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  )
}

export default Tarefa
