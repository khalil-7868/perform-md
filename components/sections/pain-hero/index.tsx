import { PhoneCall, User } from 'lucide-react';
import { CSSProperties } from 'react';

import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import { cn } from 'lib/utils';

interface Props {
  background: StaticImageData;
  gradientLayerStyles?: CSSProperties;
  backgroundImageClassess?: string;
}

export function PainHero(props: Props) {
  return (
    <section className="relative z-0 flex h-[728px] w-full items-end px-4 py-10 md:h-[950px] md:items-center md:px-20 lg:px-[163px]">
      <div className="w-full md:max-w-[564px]">
        <h1 className="mb-7 text-[35px] font-bold !leading-none text-white md:mb-11 md:text-[45px]">
          Get back to the activities you love, without surgery.
        </h1>
        <p className="mb-7 w-full max-w-[500px] text-lg font-light text-white md:mb-10 md:text-[27px] md:leading-none">
          Receive a Regenexx® Patient Info Packet by email to learn more about our regenerative
          orthopedic procedures.
        </p>
        <form action="#" className="grid grid-cols-1 gap-4.5 sm:grid-cols-2 md:gap-x-4 md:gap-y-7">
          <input
            type="text"
            placeholder="first Name *"
            className="block h-12 bg-white px-5 text-sm text-dark-1E242B placeholder:capitalize placeholder:text-[#8E8E8E] sm:text-base"
          />
          <input
            type="text"
            placeholder="Last Name *"
            className="block h-12 bg-white px-5 text-sm text-dark-1E242B placeholder:capitalize placeholder:text-[#8E8E8E] sm:text-base"
          />
          <input
            type="email"
            placeholder="Email *"
            className="col-span-full block h-12 bg-white px-5 text-sm text-dark-1E242B placeholder:capitalize placeholder:text-[#8E8E8E] sm:text-base"
          />
          <button
            type="submit"
            className="col-span-full block h-12 bg-primary px-5 text-sm font-bold uppercase -tracking-0.02em text-white sm:text-base"
          >
            send
          </button>
        </form>

        <div className="mt-11 flex items-center justify-between gap-5 sm:justify-start sm:gap-12">
          <Link
            href="tel:7028307216"
            className="flex items-center gap-2 text-sm text-white sm:text-xl"
          >
            <PhoneCall className="size-4 text-primary sm:size-6" />
            <span>Call 702-830-7216</span>
          </Link>
          <Link
            href="/become-candidate"
            className="flex items-center gap-2 text-sm text-white sm:text-xl"
          >
            <User className="size-4 text-primary sm:size-6" />
            <span>Are you a candidate? </span>
          </Link>
        </div>
      </div>

      <Image
        src={props.background}
        alt="background"
        className={cn(
          'pointer-events-none absolute inset-0 -z-30 size-full object-cover',
          props.backgroundImageClassess
        )}
      />
      <div className="absolute inset-0 -z-20 size-full bg-[#2A333D]/50" />
      {props.gradientLayerStyles && (
        <div className="absolute inset-0 -z-10 size-full" style={props.gradientLayerStyles} />
      )}
    </section>
  );
}
