import { PhoneCall, User } from 'lucide-react';
import { CSSProperties } from 'react';

import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface Props {
  background: StaticImageData;
  gradientLayerStyles?: CSSProperties;
}

export function PainHero(props: Props) {
  return (
    <section className="relative z-0 flex h-[950px] w-full items-center px-[163px]">
      <div className="w-full max-w-[564px]">
        <h1 className="mb-11 text-[45px] font-bold leading-none text-white">
          Get back to the activities you love, without surgery.
        </h1>
        <p className="mb-10 w-full max-w-[500px] text-[27px] font-light leading-none text-white">
          Receive a Regenexx® Patient Info Packet by email to learn more about our regenerative
          orthopedic procedures.
        </p>
        <form action="#" className="grid grid-cols-2 gap-x-4 gap-y-7">
          <input
            type="text"
            placeholder="first Name *"
            className="block h-12 bg-white px-5 text-base text-dark-1E242B placeholder:capitalize placeholder:text-[#8E8E8E]"
          />
          <input
            type="text"
            placeholder="Last Name *"
            className="block h-12 bg-white px-5 text-base text-dark-1E242B placeholder:capitalize placeholder:text-[#8E8E8E]"
          />
          <input
            type="email"
            placeholder="Email *"
            className="col-span-full block h-12 bg-white px-5 text-base text-dark-1E242B placeholder:capitalize placeholder:text-[#8E8E8E]"
          />
          <button
            type="submit"
            className="col-span-full block h-12 bg-primary px-5 text-base font-bold uppercase -tracking-0.02em text-white"
          >
            send
          </button>
        </form>

        <div className="mt-11 flex items-center gap-12">
          <Link href="tel:7028307216" className="flex items-center gap-2 text-xl text-white">
            <PhoneCall className="size-6 text-primary" />
            <span>Call 702-830-7216</span>
          </Link>
          <Link href="/become-candidate" className="flex items-center gap-2 text-xl text-white">
            <User className="size-6 text-primary" />
            <span>Are you a candidate? </span>
          </Link>
        </div>
      </div>

      <Image
        src={props.background}
        alt="background"
        className="pointer-events-none absolute inset-0 -z-30 size-full object-cover"
      />
      <div className="absolute inset-0 -z-20 size-full bg-[#2A333D]/50" />
      {props.gradientLayerStyles && (
        <div className="absolute inset-0 -z-10 size-full" style={props.gradientLayerStyles} />
      )}
    </section>
  );
}
