import * as S from './styles'

export type Props = {
  ativo?: boolean
  counter: number
  subs: string
}
const FiltroCard = ({ ativo, counter, subs }: Props) => (
  <S.Card ativo={ativo}>
    <S.Counter>{counter}</S.Counter>
    <S.Label>{subs}</S.Label>
  </S.Card>
)

export default FiltroCard
