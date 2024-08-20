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
    <section className={cn('overflow-hidden bg-[#2A333D] pb-14 pt-11', props.className)}>
      {props.title && (
        <div className="mb-32 px-5">
          <h2 className="text-center text-[45px] font-bold leading-none text-white">
            {props.title}
          </h2>
        </div>
      )}
      <div className="relative z-0 px-16">
        <div className="mx-auto mb-20 w-full max-w-[1338px]">
          <Swiper
            slidesPerView={3}
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
            spaceBetween={46}
            className="!overflow-visible"
          >
            {servicesData.map((service, index) => (
              <SwiperSlide
                key={index}
                className="group border-8 border-transparent transition-all duration-200 [&.swiper-slide-active]:border-primary "
              >
                <div className="relative z-0 h-[486px] w-full border-b-8 border-b-white group-[&.swiper-slide-active]:border-b-primary">
                  <div
                    className="absolute inset-x-0 top-0 z-10 flex h-[134px] items-start justify-between gap-5 pb-5 pl-4.5 pr-6 pt-4.5"
                    style={{
                      backgroundImage:
                        'linear-gradient(180deg, rgba(42, 51, 61, 0.64) 46.66%, rgba(42, 51, 61, 0.00) 100%)'
                    }}
                  >
                    <h3 className="text-[42px] leading-[.9] -tracking-[0.841px] text-white">
                      <strong className="font-extrabold">{service.title}</strong>
                      <span className="block font-light">Pain?</span>
                    </h3>
                    <svg
                      className="shrink-0"
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

                  <p className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 cursor-pointer items-end gap-2 text-[25.22px] font-light leading-[.8] tracking-[-0.504px] text-white opacity-0 hover:underline group-[&.swiper-slide-active]:opacity-100">
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
                  <div className="absolute inset-x-0 -bottom-4 z-0 h-4 bg-white opacity-0 group-[&.swiper-slide-active]:bg-primary group-[&.swiper-slide-active]:opacity-100" />
                  <div className="pointer-events-none absolute inset-0 z-0 bg-[#2A333D]/50" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <button className="service-prev absolute left-[8vw] top-1/2 z-50 -translate-y-1/2">
          <svg
            width="34"
            height="61"
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

        <button className="service-next absolute right-[8vw] top-1/2 z-50 -translate-y-1/2">
          <svg
            width="34"
            height="61"
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
