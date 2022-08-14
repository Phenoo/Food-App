import React from 'react'
import styled from 'styled-components'

import {AiOutlineShoppingCart, AiOutlineHeart} from 'react-icons/ai'

import Item1 from '../../assets/Food/item-1.jpeg'
import Item2 from '../../assets/Food/item-2.jpeg'
import Item3 from '../../assets/Food/item-3.jpeg'
import Item4 from '../../assets/Food/item-4.jpeg'
import Button from '../Button'

const Section = styled.div`
width: 100vw;
background-color:  rgba(128, 128, 128, 0.3);
padding: 1rem 0;
`
const Container = styled.div`
width: 85%;
margin: 0 auto;
display: flex;
align-items: center;
justify-content:center;
flex-direction: column;

button{
  background-color: ${props => props.theme.body};
  color: ${props => props.theme.white};
  margin-top: 2rem;
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

@media(max-width: 31em){
  font-size: 0.65rem;
}
`
const MainContainer = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(2, 1fr);
gap: 2rem;
margin-top: 2rem;

@media(max-width: 800px){
grid-template-columns: 100%;
}

.img{
  width: 140px;
  height: 100%;
}

`
const Box = styled.div`
display: flex;
justify-content: space-between;
background-color: #fff;


.text{
padding: 1.5rem;

@media(max-width: 44em){
  padding: 0.7rem 1rem;
}
}


img{
  width: 100%;
  height: 100%;
  object-fit:cover;
}

`
const DivBox = styled.div`

h4{
font-size: ${props => props.theme.fontlg};

@media(max-width: 44em){
  font-size: ${props => props.theme.fontmd};
}
@media(max-width: 31em){
  font-size: ${props => props.theme.fontsm};
}

}

p{
  font-size: ${props => props.theme.fontmd};
  margin 1rem 0;
  width: 80%;
  line-height: 30px;

  @media(max-width: 42em){
    line-height: 20px;
    font-size: ${props => props.theme.fontsm};
  }
  @media(max-width: 31em){
    margin: 10px 0;
    font-size: 0.65rem;
  }
}

div{
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 10px;
}

.cart{
  background-color: ${props => props.theme.body};
  &:hover{
    background: none;
    color: ${props => props.theme.body};
    border: 1px solid ${props => props.theme.body};
  }
}

.heart{
  background-color: ${props => props.theme.text};

  &:hover{
    background: none;
    color: ${props => props.theme.text};
    border: 1px solid ${props => props.theme.text};
  }
}
svg{
  transition: 0.4s ease;
  padding: 5px;
  color: #fff;
  border-radius: 3px;
  cursor: pointer;
  
  @media(max-width: 800px){
    font-size: ${props => props.theme.fontmd};
  }
}
`

const Services = () => {
  return (
    <Section id='services'>
      <Container>
        <Title>our regular odds </Title>
        <SubText>Eat the food you dream about at affordable prices. No <br /> need to come to us just call it.</SubText>
        <MainContainer>
          <Box>
            <DivBox className='text'>
              <h4>Delicious rice bowl with vegetables</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing laceat velit.</p>
              <div>
                <h4>$16</h4>
                <div>
                  <AiOutlineShoppingCart className='cart'/>
                  <AiOutlineHeart  className='heart'/>
                </div>
              </div>
            </DivBox>
            <DivBox className='img'>
              <img src={Item1} alt="food" />
            </DivBox>
          </Box>
          <Box>
            <DivBox className='text'>
            <h4>Rhurmb and apple crumble</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisici placeat velit.</p>
                <div>
                  <h4>$16</h4>
                  <div>
                    <AiOutlineShoppingCart className='cart' />
                    <AiOutlineHeart  className='heart'/>
                  </div>
                </div>
            </DivBox>
            <DivBox className='img'>
              <img src={Item2} alt="food" />
            </DivBox>
          </Box>
          <Box>
            <DivBox className='text'>
            <h4>Delicious belf burger with vegetables</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing placeat velit.</p>
              <div>
                <h4>$16</h4>
                <div>
                  <AiOutlineShoppingCart className='cart' />
                  <AiOutlineHeart className='heart' />
                </div>
              </div>
            </DivBox>
            <DivBox className='img'>
              <img src={Item3} alt="food" />
            </DivBox>
          </Box>
          <Box>
            <DivBox className='text'>
                <h4>Delicious yummy pizza with vegetables</h4>
                <p>Lorem ipsum dolor sit amet consectetur placeat velit.</p>
                <div>
                  <h4>$16</h4>
                  <div>
                    <AiOutlineShoppingCart className='cart' />
                    <AiOutlineHeart className='heart' />
                  </div>
                </div>
            </DivBox>
            <DivBox className='img'>
              <img src={Item4} alt="food" />
            </DivBox>
          </Box>
        </MainContainer>
        <Button text='see all' />
      </Container>
    </Section>
  )
}

export default Services