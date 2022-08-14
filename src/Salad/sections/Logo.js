import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const LogoText = styled.h1`
width: 150px;
font-family: 'Atomic Age', sans-serif;
font-size: ${props => props.theme.fontxl};
color: ${props => props.theme.text};
text-transform: capitalize; 
transition: all 0.2s ease;

span{
  color: ${props => props.theme.body};
}

&:hover {
  transform: scale(0.8);
}

@media(max-width: 64em){
  font-size: ${props => props.theme.fontxl};
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