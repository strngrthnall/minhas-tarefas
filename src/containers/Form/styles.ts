import styled from 'styled-components'
import variables from '../../styles/variables'

export const Form = styled.form`
  max-width: 547px;
  width: 100%;
  font-weight: bold;
  font-size: 14px;
  color: ${variables.dark};

  textarea {
    resize: none;
    margin: 16px 0;
  }
`

export const Options = styled.div`
  margin-bottom: 16px;

  p {
    margin-bottom: 8px;
  }

  label {
    margin-right: 8px;
    margin-left: 2px;
  }

  div {
    display: inline-flex;
  }
`
export const Option = styled.div`
  display: inline;
  text-transform: capitalize;
`
