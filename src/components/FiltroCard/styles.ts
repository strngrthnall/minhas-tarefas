import styled from 'styled-components'
import variables from '../../styles/variables'

type Props = {
  active: boolean
}

export const Card = styled.div<Props>`
  padding: 8px;
  border: solid 1px
    ${(props) => (props.active ? `${variables.blue}` : `${variables.grey}`)};
  border-radius: 8px;
  background-color: ${(props) => (props.active ? '#ffffff' : '#fcfcfc')};
  color: ${(props) =>
    props.active ? `${variables.blue}` : `${variables.grey}`};
  cursor: pointer;
`

export const Contador = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
`

export const Label = styled.span`
  font-size: 14px;
`
