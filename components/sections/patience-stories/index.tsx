'use client';

import { useState } from 'react';
import 'swiper/css';
import { FreeMode, Navigation, Scrollbar, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Image from 'next/image';

import slide1 from './slide-1.png';
import slide2 from './slide-2.png';
import slide3 from './slide-3.png';
import slide4 from './slide-4.png';

const stories = [
  {
    label: 'Meniscus tear Recovery without surgery',
    author: 'Martin Fuentes (Regenexx)',
    banner: slide1,
    videoLink: 'https://youtu.be/Ms6no0SZvM8?si=G1fP0HqIIyZBBROA'
  },
  {
    label: 'IFBB Pro Comeback Story',
    author: 'Martin Fuentes (Regenexx)',
    banner: slide2,
    videoLink: 'https://youtu.be/BDtw1C8Ho50?si=6VaE5egYuhRgXYQo'
  },
  {
    label: 'Meniscus tear Recovery without surgery',
    author: 'Martin Fuentes (Regenexx)',
    banner: slide3,
    videoLink: 'https://youtu.be/f9CrWjxF3Y4?si=hGF3fPFZMAOVTKLC'
  },
  {
    label: 'Meniscus tear Recovery without surgery',
    author: 'Martin Fuentes (Regenexx)',
    banner: slide4,
    videoLink: 'https://youtu.be/hkmiEQfj_dE?si=pn3_MNazY76x2rZR'
  },
  {
    label: 'Meniscus tear Recovery without surgery',
    author: 'Martin Fuentes (Regenexx)',
    banner: slide3,
    videoLink: 'https://youtu.be/V0j4K-F8fHU?si=LnvInH354D86lhY-'
  },
  {
    label: 'Meniscus tear Recovery without surgery',
    author: 'Martin Fuentes (Regenexx)',
    banner: slide4,
    videoLink: 'https://youtu.be/j7YlBN5TNjg?si=zhEaQTKk8yld1VLX'
  }
];

export function PatienceStories() {
  const [thumbsSwiper, setThumbsSwiper] = useState();
  return (
    <section className="px-5 pb-20 md:pb-32">
      <div className="mx-auto w-full max-w-[1595px]">
        <h2 className="mb-16 text-center text-2xl font-bold leading-none text-white lg:mb-32 lg:text-[45px]">
          Patient Stories
        </h2>
        <div className="flex h-[178px] w-full gap-6 sm:h-96 xl:h-[682px]">
          <div className="relative z-0 size-full flex-1 xl:max-w-[1256px]">
            <div className="inset-0 size-full xl:absolute">
              <Swiper
                className="size-full"
                modules={[Thumbs, FreeMode, Scrollbar]}
                thumbs={{ swiper: thumbsSwiper }}
                scrollbar={{
                  el: '.story-scroll-bar',
                  draggable: true,
                  dragClass: 'bg-primary absolute h-0.5 left-0 top-0'
                }}
              >
                {stories.map((story, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative z-0 h-full">
                      <button className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
                        <svg
                          width="120"
                          height="120"
                          className="size-15 xl:size-[120px]"
                          viewBox="0 0 120 120"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g opacity="0.8">
                            <circle cx="60" cy="60" r="58" stroke="white" strokeWidth="4" />
                            <path d="M88 60L45 83L45 37L88 60Z" fill="white" />
                          </g>
                        </svg>
                      </button>

                      <div className="absolute bottom-3 left-3 z-10 text-white md:bottom-12 md:left-12">
                        <h4 className="text-xs font-bold leading-none md:text-[25px]">
                          {story.label}
                        </h4>
                        <p className="text-xs font-light leading-none md:text-[25px]">
                          {story.author}
                        </p>
                      </div>

                      <Image
                        src={story.banner}
                        alt={story.label}
                        className="pointer-events-none size-full object-cover"
                      />
                      <div className="pointer-events-none absolute inset-0 size-full bg-[#2A333D]/50" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="mb-11 mt-6 xl:hidden">
                <div className="story-scroll-bar relative mx-auto h-px w-full max-w-[1592px] bg-[#3B4653] "></div>
              </div>
            </div>
          </div>
          <div className="relative z-0 hidden h-full w-full max-w-[315px] shrink-0 xl:block">
            <div className="absolute inset-0">
              <Swiper
                className="h-[682px] !w-full"
                direction="vertical"
                slidesPerView={'auto'}
                spaceBetween={24}
                //@ts-ignore
                onSwiper={setThumbsSwiper}
                freeMode={true}
                modules={[Thumbs, FreeMode, Navigation]}
                navigation={{
                  nextEl: '.gal-next',
                  prevEl: '.gal-prev'
                }}
              >
                {stories.map((story, index) => (
                  <SwiperSlide
                    key={index}
                    className="!h-[182px] border-2 border-transparent [&.swiper-slide-thumb-active]:border-white"
                  >
                    <div className="relative z-0 h-full">
                      <button className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
                        <svg
                          width="60"
                          height="60"
                          viewBox="0 0 60 60"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g opacity="0.8">
                            <circle cx="30" cy="30" r="29" stroke="white" strokeWidth="2" />
                            <path d="M44 29.999L22.5 41.499L22.5 18.499L44 29.999Z" fill="white" />
                          </g>
                        </svg>
                      </button>
                      <h4 className="absolute bottom-0 left-0 z-10 p-3.5 text-[15px] font-bold leading-none text-white">
                        {story.label}
                      </h4>
                      <Image
                        src={story.banner}
                        alt={story.label}
                        className="pointer-events-none size-full object-cover"
                      />
                      <div className="pointer-events-none absolute inset-0 z-0 bg-[#2A333D]/50" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <button
              className="gal-next absolute bottom-0 left-0 right-0 z-50 flex h-16 w-full items-center justify-center disabled:pointer-events-none disabled:invisible disabled:opacity-0"
              style={{
                background:
                  'linear-gradient(180deg, rgba(30, 36, 43, 0.5) -316.41%, #1E242B 100%), linear-gradient(0deg, rgba(42, 51, 61, 0.50) 0%, rgba(42, 51, 61, 0.50) 100%) no-repeat'
              }}
            >
              <svg
                width="23"
                height="13"
                viewBox="0 0 23 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 2.99976L10.5965 10.5962C11.157 11.1567 12.0657 11.1567 12.6262 10.5962L20.2227 2.99976"
                  stroke="white"
                  strokeWidth="3.76593"
                  strokeLinecap="square"
                />
              </svg>
            </button>

            <button
              className="gal-prev absolute left-0 right-0 top-0 z-50 flex h-16 w-full items-center justify-center disabled:pointer-events-none disabled:invisible disabled:opacity-0"
              style={{
                background:
                  'linear-gradient(0deg, rgba(30, 36, 43, .5) -316.41%, #1E242B 100%), linear-gradient(0deg, rgba(42, 51, 61, 0.50) 0%, rgba(42, 51, 61, 0.50) 100%) no-repeat'
              }}
            >
              <svg
                width="23"
                height="13"
                viewBox="0 0 23 13"
                className="rotate-180"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 2.99976L10.5965 10.5962C11.157 11.1567 12.0657 11.1567 12.6262 10.5962L20.2227 2.99976"
                  stroke="white"
                  strokeWidth="3.76593"
                  strokeLinecap="square"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
