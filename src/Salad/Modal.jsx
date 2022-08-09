import React from 'react'
import styled from 'styled-components'

import Verify from '../assets/Food/icons8-approval-50.png'


const Modal = styled.div`
position: fixed;
top: 0;
left: 0;
bottom: 0;
right: 0;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-color: #ddd;
z-index: 10;

touch-action: none;

background-color: rgba(0, 0, 0, 0.6);

`

const ModalContainer = styled.div`
background-color: #fff;
width: calc(12rem + 12vw);
height: auto;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
text-align: center;
padding: 2rem;
border-radius: 20px;
transition: all 0.4s ease;
`
const Content = styled.p`
margin: 1rem 0;

h4{
  margin: 1rem 0;
  text-transform: capitalize;
}

p{
  text-transform: capitalize;
}
`
const Footer = styled.div`
`

const ButtonOk = styled.button`
background-color: ${props => props.theme.body};
color: #fff;
display: inline-block;
border: none;
outline: none;
text-transform: uppercase;
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

@media(max-width: 800px){
  font-size: ${props => props.theme.fontsm};
  padding: 0.4rem 1rem;
}
`

const ModalComponent = ({handleModal}) => {
      return (
        <Modal>
        <ModalContainer>
          <Content>
            <img src={Verify} alt="approve" />
            <h4>Subscription Complete</h4>
            <p>you have subscribed to our newsletter</p>
          </Content>
          <Footer>
            <ButtonOk onClick={handleModal}>
              ok
            </ButtonOk>
          </Footer>
        </ModalContainer>
      </Modal>
      )
    }


export default ModalComponent