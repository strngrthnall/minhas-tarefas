import { Link } from 'react-router-dom'

import styled from 'styled-components'

export const Circle = styled(Link)`
  display: flex;
  height: 64px;
  width: 64px;
  background-color: #a3be8c;
  color: #ffffff;
  position: fixed;
  bottom: 40px;
  right: 40px;
  border-radius: 50%;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  font-size: 40px;
`
