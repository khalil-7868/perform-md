import { ArrowUpRight } from 'lucide-react';

import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import bg from './cta-bg.jpg';

interface Props {
  title?: string;
  description?: string;
  background?: StaticImageData;
}

export function CTA(props: Props) {
  const {
    title = 'Return to the activities that make you happy, without surgery!',
    description = 'learn more about non-surgical orthopedic procedures for joint injuries, arthritis, and spine pain.',
    background = bg
  } = props;
  return (
    <section>
      <div className="relative z-0 px-10 py-10 md:py-[117px]">
        <div className="mx-auto w-full max-w-[749px] text-center">
          <h2 className="text-2xl font-bold !leading-none text-white md:text-[45px]">{title}</h2>
          <p className="mt-5 text-base font-light capitalize text-white md:mb-5 md:text-[27px] md:leading-none">
            {description}
          </p>
          <div className="hidden items-center justify-center gap-4.5 md:flex">
            <Link
              href="tel:+18888282131"
              className="flex h-10 items-center justify-center gap-1.5 bg-white px-6 text-sm font-bold uppercase -tracking-0.02em text-[#2A333D]"
            >
              <span>Give us a call</span>
              <ArrowUpRight className="size-4.5 shrink-0 text-current" />
            </Link>
            <Link
              href="https://keap.page/bzc536/candidate-form-landing-page.html"
              target="_blank"
              className="flex h-10 items-center justify-center gap-1.5 bg-primary px-6 text-sm font-bold uppercase -tracking-0.02em text-white"
            >
              <span>schedule APPOINTMENT</span>
              <ArrowUpRight className="size-4.5 shrink-0 text-current" />
            </Link>
          </div>
        </div>

        <Image
          src={background}
          alt="background"
          className="pointer-events-none absolute inset-0 -z-20 size-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0 -z-10 size-full bg-[#2A333D]/50" />
      </div>
      <div className="mt-6 flex flex-col items-center justify-center gap-3.5 px-4 sm:flex-row md:hidden">
        <Link
          href="tel:+18888282131"
          className="flex h-10 w-full items-center justify-center gap-1.5 bg-white px-6 text-sm font-bold uppercase -tracking-0.02em text-[#2A333D] sm:w-fit"
        >
          <span>Give us a call</span>
          <ArrowUpRight className="size-4.5 shrink-0 text-current" />
        </Link>
        <Link
          href="https://keap.page/bzc536/candidate-form-landing-page.html"
          target="_blank"
          className="flex h-10 w-full items-center justify-center gap-1.5 bg-primary px-6 text-sm font-bold uppercase -tracking-0.02em text-white sm:w-fit"
        >
          <span>schedule APPOINTMENT</span>
          <ArrowUpRight className="size-4.5 shrink-0 text-current" />
        </Link>
      </div>
    </section>
  );
}
