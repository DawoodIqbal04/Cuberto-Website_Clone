'use client';

import React from "react";
import Roboto from "./Roboto";
import {Swiper, SwiperSlide} from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

const Resources = () => {
  return (
    <div className="w-full min-h-screen text-white bg-[#1A1A1A] rounded-t-[60px] pt-44">
      <div className="flex flex-col text-[120px] leading-25 tracking-tighter pl-34">
        <div>
          <h1>Development</h1>
        </div>
        <div>
          <h1>and design</h1>
        </div>
        <div className="tracking-normal">
          <Roboto text="resources" />
        </div>
      </div>
      <div className="w-full pl-34">
        <Swiper
        modules={[FreeMode]}
        spaceBetween={0}
        slidesPerView={2.6}
        freeMode={true}
        className="w-full"
        >
          <SwiperSlide>
            <div className="bg-white h-59 w-104 rounded-3xl">Slide 1</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white h-59 w-104 rounded-3xl">Slide 1</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white h-59 w-104 rounded-3xl">Slide 1</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white h-59 w-104 rounded-3xl">Slide 1</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white h-59 w-104 rounded-3xl">Slide 1</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white h-59 w-104 rounded-3xl">Slide 1</div>
          </SwiperSlide>
          
        </Swiper>
      </div>
      <div></div>
    </div>
  );
};

export default Resources;
