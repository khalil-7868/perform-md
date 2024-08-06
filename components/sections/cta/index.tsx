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
    <section className="relative z-0 px-10 py-[117px]">
      <div className="mx-auto w-full max-w-[749px] text-center">
        <h2 className="text-[45px] font-bold leading-none text-white">{title}</h2>
        <p className="my-5 text-[27px] font-light capitalize leading-none text-white">
          {description}
        </p>
        <div className="flex items-center justify-center gap-4.5">
          <Link
            href="#"
            className="flex h-10 items-center justify-center gap-1.5 bg-white px-6 text-sm font-bold uppercase -tracking-0.02em text-[#2A333D]"
          >
            <span>Give us a call</span>
            <ArrowUpRight className="size-4.5 shrink-0 text-current" />
          </Link>
          <Link
            href="#"
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
    </section>
  );
}
