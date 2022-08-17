import React from 'react'
import styled from 'styled-components'
import Button from '../Button'
import {Swiper, SwiperSlide} from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';



import {FaArrowRight, FaPlus} from 'react-icons/fa'

import BlogImg1 from '../../assets/Food/item-5.jpeg'
import BlogImg2 from '../../assets/Food/item-6.jpeg'
import BlogImg3 from '../../assets/Food/item-7.jpeg'
import BlogImg4 from '../../assets/Food/item-9.jpeg'

const Section = styled.section`
width: 100vw;
height: auto;
position: relative;
padding: 1rem 0;
`

const MainContainer = styled.div`
width: 85%;
margin: 0 auto;
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
const Header = styled.div`
display: flex;
justify-content: space-between;
align-items: flex-end;


button{
  color:  ${props => props.theme.body};
  max-width: 100%;

  @media(max-width: 50em){
    font-size: ${props => props.theme.fontsm};
    max-width: 100%;
  }
  @media(max-width: 31.5em){
    font-size: 0.6rem;
    padding: 0;
  }
}
`

const SubText = styled.h6`
font-weight: 400;
font-size: ${props => props.theme.fontmd};
color: #808080;
max-width: 60%;

@media(max-width: 800px){
  max-width: 70%;
  font-size: 0.75rem;
  }



`

const Container = styled.div`

margin: 2rem 0;

.swiper{
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
}

.swiper-slide{
  width: auto;
  height: 400px;
  bottom: 1.4rem;

  @media(max-width: 22em){
    height: 350px;
  }
}

.swiper-pagination{
  text-align: right;
}
.swiper-pagination-bullet-active{
  background-color: ${props => props.theme.body};
}



`

const Box = styled.div`
width: 330px;
cursor: pointer;
margin-right: 2rem;
margin: bottom: 1rem;
transition: all .2s ease-in-out;
box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.30), 0 7px 21px 0 rgba(0, 0, 0, 0.22);
.img{
  position: relative;

  img{
    width: 100%;
  }

  .overlay{
    font-size: ${props => props.theme.fontmd};
    position: absolute;
    top: 10%;
    text-transform: capitalize;
    background-color: #000;
    color: #ffe4e1;
    padding: 5px 50px 5px 5px;
transition: all .2s ease-in-out;
  }
}

.text{
  padding: 1rem;

  h4{
    font-size: ${props => props.theme.fontlg};
  }
  p{
    font-size: ${props => props.theme.fontsm};
    line-height: 20px;
    margin: 10px 0;
  }

  svg{
    font-size: ${props => props.theme.fontsm};
    cursor: pointer;
    background: #000;
    color: #ffe4e1;
    padding: 5px;
    border-radius: 50%;
  }
}


&:hover{
  transform: scale(0.9);

  .overlay, svg{
    background-color: ${props => props.theme.body};
  }
}


@media(max-width: 24em){
  width: 280px;
  .text{
    h4{
      font-size: 1rem;
    }
    p{
      font-size: 0.75rem;
      line-height: 15px;
    }
  }
}

@media(max-width: 20em){
  width: 250px;
}

`

const Blog = () => {
  return (
    <Section id='blog'>
      <MainContainer>
        <Header>
          <div>
          <Title>our food blog</Title>
        <SubText>Eat the food you dream about at affordable prices, No need to come to us just call is.</SubText>
          </div>
          <div>
            <Button text='read all' svg={<FaArrowRight />} />
          </div>
        </Header>
        <Container>
          <Swiper
          slidesPerView={"auto"}
          spaceBetween={20}
          className='swiper'
          pagination={{
            clickable: true,
            dynamicBullets: true,
        }}
          loop={true}
          modules={[Pagination, Autoplay]}

          >
            <SwiperSlide>
              <Box>
                <div className="img">
                  <img src={BlogImg1} alt="blogpost" />
                  <div className="overlay"><p>july 17, 2021</p></div>
                </div>
                <div className="text">
                  <h4>How to make a rice bowl</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus quasi inventore vel</p>
                  <FaPlus />
                </div>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box>
                <div className="img">
                  <img src={BlogImg2} alt="blogpost" />
                  <div className="overlay"><p>july 17, 2021</p></div>
                </div>
                <div className="text">
                <h4>Get the pizza of the week</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus quasi inventore vel</p>
                  <FaPlus />
                </div>
              </Box>

            </SwiperSlide>
            <SwiperSlide>
              <Box>
                <div className="img">
                  <img src={BlogImg3} alt="blogpost" />
                  <div className="overlay"><p>july 17, 2021</p></div>
                </div>
                <div className="text">
                <h4>Make your burger like this</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus quasi inventore vel</p>
                  <FaPlus />
                </div>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box>
                <div className="img">
                  <img src={BlogImg4} alt="blogpost" />
                  <div className="overlay"><p>july 17, 2021</p></div>
                </div>
                <div className="text">
                <h4>Make your burger like this</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus quasi inventore vel</p>
                  <FaPlus />
                </div>
              </Box>
            </SwiperSlide>
          </Swiper>
        </Container>
      </MainContainer>
    </Section>
  )
}

export default Blog