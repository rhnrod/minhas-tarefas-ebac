import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Buscar" />
      <S.Filtros>
        <FiltroCard subs="pendentes" counter={0} />
        <FiltroCard subs="concluídas" counter={0} />
        <FiltroCard subs="urgentes" counter={0} />
        <FiltroCard subs="importantes" counter={0} />
        <FiltroCard subs="normal" counter={0} />
        <FiltroCard subs="todas" counter={0} ativo />
      </S.Filtros>
    </div>
  </S.Aside>
)

export default BarraLateral
