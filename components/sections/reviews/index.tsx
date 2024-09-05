'use client';

import { ArrowUpRight } from 'lucide-react';
import 'swiper/css';
import { Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Link from 'next/link';

import { Google } from 'components/icons/google';
import { Star } from 'components/icons/star';

const reviews = [
  {
    description:
      'Dr. Peter Michael and the team at Perform MD worked wonders for my chronic wrist pain. Their regenerative treatments brought relief I never thought possible. Grateful for their expertise!',
    time: '1 year Ago'
  },
  {
    description:
      'Michael is a miracle worker! Thanks to Perform MD, my shoulder pain is finally a thing of the past. The personalized care and advanced treatments made all the difference.',
    time: '6 months Ago'
  },
  {
    description:
      "Kudos to Perform MD for their incredible spine care! Dr. Peter Michael's expertise eased my chronic neck pain. Grateful for the attentive staff and life-changing treatments.",
    time: '3 weeks Ago'
  },
  {
    description:
      "If you're struggling with neck pain, look no further than Perform MD. Dr. Michael and his team are dedicated professionals who genuinely care. Their treatments worked wonders for me!",
    time: '3 weeks Ago'
  }
];

export function Reviews() {
  return (
    <section className="bg-[#29313A] px-4 pb-10 pt-11 sm:px-10">
      <div className="mx-auto w-full max-w-[1560px]">
        <Swiper
          slidesPerView={1}
          spaceBetween={24}
          breakpoints={{
            1280: {
              slidesPerView: 4,
              spaceBetween: 52
            },
            850: {
              slidesPerView: 3,
              spaceBetween: 32
            },
            550: {
              slidesPerView: 2,
              spaceBetween: 32
            }
          }}
          modules={[Scrollbar]}
          scrollbar={{
            el: '.reviews-scroll-bar',
            draggable: true,
            dragClass: 'bg-primary absolute h-0.5 left-0 top-0'
          }}
          className="mb-6 lg:mb-15"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index} className="text-white">
              <div className="mb-5 flex items-center gap-3.75">
                <ul className="flex items-center gap-0.5 text-[#76C0D8]">
                  <li>
                    <Star />
                  </li>
                  <li>
                    <Star />
                  </li>
                  <li>
                    <Star />
                  </li>
                  <li>
                    <Star />
                  </li>
                  <li>
                    <Star />
                  </li>
                </ul>
                <p className="text-base font-light leading-none md:text-xl">{review.time}</p>
              </div>
              <p className="mb-4 text-base !leading-normal lg:text-xl">{review.description}</p>
              <div className="flex items-center gap-1">
                <Google className="size-7 shrink-0" />
                <Link href="#" className="flex items-center text-base font-medium">
                  <span>Google Reviews</span>
                  <ArrowUpRight className="size-3.5 shrink-0 text-current" />
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="mb-11 mt-6">
          <div className="reviews-scroll-bar relative mx-auto h-px w-full max-w-[1592px] bg-[#3B4653] "></div>
        </div>
        <div className="mx-auto w-full max-w-[1068px] text-center text-[10px] font-thin text-white lg:text-base lg:leading-none">
          <p>
            *DISCLAIMER: Like all medical procedures, Perform MD regenerative orthopedics and spine®
            Procedures have a success and failure rate. Patient reviews and testimonials on this
            site should not be interpreted as a statement on the effectiveness of our treatments for
            anyone else.
          </p>
        </div>
      </div>
    </section>
  );
}
