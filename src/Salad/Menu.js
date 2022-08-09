import React from 'react'
import styled from 'styled-components';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Pagination, Navigation, Autoplay } from 'swiper';

import Food1 from '../assets/Food/food-13637.png'
import Food2 from '../assets/Food/item-10.jpeg'
import Food3 from '../assets/Food/item-5.jpeg'
import Food4 from '../assets/Food/item-8.jpeg'
import Button from './Button';

const Section = styled.div`
height: 100%;
width: 100vw;
`

const Container = styled.div`
width: 85%;
padding: 6rem 0;
margin: 0 auto;

@media(max-width: 32em){
    width: 100%;
}

.swiper{
width: 100%;
height: 100%;
}

.swiper-slide{
display: flex;
align-items: center;
justify-content: center;
gap: 1rem;
margin-bottom: 50px;

@media(max-width: 64em){
    flex-direction: column;
}
}



.swiper-button-prev {
    color: rgba(0, 0, 0, 0.60);
    border: 1px solid rgba(0, 0, 0, 0.60);

    @media(max-width: 30em){
        left: 5px;
    }
}

.swiper-button-next {
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.white};

    @media(max-width: 30em){
        right: 5px;
    }
}

.swiper-button-prev, .swiper-button-next{
    transition: all 0.4s ease;

    
    @media(max-width: 50em){
        svg{
            font-size: 10px;
        }
    }
    @media(max-width: 30em){
        width: 15px;
        height: 30px;
    }
    &:hover{
        transform: scale(1.1);
    }
}

.swiper-button-prev:after, .swiper-button-next:after{
    font-size: ${props => props.theme.fontmd};
}

.swiper-pagination-bullet-active{
    background-color: ${props => props.theme.body};
}

.swiper-pagination{
    bottom: 0;
}
.swiper-div{
display: flex;
gap: 2rem;
border: 1px solid ${props => props.theme.text};
padding: 1rem;
cursor: pointer;

@media(max-width: 30em){
    padding: 0.5rem;
}

&:hover{
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.3), 0 7px 21px 0 rgba(0, 0, 0, 0.20);
    border: none;
    transition: all 0.4s ease;
}
}

.primary{
    button{
        background-color: ${props => props.theme.body};
        color: ${props => props.theme.white};
    }
}

.trans{
    button{
        border: 1px solid ${props => props.theme.body};
        color: ${props => props.theme.body};
        background-color: ${props => props.theme.white};
    }
}
h4{
    text-transform: capitalize;
    font-size:${props => props.theme.fontlg};
    
    @media(max-width: 50em){
        font-size: ${props => props.theme.fontmd};
    }
    @media(max-width: 31em){
        font-size: ${props => props.theme.fontsm};
    }
}

h6{
    width: 80%;
    margin: 1rem 0;
    font-weight: 400;
    font-size:${props => props.theme.fontmd};

    @media(max-width: 50em){
        font-size: ${props => props.theme.fontsm};
        margin: 0.5rem 0;
    }
    @media(max-width: 31em){
        font-size: 0.6rem;
    }
}

img{
    height: 100px;
    width: 100px;
    object-fit: cover;

    @media(max-width: 50em){
        width: 80px;
        height: 80px;
    }
}
`

const Menu = () => {
    return (
        <Section id='menu'>
            <Container>
                <Swiper
                pagination={{
                    clickable: true,
                }}
                loop={true}
                navigation={true}
                spaceBetween={50}
                modules={[Pagination, Navigation, Autoplay]}
                className='swiper'
                >
                    <SwiperSlide className='swiper-slide'>
                        <div className='swiper-div primary'>
                            <div className="swiper-img">
                                <img src={Food1} alt="" />
                            </div>
                            <div className="swiper-text">
                                <h4>Vegetable cheese burger</h4>
                                <h6>Get Vegetable cheese burgeer with layer</h6>
                                <Button text='buy now' />
                            </div>
                        </div>
                        <div className='swiper-div trans'>
                            <div className="swiper-img">
                                <img src={Food4} alt="" />
                            </div>
                            <div className="swiper-text">
                                <h4>Vegetable cheese burger</h4>
                                <h6>Get Vegetable cheese burgeer with layer</h6>
                                <Button text='buy now' />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='swiper-slide'>
                    <div className='swiper-div primary'>
                        <div className="swiper-img">
                                <img src={Food3} alt="" />
                            </div>
                            <div className="swiper-text">
                                <h4>Vegetable cheese burger</h4>
                                <h6>Get Vegetable cheese burgeer with layer</h6>
                                <Button text='buy now' />
                            </div>
                    </div>
                    <div className='swiper-div trans'>
                        <div className="swiper-img">
                                <img src={Food1} alt="" />
                            </div>
                            <div className="swiper-text">
                                <h4>Vegetable cheese burger</h4>
                                <h6>Get Vegetable cheese burgeer with layer</h6>
                                <Button text='buy now' />
                            </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide className='swiper-slide'>
                    <div className='swiper-div primary'>
                        <div className="swiper-img">
                                <img src={Food1} alt="" />
                            </div>
                            <div className="swiper-text">
                                <h4>Vegetable cheese burger</h4>
                                <h6>Get Vegetable cheese burgeer with layer</h6>
                                <Button text='buy now' />
                            </div>
                    </div>
                    <div className='swiper-div trans'>
                        <div className="swiper-img">
                                <img src={Food2} alt="" />
                            </div>
                            <div className="swiper-text">
                                <h4>Vegetable cheese burger</h4>
                                <h6>Get Vegetable cheese burgeer with layer</h6>
                                <Button text='buy now' />
                            </div>
                    </div>
                    </SwiperSlide>
                </Swiper>
            </Container>
        </Section>
    )
}

export default Menu