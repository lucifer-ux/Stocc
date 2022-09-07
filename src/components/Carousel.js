import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Arrow from '../assets/Arrow.svg'
import {Pagination, Navigation, Autoplay, EffectCards } from "swiper";

const Container = styled.div`
width: 25vw;
height: 70vh;


.mySwiper{
    width: 100%;
    height: 100%;
}

.swiper-slide{
    background-color: ${props => props.theme.carouselColor};
    border-radius: 20px;

    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-button-next {
    color: ${props => props.theme.text};
    right: 0;
    width: 4rem;
    top: 60%;
    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;
    &:after{
        display: none;
    }
}

.swiper-button-prev {
    color: ${props => props.theme.text};
    left: 0;
    width: 4rem;
    top: 60%;
    transform: rotate(180deg);
    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;

    &::after{
        display: none;
    }
}

`
const Carousel = () => {
  return (
    <Container>
      <Swiper
        autoplay = {{
            delay:2000,
            disableOnInteraction:false,
        }}
        pagination = {{
            type: 'fraction',
        }}
        scrollbar = {{
            draggable:true
        }}
        navigation = {true}
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>

    </Container>
  )
}

export default Carousel