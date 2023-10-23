import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../components/FiltroCard'
import * as enums from '../../utils/enums/Tarefa'
import * as S from './styles'
import { Button, Campo } from '../../styles/index'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'
import { useNavigate } from 'react-router-dom'

type Props = {
  mostrarFiltros: boolean
}

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const disptach = useDispatch()
  const navigate = useNavigate()

  const voltarALista = () => {
    navigate('/')
  }

  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        {mostrarFiltros ? (
          <>
            <Campo
              type="text"
              placeholder="Buscar"
              value={termo}
              onChange={(evento) => disptach(alterarTermo(evento.target.value))}
            />
            <S.Filtros>
              <FiltroCard
                valor={enums.Status.PENDENTE}
                criterio="status"
                subs="pendentes"
              />
              <FiltroCard
                valor={enums.Status.CONCLUIDO}
                criterio="status"
                subs="concluídas"
              />
              <FiltroCard
                valor={enums.Prioridade.URGENTE}
                criterio="prioridade"
                subs="urgentes"
              />
              <FiltroCard
                valor={enums.Prioridade.IMPORTANTE}
                criterio="prioridade"
                subs="importante"
              />
              <FiltroCard
                valor={enums.Prioridade.NORMAL}
                criterio="prioridade"
                subs="normal"
              />
              <FiltroCard criterio="todas" subs="todas" />
            </S.Filtros>
          </>
        ) : (
          <Button onClick={voltarALista}>Voltar à lista de tarefas</Button>
        )}
      </div>
    </S.Aside>
  )
}
export default BarraLateral
