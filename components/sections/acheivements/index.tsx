import { ArrowUpRight } from 'lucide-react';

import Image from 'next/image';
import Link from 'next/link';

import background from './background.png';
import hip_pain from './hip-pain.png';
import knee_pain from './knee-pain.png';
import neck_pain from './neck-pain.png';
import shoulder_pain from './shoulder-pain.png';

const pains = [
  {
    label: 'Knee Pain',
    href: '/knee-pain',
    background: knee_pain
  },
  {
    label: 'Hip Pain',
    href: '/hip-pain',
    background: hip_pain
  },
  {
    label: 'Shoulder Pain',
    href: '/shoulder-pain',
    background: shoulder_pain
  },
  {
    label: 'Neck Pain',
    href: '#',
    background: neck_pain
  }
];

export function Acheivements() {
  return (
    <section className="px-6 pb-12 pt-7">
      <div className="mx-auto w-full max-w-[1920px] px-32">
        <div className="ml-auto flex w-full max-w-[1578px] items-start gap-12">
          <div className="w-full max-w-[1128px] border-t border-t-[#3B4653] pt-12">
            <div className="mb-16 flex items-start justify-between text-white">
              <div className="w-full max-w-[141px] text-center">
                <h2 className="mb-7 font-primary text-[45px] font-bold leading-none">521+</h2>
                <p className="text-[17px] font-light uppercase leading-none -tracking-0.02em">
                  patience we helped
                </p>
              </div>
              <div className="block h-10 w-px bg-[#3B4653]" />
              <div className="w-full max-w-[141px] text-center">
                <h2 className="mb-7 font-primary text-[45px] font-bold leading-none">7+</h2>
                <p className="text-[17px] font-light uppercase leading-none -tracking-0.02em">
                  skilled doctors
                </p>
              </div>
              <div className="block h-10 w-px bg-[#3B4653]" />
              <div className="w-full max-w-[141px] text-center">
                <h2 className="mb-7 font-primary text-[45px] font-bold leading-none">3+</h2>
                <p className="text-[17px] font-light uppercase leading-none -tracking-0.02em">
                  locations
                </p>
              </div>
              <div className="block h-10 w-px bg-[#3B4653]" />
              <div className="w-full max-w-[141px] text-center">
                <h2 className="mb-7 font-primary text-[45px] font-bold leading-none">3</h2>
                <p className="text-[17px] font-light uppercase leading-none -tracking-0.02em">
                  BUSINESS
                  <br />
                  HUBS
                </p>
              </div>
            </div>
            <div className="relative z-0 h-[438px] px-11 pt-[74px]">
              <div className="w-full max-w-[674px]">
                <p className="mb-7 flex h-12 w-fit items-center justify-center bg-white px-7 text-[21px] font-medium uppercase text-[#1E242B]">
                  consultation
                </p>

                <h3 className="mb-3.5 text-[27px] font-bold uppercase leading-none text-white">
                  regenerative, orthopedics and spine.
                </h3>
                <p className="mb-5 text-[27px] font-light capitalize leading-none text-white">
                  learn more about non-surgical orthopedic procedures for joint injuries, arthritis,
                  and spine pain.
                </p>
                <Link
                  href="#"
                  className="flex h-10 w-fit items-center justify-center gap-1.5 bg-primary px-6 text-sm font-bold uppercase -tracking-0.02em text-white"
                >
                  <span>schedule APPOINTMENT</span>
                  <ArrowUpRight className="size-4.5 shrink-0 text-current" />
                </Link>
              </div>

              {/* Background */}
              <div className="pointer-events-none absolute inset-0 -z-10 bg-[#2A333D]/50" />
              <Image
                src={background}
                alt="background"
                className="pointer-events-none absolute inset-0 -z-20 size-full object-cover"
              />
            </div>
          </div>
          <div className="w-full max-w-[401px]">
            <Link
              href="#"
              className="relative z-0 mb-14 flex h-16 w-full items-center justify-center gap-5 bg-[#485869] px-5 text-[23px] font-black uppercase text-white"
              style={{ boxShadow: '8px 8px #2A333D' }}
            >
              <span>LET’s TALK</span>
              <ArrowUpRight className="-mr-9 size-5.5" />
            </Link>

            <div>
              {pains.map((pain, index) => (
                <div
                  key={index}
                  className="group relative z-0 flex h-[131px] items-center justify-center border-b-4 border-white"
                  style={{ filter: 'drop-shadow(0px 0px 45.7911px rgba(145, 159, 176, 0.28))' }}
                >
                  <div className="flex w-full max-w-[235px] items-center justify-end gap-5">
                    <p className="text-3xl font-extrabold -tracking-0.02em text-white">
                      {pain.label}
                    </p>
                    <svg
                      className="shrink-0"
                      width="19"
                      height="18"
                      viewBox="0 0 19 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.58339 8.86741L16.5237 8.86741M11.1621 2.43342L16.8378 8.10916C17.2566 8.52793 17.2566 9.20689 16.8378 9.62566L11.1621 15.3014"
                        stroke="white"
                        strokeOpacity="0.3"
                        strokeWidth="3.21341"
                        strokeLinecap="square"
                      />
                    </svg>
                  </div>
                  <Image
                    src={pain.background}
                    alt={pain.label}
                    className="pointer-events-none absolute inset-0 -z-20 size-full object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 -z-10 bg-dark-1E242B bg-opacity-50 transition-all group-hover:bg-opacity-80" />
                  <Link href={pain.href} className="absolute inset-0 z-10 block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
