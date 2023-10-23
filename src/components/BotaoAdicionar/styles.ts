import { Link } from 'react-router-dom'
import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Circulo = styled(Link)`
  height: 64px;
  width: 64px;

  font-size: 40px;
  background-color: ${variaveis.verde};
  color: #fff;
  text-decoration: none;

  border-radius: 50%;
  opacity: 0.35;
  position: fixed;
  bottom: 40px;
  right: 40px;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  user-select: none;

  &:hover {
    opacity: 1;
  }
`
