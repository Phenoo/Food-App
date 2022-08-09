import React, { useRef, useState } from 'react'

import styled from 'styled-components'
import Button from '../Button'


import {AiOutlineMail} from 'react-icons/ai'
import {FaGooglePlay, FaApple, FaLinkedin, FaFacebook, FaTwitter} from 'react-icons/fa'

import Logo from './Logo'

import FoodImg from '../../assets/Food/food-13643.png'
import ModalComponent from '../Modal'


const Section = styled.section`
width: 100vw;
height: auto;
position: relative;

h1{
  color: #fff;
}

.dark{
  background: #202020;
}
.primary{
  background: ${props => props.theme.body};
}


@media(max-width: 800px){
#copy{
  p{
    font-size: 10px;
    text-align: center;
    width: 100%;
  }
}
}
#none{
@media(max-width: 800px){
  display: none;
}
}
`

const MainContainer = styled.div`
display: flex;
align-items: center;
`
const HeadContainer = styled.div`
width: 85%;
margin: 0 auto;
display: flex;
align-items: center;
gap: 1rem;
color: #fff; 
padding: 2rem 0;


@media(max-width: 800px){
  flex-direction: column;
  align-items: flex-start;
}

svg{
  font-size: 1rem;
  color: #ddd;
}
div{
  width: 50%;

  @media(max-width: 800px){
    width: 100%;
  }
}

img{
  width: 100%;
  @media(max-width: 800px){
    display: none;
  }

}

.form-input{
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding: 5px;
  margin-top: 10px;
  border-radius: 5px;

  div{
    width: 100%;
    display: flex;
    gap: 5px;
  align-items: center;
  }

@media(max-width: 800px){
  width: 100%;
}
}

button{
  background-color: ${props => props.theme.body};
  color: #fff;
}


`

const Title = styled.h2`
font-size: ${props => props.theme.fontlg};
text-transform: capitalize;
margin: 10px 0;
`

const SubText = styled.h6`
font-weight: 400;
font-size: ${props => props.theme.fontmd};
color: #808080;
color: #fff; 
opacity: 0.55;
`
const Bottom = styled.div`
width: 85%;
margin: 0 auto;
display: flex;
flex-direction: column;
color: #fff;
text-transform: capitalize;
padding: 1rem;


.divider{
  width: 100%;
  height: 1px;
  background-color: #fff;
  opacity: 0.7;
  margin: 1.25rem 0;
}

.final{
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media(max-width: 800px){
    justify-content: center;
  }

div{
  display: flex;
  gap: 1rem;
}
}
`
const Container = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 3rem;

@media(max-width: 800px){
grid-template-columns: 100%;
gap: 1rem;
}
`

const FootContainer = styled.div`
display: flex;
justify-content: space-between;
margin-top: 2rem;

@media(max-width: 800px){
  flex-direction: column;
}
`


const Foot = styled.div`
ul{
  display: flex;
  flex-direction: column;
}
li{
  margin-top: 10px;
  color: #ffe4e1;
  opacity: 0.7;
  transition: all 0.4s ease;
  cursor: pointer;

  &::after{
    content: ' ';
    display: block;
    width: 0%;
    height: 2px;
    background: ${props => props.theme.body};
    transition: width 0.3s ease;
  }

  &:hover{
    opacity: 1;
  }
  
  &:hover::after{
    max-width: 80%;
  }
}
`
const Social = styled.div`

.social-links{
  display: flex;
  gap: 5px;
  margin: 10px 0;
  svg{
    cursor: pointer;
    background-color: #fff;
    color: #000;
    padding:10px;
    border-radius: 2px;
    transition:  0.2s;
    &:hover {
      transform: scale(0.9);
    }
  }

}
.download{
  display: flex;
  gap: 1rem;

}

.store{
  background-color: ${props => props.theme.body};
  display: flex;
  gap: 5px;
  align-items: center;
  padding: 5px 8px;
  border-radius: 5px;
  margin-top: 10px;
  transition: 0.4s;
  &:hover{
    transform: scale(0.9);
  }

  svg{
    font-size: 2rem;
  }
  p{
    font-size: 10px;
  }

@media(max-width: 700px){
  h4{
    font-size: 12px;
  }
  svg{
    font-size: 1.25rem;
  }
}
}
`


const Footer = () => {

  const [modal, setModal] = useState(false);

  const emailRef = useRef(null);

  const handleModal = (e) => {
    e.preventDefault();
    setModal(!modal)
  }
  return (
    <Section>
      <MainContainer className='primary'>
        {
          modal && <ModalComponent handleModal={handleModal} emailRef={emailRef} />
        }
        <HeadContainer>
          <div>
          <SubText>$20 Discount for your first order</SubText>
          <Title>Join our newsletter and get updates</Title>
          <SubText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure praesentium odio rem quaerat autem aperiam fugit suscipit! Unde, dolorem et</SubText>
          
          <form action="" onSubmit={handleModal}>
            <div className="form-input">
            <div>
            <AiOutlineMail />
              <input type="email" name="" id="" placeholder='Your email address' ref={emailRef} required />
            </div>
            <Button text='subscribe' />
            </div>
          </form>
          </div>
          <div>
            <img src={FoodImg} alt="" />
          </div>
        </HeadContainer>
      </MainContainer>
      <MainContainer className='dark'>
        <Bottom>
          <Logo />
          <FootContainer>
            <Container>
              <Foot>
                <h4>about</h4>
                <ul>
                  <li>our story</li>
                  <li>our customer</li>
                  <li>blog</li>
                  <li>legal</li>
                </ul>
              </Foot>
              <Foot>
              <h4>useful links</h4>
                <ul>
                  <li>media</li>
                  <li>account</li>
                  <li>newsletter</li>
                  <li>partner</li>
                </ul>
              </Foot>
              <Foot>
              <h4>help</h4>
                <ul>
                  <li>menu</li>
                  <li>Discount</li>
                  <li>customer</li>
                  <li>support</li>
                </ul>
              </Foot>
            </Container>
            <Social>
              <h4>our social media</h4>
              <div className="social-links">
                <a href="www.facebook.com">
                <FaFacebook />
                </a>
                <a href="www.linkedi.com">
                <FaLinkedin />
                </a>
                <a href="www.twitter.com">
                <FaTwitter />
                </a>
              </div>
              <h4>download app</h4>

              <div className="download">
                <a href='www.apple.com' className='store'>
                  <div>
                  <FaApple />
                  </div>
                  <div>
                    <p>Download on </p>
                    <h4>App store</h4>
                  </div>
                </a>
                <a href='www.google.com' className='store'>
                  <div>
                  <FaGooglePlay />
                  </div>
                  <div>
                    <p>Download on </p>
                    <h4>App store</h4>
                  </div>
                </a>
              </div>
            </Social>
          </FootContainer>

          <div className="divider"></div>

          <div className="final">
            <div id='copy'>
              <p>Copyright &copy; 2021 Salad. All rights reserved</p>
            </div>
            <div id='none'>
              <p>Privacy policy</p>
              <p>terms and conditions</p>
              <p>security</p>
            </div>
          </div>
        </Bottom>
      </MainContainer>
    </Section>
  )
}

export default Footer