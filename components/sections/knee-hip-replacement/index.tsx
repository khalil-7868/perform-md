import Image from 'next/image';
import Link from 'next/link';

import e1 from './e-1.png';

export function KneeHipReplacement() {
  return (
    <section className="my-16 px-5 md:my-36">
      <div className="mx-auto w-full max-w-[1374px]">
        <h2 className="mx-auto mb-16 max-w-[749px] text-center text-2xl font-bold leading-none text-white md:mb-9 md:text-[45px]">
          Why Knee and Hip Replacement May Not Be All It’s Cracked up to Be
        </h2>

        <div className="flex flex-col items-center justify-between gap-11 lg:flex-row lg:gap-0">
          <div className="w-full max-w-[688px]">
            <p className="text-lg font-light leading-tight text-white md:text-[25px]">
              Knee and hip replacement surgeries come with many risks and complications. Several
              years ago we queried the National Sampling System for Medicare and found that in the
              year 2008 alone, there were 17,500 serious complications related to knee replacement
              surgery resulting in 5,000 patient deaths.
              <br />
              <br />
              If joint replacement is something you are considering, please take the time to read
              this report. These 10 facts come from the Regenexx website. Our goal is to provide
              information that will help you make the right choice for you.
            </p>
            <Link
              href="#"
              className="relative z-0 mt-11 flex h-10 w-full items-center justify-center rounded bg-primary px-8 text-sm font-bold uppercase -tracking-0.02em text-white sm:max-w-[234px]"
            >
              Download Ebook
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="absolute right-5 top-1/2 -translate-y-1/2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.93945 14.1195L13.1707 6.88828M7.05196 6.33203H12.9403C13.3748 6.33203 13.727 6.68423 13.727 7.11869V13.007"
                  stroke="white"
                  strokeWidth="1.57332"
                  strokeLinecap="round"
                />
              </svg>
            </Link>
          </div>
          <div className="order-first w-full max-w-[586px] lg:order-none">
            <Image
              src={e1}
              alt="Regenexx"
              className="block w-full max-w-[536px] object-contain"
              style={{ filter: 'drop-shadow(0px 4px 120px rgba(80, 195, 233, 0.2))' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
