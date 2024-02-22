import styled from 'styled-components'
import variables from '../../styles/variables'

export const Container = styled.main`
  padding: 0 40px;
  height: 100svh;
  overflow-y: scroll;
  background-color: ${variables.white};
`

export const Result = styled.p`
  display: block;
  margin-top: 32px;
  margin-bottom: 32px;
  font-size: 18px;
  font-weight: bold;
`
