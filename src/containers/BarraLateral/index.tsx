import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'

const BarraLateral = () => {
  const disptach = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        <S.Campo
          type="text"
          placeholder="Buscar"
          value={termo}
          onChange={(evento) => disptach(alterarTermo(evento.target.value))}
        />
        <S.Filtros>
          <FiltroCard subs="pendentes" counter={0} />
          <FiltroCard subs="concluídas" counter={0} />
          <FiltroCard subs="urgentes" counter={0} />
          <FiltroCard subs="importantes" counter={0} />
          <FiltroCard subs="normal" counter={0} />
          <FiltroCard subs="todas" counter={0} $ativo={true} />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}
export default BarraLateral
