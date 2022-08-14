import React from 'react'
import styled from 'styled-components'
import Button from '../Button'


import Item1 from '../../assets/Food/item-1.jpeg'
import Item2 from '../../assets/Food/item-2.jpeg'
import Item3 from '../../assets/Food/item-4.jpeg'
import Item5 from '../../assets/Food/item-10.jpeg'


const Section = styled.div`
width: 100vw;
height: 100%;
padding: 3rem 0;
background-color: ${props => props.theme.white};
display: flex;
align-items: center;
flex-direction: column;

#header{
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

#prev{
  transform: rotate(180deg);
}
`
const Container = styled.div`
width: 85%;
margin: 0 auto;
display: flex;
gap: 2rem;
margin: 1rem 0;

@media(max-width:64em){
  flex-direction: column;
}

button{
  cursor: pointer;
}


}
`

const Box = styled.div`

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
const SubText = styled.p`
  width: 80%;
  margin: 10px 0;
  font-size: ${props => props.theme.fontmd};

  @media(max-width: 50em){
    font-size: ${props => props.theme.fontsm};
  }
  @media(max-width: 24em){
    font-size: 0.7rem;
  }


`
const ImgBox = styled.div`
background: url(${Item1}) center center;
width: 50%;
height: 350px;
position: relative;
cursor: pointer;

@media(max-width:64em){
  width: 100%;
}

.overlay{
  color: #fff;
  width: 100%;
  height: 100%;
  top: 0;
  background-color: rgba(0, 0, 0, 0.7);

  div{
    padding: 3rem 2rem;
  }

  h4{
    text-transform: capitalize;
    font-size:  ${props => props.theme.fontxl};
  }

  p{
    width: 75%;
    line-height: 30px;

    @media(max-width: 43.75em){
      width: 90%;
      line-height: 20px;
      font-size:  ${props => props.theme.fontsm}; 
    }
    @media(max-width: 24.75em){
      width: 100%;
      font-size: 0.75rem;
    }
  }

  button{
    color: ${props => props.theme.white};
    background-color: ${props => props.theme.body};
    margin-top: 2rem;

    @media(max-width: 700px){
    margin-top: 1rem;
    }
  }

#title{
  display: flex;
  gap: 10px;
  align-items: baseline;
  h1{
    font-family: 'Abel';
    font-size:  ${props => props.theme.fontxxxl};
    color: ${props => props.theme.body};

    @media(max-width: 40em){
      font-size:  ${props => props.theme.fontxxl};
    }    
    }  
    span{
      text-transform: uppercase;
      font-weight: 600;
      font-size: ${props => props.theme.fontlg};
    }
}
}

&:hover{
  opacity: 0.9;
}
`

const DivBox = styled.div`

`

const Item = styled.div`
display: flex;
gap: 1rem;
margin-bottom: 1rem;

span{
  width: 60%;
  height: 1px;
  background-color: #ddd;
}

.head{
  display: flex;
  align-items: center;
  gap: 1rem;

h4{
  font-size:  ${props => props.theme.fontlg};
  text-transform: capitalize;
  font-family: 'Jost';

  @media(max-width: 50em){
    font-size: ${props => props.theme.fontmd};
  }
  @media(max-width: 32em){
    font-size: 0.75rem;
  }
}
h6{
  font-size:  ${props => props.theme.fontlg};
  color: ${props => props.theme.body};

  @media(max-width: 50em){
    font-size: ${props => props.theme.fontmd};
  }
  @media(max-width: 22em){
    font-size: 0.75rem;
  }
}
}

p{
  margin-top: 1rem;
  width: 90%;
  font-size: ${props => props.theme.fontsm};
  @media(max-width: 50em){
    font-size: 0.8rem;
  }
  @media(max-width: 31em){
    margin-top: 0.6rem;
  }
  @media(max-width: 22em){
    font-size: 0.65rem;
    
  }
}
img{
  width: 100px;
  aspect-ratio: 1/1;
  border-radius: 10px;


  @media(max-width: 31em){
    width: 80px;
  }
  @media(max-width: 22em){
    width: 70px;
  }
}


`

const Offer = () => {
  return (
    <Section>
      <Container id='header'>
        <Box>
          <Title>get the best offer</Title>
          <SubText>Lorem ipsum, dolor sit amet consectetur adipisicing elit Molestiae corrupti unde adipisci</SubText>
        </Box>
      </Container>
      <Container>
        <ImgBox>
          {/* <img src={Item1} alt="meal" /> */}
          <div className="overlay">
            <div>
            <h4>lunch time</h4>
            <span id='title'><h1>30%</h1><span>off</span></span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, vitae sunt! Et sed vel</p>
            <Button text='order now' />
            </div>
          </div>
      </ImgBox>
      <DivBox>
      <Item>
        <div>
          <img src={Item2} alt="meal" />
        </div>
        <div>
        <div className="head">
          <h4>Spicy club</h4>
          <span></span>
          <h6>$43</h6>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, illo.</p>
        </div>
      </Item>  
      <Item>
        <div>
          <img src={Item3} alt="meal" />
        </div>
        <div>
        <div className="head">
          <h4>Spicy Salad</h4>
          <span></span>
          <h6>$43</h6>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, illo.</p>
        </div>
      </Item>  
      <Item>
        <div>
          <img src={Item5} alt="meal" />
        </div>
        <div>
          <div className="head">
          <h4>Chicken grill</h4>
          <span></span>
          <h6>$43</h6>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, illo.</p>
        </div>
        </Item>  
        </DivBox>
      </Container>
    </Section>
  )
}

export default Offer