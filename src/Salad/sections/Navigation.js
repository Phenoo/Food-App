import React, { useState } from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import { NavLink } from 'react-router-dom'
import Button from '../Button'

const Section = styled.section `
width: 100vw;
background-color: ${props => `rgba(${props.theme.bodyRgba}, 0.4)`}; 
`

const NavBar = styled.nav `
display: flex;
justify-content: space-between;
align-items: center;

width: 85%;
height: ${props => props.theme.navHeight};
margin: 0 auto;

button{
  color: ${props => props.theme.text};

  &:hover{
    border: 2px solid #000;
  }
}

.trans-btn button{
  color: ${props => props.theme.body};
  border: 2px solid  ${props => props.theme.body};
}
.mobile{
  display: none;
}

.btns{
  display: flex; 
  gap: 1rem;
}

@media(max-width: 64em){
  .desktop{
    display: none;
  }
  .mobile{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;

    button{
      text-transform: capitalize;
      color: ${props => props.theme.body};
      background-color: #fff;
      text-align: center;
      padding: 10px;
      border-radius: 5px;
    }
    a{
      font-size: 1.2rem;
    }
  }
}
`



const Menu = styled.ul`
display: flex;
justify-content: space-between;
align-items: center;
list-style: none;


@media(max-width: 64em){
  display: flex;
  position: fixed; 
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100vw;
  z-index: 10;
  background-color: ${props => `rgba(${props.theme.bodyRgba}, 0.85)`};
  backdrop-filter: blur(2px);
  margin: 0;


  transform: ${props => props.click ? 'translateY(0%)' : 'translateY(1000%)'} ;
  transition: all 0.3s ease;
  flex-direction: column;
  justify-content: center;

  touch-action: none;   
}
`

const MenuItem = styled.li`
margin: 0 1rem;
color: #808080;
cursor: pointer;
text-transform: capitalize;
font-family: 'Jost', sans-serif;
&::after{
  content: ' ';
  display: block;
  width: 0%;
  height: 2px;
  background: ${props => props.theme.text};
  transition: width 0.3s ease;
}

&:hover::after{
  width: 100%;
}

@media(max-width: 64em){
  margin: 1rem 0;
  font-size: ${props => props.theme.fontxl}; 
  color: ${props => props.theme.white};
  transition: all 0.3s ease;
  text-transform: uppercase;
  font-weight: 900;

  &:hover{
    transform: scale(0.8);
  }

  
&::after{
  display: none;
}
`


const Hamburger = styled.span`
width: 1.5rem;
height: 2px;
background: ${props => props.theme.text};

position: absolute;
top: 2rem;
right: 0;
transform: ${props => props.click ? 'translateX(-50%) rotate(90deg)' : 'translateX(-50%) rotate(0)'} ;

display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
transition: all 0.3s ease;
z-index: 100;
@media(max-width: 64em){
  display: flex;
}

display: none;
&::after, &::before{
  content: ' ';
  width:${props => props.click ? '1rem' : '1.5rem'};
  height: 2px;
  right: ${props => props.click ? '-2px' : '0'};
  background: ${props => props.theme.text};
  position: absolute;
  transition: all 0.3s ease;
}

&::after{
  top: ${props => props.click ? '0.3rem' : '0.5rem'};
  transform: ${props => props.click ? 'rotate(-40deg)' : 'rotate(0)'} ;
}

&::before{
  bottom: ${props => props.click ? '0.3rem' : '0.5rem'};
  transform: ${props => props.click ? 'rotate(40deg)' : 'rotate(0)'} ;

}

`

const Navigation = () => {

  const [click, setClick] = useState(false)

  const scrollTo = (id) => {
    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    })
    setClick(!click)
  }
  return (
    <Section>
      <NavBar>
        <Logo />
        <Hamburger click={click} onClick={() => {setClick(!click)}}>
          &nbsp;
        </Hamburger>
        <Menu click={click}>
          <MenuItem onClick={() => scrollTo('home')}>Home</MenuItem>
          <MenuItem onClick={() => scrollTo('menu')}>menu</MenuItem>
          <MenuItem onClick={() => scrollTo('services')}>services</MenuItem>
          <MenuItem onClick={() => scrollTo('blog')}>blog</MenuItem>
          <MenuItem>
            <div className="mobile">
              <NavLink to='/signin'>
                <button className='trans-btn'>sign in</button>
              </NavLink>
              <NavLink to='/signup'>
                <button className='primary-btn'>sign up</button>
              </NavLink>
            </div>
          </MenuItem>
        </Menu>
        <div className="desktop btns">
          <NavLink to='/signin' >
            <Button  text='sign in'/>
          </NavLink>
          <NavLink to='/signup' className='trans-btn'>
            <Button  text='sign up' />
          </NavLink>        
        </div>
      </NavBar>
    </Section>
  )
}

export default Navigation