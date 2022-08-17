import React from 'react'
import styled from 'styled-components';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';

import { Autoplay } from 'swiper';

import Chef1 from '../../assets/Food/chef-1.png'
import Chef2 from '../../assets/Food/chef-2.png'
import Chef3 from '../../assets/Food/chef-2.png'


const Card = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
height: 400px;
position: relative;
overflow: hidden;


@media(max-width: 800px){
  height: 250px;
}
@media(min-width: 700px){
  width: 60%;
  float: right;
  overflow: hidden;
}
@media(min-width: 750px){
  width: 70%;
}

@media(min-width: 1050px){
  width: 50%;
}

img{
  width: 300px;
  height: 90%;;
  position: absolute;
  bottom: 20px;
  right: 2%;

  @media(max-width: 800px){
      right: 0;
      width: 150px;
    }
}

.chefbig{
  @media(max-width: 800px){
    right: 0;
    width: 170px;
  }
}
`

const ChefCard = styled.div`
background-color: ${props => props.theme.body};
display: flex;
flex-direction: column;
justify-content: flex-end;
width: 100%;
padding: 4rem 2rem;
position: absolute;
bottom: 20px;
color: ${props => props.theme.white};
text-transform: capitalize;
border-radius: 2px;
@media(max-width: 800px){
  padding: 2rem 1rem;
}

h4{
  font-family: 'Jost';
  font-size: ${props => props.theme.fontxl};

@media(max-width: 800px){
  font-size: ${props => props.theme.fontlg};
}

}


p {
  text-transform: lowercase;
  font-family: 'Jost';
  font-size: ${props => props.theme.fontmd};
  @media(max-width: 800px){
    font-size: 12px;
  }
}
`


const Chef = () => {
  return (
    <Swiper
    autoplay={{
      delay: 5000,
      disableOnInteraction: false,
    }}
    loop={true}
    spaceBetween={50}
    className='swiper'
    modules={[Autoplay]}
    >
      <SwiperSlide>
        <Card>
          <ChefCard>
            <h4>joe root</h4>
            <p>chief chef at salad</p>
          </ChefCard>
          <img src={Chef1} alt='chef' />
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card>
          <ChefCard>
            <h4>jen laria</h4>
            <p>chef at salad</p>
          </ChefCard>
          <img src={Chef2} alt='chef' className='chefbig' />
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card>
          <ChefCard>
            <h4>Ash Micea</h4>
            <p>chef at salad</p>
          </ChefCard>
          <img src={Chef3} alt='chef'  className='chefbig' />
        </Card>
      </SwiperSlide>
    </Swiper>

  )
}

export default Chef