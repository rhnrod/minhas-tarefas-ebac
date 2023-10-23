import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'
const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`
export const Titulo = styled.h2`
  display: block;
  margin: 40px 0;
  font-size: 18px;
`

export const Campo = styled.input`
  padding: 8px;
  width: 100%;
  font-weight: bold;
  background-color: #fff;
  color: #666;
  border-color: #666;
  border-radius: 8px;
`

export const Button = styled.button`
  padding: 8px 12px;
  margin-right: 8px;
  font-size: 12px;
  font-weight: bold;

  background-color: #2f3640;
  color: #fff;

  border: none;
  border-radius: 8px;
  cursor: pointer;
`

export const ButtonSave = styled(Button)`
  background-color: ${variaveis.verde};
`

export const ButtonCancelRemove = styled(Button)`
  background-color: ${variaveis.vermelho};
`
export default EstiloGlobal
