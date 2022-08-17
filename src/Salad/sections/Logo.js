import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const LogoText = styled.h1`
font-family: 'Atomic Age', sans-serif;
font-size: ${props => props.theme.fontxl};
color: ${props => props.theme.text};
text-transform: capitalize; 
transition: all 0.2s ease;

span{
  color: ${props => props.theme.body};
}


@media(max-width: 64em){
  font-size: ${props => props.theme.fontxl};
}

@media(max-width: 40em){
  font-size: ${props => props.theme.fontlg};
}
`

const Logo = () => {
  return (
    <LogoText>
      <Link to='/'>
        salad 
        <span>.</span>
      </Link>
    </LogoText>
  )
}

export default Logo