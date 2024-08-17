import Image from 'next/image';

import e1 from './e-1.png';

export function KneeHipReplacement() {
  return (
    <section className="my-36 px-5">
      <div className="mx-auto w-full max-w-[1374px]">
        <h2 className="mx-auto mb-9 max-w-[749px] text-center text-[45px] font-bold leading-none text-white">
          Why Knee and Hip Replacement May Not Be All It’s Cracked up to Be
        </h2>

        <div className="flex items-center justify-between">
          <div className="w-full max-w-[688px]">
            <p className="text-[25px] font-light leading-tight text-white">
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
          </div>
          <div className="w-full max-w-[586px]">
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
