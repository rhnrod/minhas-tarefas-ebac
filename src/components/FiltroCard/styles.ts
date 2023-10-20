import styled from 'styled-components'
import { Props } from '.'

type noCounterAndSubs = Omit<Props, 'counter' | 'subs'>

export const Card = styled.div<noCounterAndSubs>`
  padding: 8px;
  border: 1px solid ${(props) => (props.ativo ? '#1e90ff' : '#a1a1a1')};
  background-color: ${(props) => (props.ativo ? '#fff' : '#fcfcfc')};
  color: ${(props) => (props.ativo ? '#1e90ff' : '#5e5e5e')};
  border-radius: 8px;
`
export const Counter = styled.span`
  display: block;
  font-size: 24px;
  font-weight: bold;
`
export const Label = styled.div`
  font-size: 14px;
`
