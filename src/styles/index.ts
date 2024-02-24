import styled, { createGlobalStyle } from 'styled-components'

import variables from './variables'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  textarea:focus, input:focus {
    outline: 1px solid ${variables.dark};
  }

`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100svh;
  overflow-y: scroll;
  background-color: ${variables.white};
`

export const Title = styled.h2`
  display: block;
  margin-top: 32px;
  margin-bottom: 32px;
  font-size: 18px;
  font-weight: bold;
`

export const Field = styled.input`
  padding: 8px;
  background-color: #ffffff;
  border-radius: 8px;
  border: 1px solid ${variables.grey};
  font-weight: bold;
  color: ${variables.grey};
  width: 100%;
`

export const Button = styled.button`
  color: #ffffff;
  font-weight: bold;
  font-size: 12px;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variables.dark};
  border-radius: 8px;
  margin-right: 8px;
`

export const SaveButton = styled(Button)`
  background-color: ${variables.green};
`

export default GlobalStyle
