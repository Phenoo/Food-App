import React from 'react'
import styled from 'styled-components'
import Button from '../Button'


import {FaArrowRight} from 'react-icons/fa'

import Img1 from '../../assets/Food/review.webp'
import Img2 from '../../assets/Food/review2.jpeg'
import Img3 from '../../assets/Food/review3.jpeg'


const Section = styled.section`
width: 100vw;
height: auto;
position: relative;
background-color:  rgba(128, 128, 128, 0.3);
padding: 2rem 0;
`

const MainContainer = styled.div`
width: 85%;
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

button{
  color: ${props => props.theme.body};
}
`

const Title = styled.h1`
font-size: ${props => props.theme.fontxxl};
text-transform: capitalize;

@media(max-width: 800px){
  font-size: ${props => props.theme.fontxl};
}
@media(max-width: 24em){
  font-size: ${props => props.theme.fontlg};
}
`

const SubText = styled.h6`
font-weight: 400;
font-size: ${props => props.theme.fontmd};
color: #808080;
text-align: center;
max-width: 100%;

@media(max-width: 35em){
  font-size: 0.75rem;
}
`
const Container = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 2rem;
margin-top: 3rem;

@media(max-width: 64em){
grid-template-columns: repeat(2, 1fr);
}

@media(max-width: 60em){
grid-template-columns: 100%;
}
`

const Box = styled.div`

.round{
  border-radius: 10px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
}
.tri-right.border.btm-left-in:before {
	content: ' ';
	position: absolute;
	width: 0;
	height: 0;
	left: 30px;
  right: auto;
  top: auto;
	bottom: -40px;
	border: none;
}
.tri-right.btm-left-in:after{
	content: ' ';
	position: absolute;
	width: 0;
	height: 0;
	left: 38px;
  right: auto;
  top: auto;
	bottom: -15px;
	border: 12px solid;
	border-color: #ff4500 transparent transparent #ff4500;
  z-index: -1
}
.text{
  display: inline-block;
  position: relative;
	width: 230px;
	height: auto;
	background-color: #fff;

  p{
    line-height: 20px;
    padding: 1rem;
    font-size: ${props => props.theme.fontsm};
    @media(max-width: 50em){
      font-size: ${props => props.theme.fontsm};
    }
    @media(max-width: 31em){
      font-size: 0.7rem;
      line-height: 15px;
    }
  }
}

.img{
  display: flex;
  align-items: center;
  gap: 10px;

  h6{
    margin-top: 10px;
    font-size: ${props => props.theme.fontmd};
    @media(max-width: 50em){
      font-size: ${props => props.theme.fontsm};
    }
    @media(max-width: 31em){
      font-size: 0.7rem;
    }
  }
}

p{
  font-size: ${props => props.theme.fontsm};

  @media(max-width: 31em){
    font-size: 0.55rem;
  }
}

img{
  margin-top: 1rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;

  @media(max-width: 31em){
    width: 40px;
    height: 40px;
  }
}
`
const Review = () => {
  return (
    <Section>
      <MainContainer>
        <Title>what they say</Title>
        <SubText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem facilis nihil omnis laborum soluta dolorum.</SubText>
        <Container>
          <Box>
            <div className="text border round tri-right btm-left-in">
            <p>Lorem ipsum dolor sit amet consectetu Rerum delectus molestias magni ipsam adipisci esse deserunt ipsum. Cupiditate, eos.</p>
            </div>
            <div className="img">
              <div>
              <img src={Img1} alt="" />
              </div>
              <div>
                <h6>Mark Adair</h6>
                <p>Businessmen</p>
              </div>
            </div>
          </Box>
          <Box>
            <div className="text  border round tri-right btm-left-in">
              <p>Lorem ipsum dolor sit amet consectetu Rerum delectus molestias magni ipsam adipisci esse deserunt ipsum. Cupiditate, eos.</p>
            </div>
            <div className="img">
              <div>
              <img src={Img2} alt="" />
              </div>
              <div>
                <h6>Tom Kane</h6>
                <p>Businessmen</p>
              </div>
            </div>
          </Box>
          <Box>
            <div className="text  border round tri-right btm-left-in">
            <p>Lorem ipsum dolor sit amet consectetu Rerum delectus molestias magni ipsam adipisci esse deserunt ipsum. Cupiditate, eos.</p>
            </div>
            <div className="img">
              <div>
              <img src={Img3} alt="" />
              </div>
              <div>
                <h6>Valentia</h6>
                <p>Traveler</p>
              </div>
            </div>
          </Box>
        </Container>
        <Button text='see all reviews' svg={<FaArrowRight />} />
      </MainContainer>
    </Section>
  )
}

export default Review