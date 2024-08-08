'use client';

import { ArrowUpRight } from 'lucide-react';
import 'swiper/css';
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
    <section className="bg-[#29313A] px-10 pb-10 pt-11">
      <div className="mx-auto w-full max-w-[1560px]">
        <Swiper slidesPerView={4} spaceBetween={52} className="mb-15">
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
                <p className="text-xl font-light leading-none">{review.time}</p>
              </div>
              <p className="mb-4 text-xl leading-normal">{review.description}</p>
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
        <div className="mx-auto w-full max-w-[1068px] text-center text-base font-thin leading-none text-white">
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
