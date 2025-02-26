import styled from 'styled-components'

type Props = {
  $ativo: boolean
}

export const Card = styled.div<Props>`
  padding: 8px;
  border: 1px solid ${(props) => (props.$ativo ? '#1e90ff' : '#a1a1a1')};
  background-color: ${(props) => (props.$ativo ? '#fff' : '#fcfcfc')};
  color: ${(props) => (props.$ativo ? '#1e90ff' : '#5e5e5e')};
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #1e90ff15;
  }
`
export const Counter = styled.span`
  display: block;
  font-size: 24px;
  font-weight: bold;
`
export const Label = styled.div`
  font-size: 14px;
`
