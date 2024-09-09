'use client';

import 'swiper/css';
import { Navigation, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Image from 'next/image';
import Link from 'next/link';

import { cn } from 'lib/utils';

import spine_img from './back-shoulder-pain.png';
import elbow_pain from './elbow-pain.png';
import foot_and_ankle_pain from './foot-and-ankle-pain.png';
import hand_and_wrist_pain from './hand-and-wrist-pain.png';
import hip_pain from './hip-pain.png';
import knee_pain from './knee-pain.png';
import shoulder_img from './shoulder-pain.png';
import wrist_pain from './wrist-pain.png';

const servicesData = [
  {
    title: 'Knee',
    banner: knee_pain,
    link: '/knee-pain'
  },
  {
    title: 'Hip',
    banner: hip_pain,
    link: '/hip-pain'
  },
  {
    title: 'Shoulder',
    banner: shoulder_img,
    link: '/shoulder-pain'
  },
  {
    title: 'Wrist',
    banner: wrist_pain,
    link: '/hand-and-wrist-pain'
  },
  {
    title: 'Foot & Ankle',
    banner: foot_and_ankle_pain,
    link: '/foot-and-ankle-pain'
  },
  {
    title: 'Hand & Wrist',
    banner: hand_and_wrist_pain,
    link: '/hand-and-wrist-pain'
  },
  {
    title: 'Elbow',
    banner: elbow_pain,
    link: '/elbow-pain'
  },
  {
    title: 'Spine',
    banner: spine_img,
    link: '/spine-pain'
  }
];

interface Props {
  title?: string;
  className?: string;
}

export function ServiceCards(props: Props) {
  return (
    <section
      className={cn('overflow-hidden bg-[#2A333D] pb-9 pt-6 md:pb-14 md:pt-11', props.className)}
    >
      {props.title && (
        <div className="mb-16 px-5 md:mb-32">
          <h2 className="text-center text-2xl font-bold !leading-none text-white md:text-[45px]">
            {props.title}
          </h2>
        </div>
      )}
      <div className="relative z-0 px-4 md:px-10 lg:px-20">
        <div className="mx-auto mb-10 w-full max-w-[1920px] md:mb-20">
          <Swiper
            slidesPerView={1.4}
            modules={[Scrollbar, Navigation]}
            scrollbar={{
              el: '.service-scroll-bar',
              draggable: true,
              dragClass: 'bg-primary absolute h-0.5 left-0 top-0'
            }}
            navigation={{
              prevEl: '.service-prev',
              nextEl: '.service-next'
            }}
            spaceBetween={23}
            className="!overflow-visible"
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              1100: {
                slidesPerView: 3,
                spaceBetween: 46
              },
              1440: {
                slidesPerView: 4
              }
            }}
          >
            {servicesData.map((service, index) => (
              <SwiperSlide
                key={index}
                className="group border-4 border-transparent transition-all duration-200 hover:border-primary md:border-8 "
              >
                <div className="relative z-0 h-[253px] w-full border-b-8 border-b-white transition-all group-hover:border-b-primary md:h-[486px]">
                  <div
                    className="absolute inset-x-0 top-0 z-10 flex h-[134px] items-start justify-between gap-5 pb-5 pl-4.5 pr-6 pt-4.5"
                    style={{
                      backgroundImage:
                        'linear-gradient(180deg, rgba(42, 51, 61, 0.64) 46.66%, rgba(42, 51, 61, 0.00) 100%)'
                    }}
                  >
                    <h3 className="text-2xl leading-[.9] -tracking-0.02em text-white md:text-[42px] md:-tracking-[0.841px]">
                      <strong className="font-extrabold">{service.title}</strong>
                      <span className="block font-light">Pain?</span>
                    </h3>
                    <svg
                      className="size-4 shrink-0 md:size-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                    >
                      <path
                        d="M5.30493 35.023L34.2789 6.04908M9.76246 3.82031H33.3557C35.0965 3.82031 36.5077 5.23149 36.5077 6.97226V30.5655"
                        stroke="white"
                        strokeOpacity="0.2"
                        strokeWidth="6.3039"
                        strokeLinecap="square"
                      />
                    </svg>
                  </div>

                  <Image
                    src={service.banner}
                    alt={service.title + ' Pain'}
                    className="pointer-events-none size-full object-cover"
                  />

                  <p className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 cursor-pointer items-end gap-2 text-xs font-light leading-[.8] tracking-[-0.504px] text-white opacity-0 transition-all hover:underline group-hover:opacity-100 md:bottom-8 md:text-[25.22px]">
                    <span>Learn More</span>
                    <svg
                      className="shrink-0"
                      width="15"
                      height="16"
                      viewBox="0 0 15 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.13519 4.5945L9.37185 7.83116C9.61066 8.06997 9.61066 8.45715 9.37185 8.69596L6.13519 11.9326"
                        stroke="white"
                        strokeWidth="1.22302"
                        strokeLinecap="round"
                      />
                    </svg>
                  </p>
                  <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[132px] w-full"
                    style={{
                      backgroundImage:
                        'linear-gradient(0deg, rgba(19, 23, 28, 0.64) 0%, rgba(42, 51, 61, 0.00) 100%)'
                    }}
                  />
                  <Link href={service.link} className="absolute inset-0 z-20" />
                  <div className="absolute -bottom-4 z-0 h-2 bg-white opacity-0 transition-all group-hover:bg-primary group-hover:opacity-100 md:inset-x-0 md:h-4" />
                  <div className="pointer-events-none absolute inset-0 z-0 bg-[#2A333D]/50" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <button className="service-prev absolute left-8 top-1/2 z-50 hidden size-20 -translate-y-1/2 items-center justify-center rounded-full transition-all hover:bg-primary disabled:cursor-not-allowed disabled:bg-gray-600 disabled:brightness-50 disabled:hover:bg-gray-600 md:flex">
          <svg
            width="34"
            height="61"
            className="size-10"
            viewBox="0 0 34 61"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26.2878 7.82104L6.11624 27.9926C4.62792 29.481 4.62792 31.894 6.11624 33.3823L26.2878 53.5539"
              stroke="white"
              strokeWidth="10"
              strokeLinecap="square"
            />
          </svg>
        </button>

        <button className="service-next absolute right-8 top-1/2 z-50 hidden size-20 -translate-y-1/2 items-center justify-center rounded-full transition-all hover:bg-primary disabled:cursor-not-allowed disabled:bg-gray-600 disabled:brightness-50 disabled:hover:bg-gray-600 md:flex">
          <svg
            width="34"
            height="61"
            className="size-10"
            viewBox="0 0 34 61"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.25661 53.5505L27.4282 33.3789C28.9165 31.8906 28.9165 29.4776 27.4282 27.9893L7.25661 7.81769"
              stroke="white"
              strokeWidth="10"
              strokeLinecap="square"
            />
          </svg>
        </button>
      </div>
      <div className="px-5">
        <div className="service-scroll-bar relative mx-auto h-px w-full max-w-[1592px] bg-[#3B4653] "></div>
      </div>
    </section>
  );
}
