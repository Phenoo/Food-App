import React from 'react'
import styled from 'styled-components'

const  Btn = styled.button`
display: inline-block;
border: none;
outline: none;
text-transform: capitalize;
font-weight: 500;
font-size: ${props => props.theme.fontmd};
padding: 0.7rem 1.5rem;
border-radius: 5px;
cursor: pointer;
transition: all 0.2s ease;
position: relative;
display: flex;
align-items: center;
gap: 5px;
text-transform: capitalize;


&:hover{
  transform: scale(0.9);
}


&:hover::after{
  transform: translate(-50%, -50%) scale(1);
  padding: 0.3rem;
}

@media(max-width: 50em){
  font-size: ${props => props.theme.fontsm};
  padding: 0.4rem 1rem;
}

@media(max-width: 31em){
  font-size: 0.7rem;
}
`

const Button = ({text, classway, svg}) => {
  return (
    <Btn clasName={classway}>
        {text} {svg}
    </Btn>
  )
}

export default Button