import React from 'react'
import styled, { keyframes } from 'styled-components'
import Button from '../Button'
import Imagex from '../../assets/Food/hamburger-street-food-seafood-fast-food-delicious-food-c8d3f9aa7bdf1cda0ab2e0ded131f324.png'
import Burger from '../../assets/Food/hamburgers-icon-png-5956.png'
import Chef from './Chef'
import Cutlery from '../../assets/Food/cultery.png'


const Section = styled.section `
width: 100vw;
height: auto;
position: relative;
background-color: ${props => `rgba(${props.theme.bodyRgba}, 0.4)`};



`
const MainContainer = styled.div`
width: 85%;
margin: 0 auto;
padding-top: 2rem;
position: relative;

#move{
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100px;
  height: 100px;

  @media(max-width: 800px){
    display: none;
  }

}
`

const rotate = keyframes`
100%{
  transform: rotate(1turn);
}

`

const Container = styled.div`
display: flex;
gap: 1rem;

@media(max-width: 800px){
  flex-direction: column;
}
`

const Box = styled.div`
height: 100%;
width: 50%;
position: relative;

#none{
  height: 100px;
  position: absolute;
  top: 100%;
  left: 0;
  img{
    width: 100px;
    height: 100px;
    position: absolute;
    top: 100%;
    left: 0;
  }
  @media(max-width: 800px){
    display: none;
  }
}

#burger{
  position: absolute;
  right: 10px;
  img{
    width: 30px;
    height: 30px;
    transform: rotate(35deg);
  }
}
}

@media(max-width: 800px){
  width: 100%;
}
`
const ImgContainer = styled.div`
width: 80%;
height:80%;
margin: 0 auto;

@media(max-width: 800px){
  width: 100%;
  margin: 0 auto;

}
img{
  width: 100%;
  height: 100%;
  animation: ${rotate} 6s linear infinite reverse;

}
`
const Title = styled.h1`
font-size: 4.5rem;

@media(max-width: 800px){
font-size: 4rem;
}

@media(max-width: 580px){
  font-size: 3.5rem;
}

  @media(max-width: 450px){
    font-size: 3rem;
    }
    @media(max-width: 400px){
      font-size: 2.5rem;
    }
    @media(max-width: 22em){
      font-size: 2rem;
    }
`

const SubText = styled.p`
font-size: ${props => props.theme.fontmd};
font-weight: 400;
font-family: 'Livvic';
width: 90%;
margin: 2rem 0;

@media(max-width: 800px){
  width: 100%;
}
`

const Price = styled.div`
display: flex;
align-items: center;
margin-top: 1rem;
gap: 1rem;

h4{
  font-size: ${props => props.theme.fontlg};
}

button{
  color: ${props => props.theme.white};
  background-color: ${props => props.theme.body};
}
`


const Home = () => {
  return (
    <Section id='home'>
      <MainContainer>
        <img src={Cutlery} alt='cu' id='move' />
        <Container>
          <Box>
            <Title>Good Food for <br /> Good Moments.</Title>
            <SubText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi excepturi repudiandae quos quod distinctio nostrum quam, autem eligendi, alias veritatis qui nisi earum temporibus nobis!
            </SubText>
            <Price>
              <h4>$14.99</h4>
              <Button text='view menu' classway='primary-btn'/>
            </Price>
            <div id='burger'>
              <img src={Burger} alt='burger' />
            </div>
          </Box>
          <Box>
            <ImgContainer>
              <img src={Imagex} alt="homeimg" />
            </ImgContainer>
          </Box>
        </Container>
        <div>
          <Chef />
        </div>
      </MainContainer>
    </Section>
  )
}

export default Home