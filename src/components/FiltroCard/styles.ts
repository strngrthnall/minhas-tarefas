import { Props } from '.'

import styled from 'styled-components'

type PropsSelected = Omit<Props, 'contador' | 'legenda'>

export const Card = styled.div<PropsSelected>`
  padding: 8px;
  border: solid 1px ${(props) => (props.ativo ? '#1e90ff' : '#a1a1a1')};
  border-radius: 8px;
  background-color: ${(props) => (props.ativo ? '#ffffff' : '#fcfcfc')};
  color: ${(props) => (props.ativo ? '#1e90ff' : '#5e5e5e')};
`

export const Contador = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
`

export const Label = styled.span`
  font-size: 14px;
`
