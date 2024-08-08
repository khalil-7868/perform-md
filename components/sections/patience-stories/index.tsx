'use client';

import { useState } from 'react';
import 'swiper/css';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
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
    banner: slide1
  },
  {
    label: 'IFBB Pro Comeback Story',
    author: 'Martin Fuentes (Regenexx)',
    banner: slide2
  },
  {
    label: 'Meniscus tear Recovery without surgery',
    author: 'Martin Fuentes (Regenexx)',
    banner: slide3
  },
  {
    label: 'Meniscus tear Recovery without surgery',
    author: 'Martin Fuentes (Regenexx)',
    banner: slide4
  },
  {
    label: 'Meniscus tear Recovery without surgery',
    author: 'Martin Fuentes (Regenexx)',
    banner: slide3
  },
  {
    label: 'Meniscus tear Recovery without surgery',
    author: 'Martin Fuentes (Regenexx)',
    banner: slide4
  },
  {
    label: 'Meniscus tear Recovery without surgery',
    author: 'Martin Fuentes (Regenexx)',
    banner: slide3
  },
  {
    label: 'Meniscus tear Recovery without surgery',
    author: 'Martin Fuentes (Regenexx)',
    banner: slide4
  }
];

export function PatienceStories() {
  const [thumbsSwiper, setThumbsSwiper] = useState();
  return (
    <section className="px-5 pb-32">
      <div className="mx-auto w-full max-w-[1595px]">
        <h2 className="mb-32 text-center text-[45px] font-bold leading-none text-white">
          Patient Stories
        </h2>
        <div className="flex h-[682px] w-full gap-6">
          <div className="size-full max-w-[1256px]">
            <Swiper
              className="h-full"
              modules={[Thumbs, FreeMode]}
              thumbs={{ swiper: thumbsSwiper }}
            >
              {stories.map((story, index) => (
                <SwiperSlide key={index}>
                  <div className="relative z-0 h-full">
                    <button className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
                      <svg
                        width="120"
                        height="120"
                        viewBox="0 0 120 120"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.8">
                          <circle cx="60" cy="60" r="58" stroke="white" stroke-width="4" />
                          <path d="M88 60L45 83L45 37L88 60Z" fill="white" />
                        </g>
                      </svg>
                    </button>

                    <div className="absolute bottom-12 left-12 z-10 text-white">
                      <h4 className="text-[25px] font-bold leading-none">{story.label}</h4>
                      <p className="text-[25px] font-light leading-none">{story.author}</p>
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
          </div>
          <div className="relative z-0 size-full max-w-[315px]">
            <Swiper
              className="h-[682px]"
              direction="vertical"
              slidesPerView={'auto'}
              spaceBetween={24}
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
                          <circle cx="30" cy="30" r="29" stroke="white" stroke-width="2" />
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
