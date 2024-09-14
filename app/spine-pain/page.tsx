import { Metadata } from 'next';

import Link from 'next/link';

import { CollapseContent } from 'components/sections/collapse-content';
import { Disclaimer } from 'components/sections/disclaimer';
import { PainHero } from 'components/sections/pain-hero';
import { PatienceStories } from 'components/sections/patience-stories';
import { ProcedureWork } from 'components/sections/procedure-work';
import { RegenexxProcedure } from 'components/sections/regenexx-procedure';
import { Reviews } from 'components/sections/reviews';

import background from './spine-pain-bg.png';
import spineThumb from './spine-video-thumb.png';

export const metadata: Metadata = {
  title: 'Spine Pain',
  description: 'Page Description'
};

export default function Page() {
  return (
    <main>
      <PainHero background={background} />
      <RegenexxProcedure
        videoBanner={spineThumb}
        videoUrl="https://youtu.be/ZuKckDE1ntQ?si=1rBzgwZFlCUJN2km"
        contentOrder="first"
        titleClasses="lg:hidden"
        title={<>Regenexx® Non-Surgical Procedures for Spine-Related Conditions.</>}
      >
        <h2 className="mb-16 hidden text-2xl font-bold !leading-[1.1] text-white md:text-[45px] lg:block">
          Regenexx® Non-Surgical Procedures for Spine-Related Conditions.
        </h2>

        <p className="text-balance text-lg font-light leading-tight text-white lg:text-[25px]">
          The board-certified, highly skilled physicians who are part of the Regenexx Network have a
          range of regenerative orthopedic procedures developed to help reduce pain, improve
          function and avoid spine surgery and the damaging side effects of epidural steroid
          injections. These highly specific, precise image-guided injection procedures use the
          healing agents from your own body to promote the body’s natural healing ability in
          treating bulging or herniated discs, degenerative conditions in the spine, and other back
          and neck conditions. <br />
          <br />
          The origin of spine pain is often misidentified which can lead to inappropriate treatment
          and unnecessary surgery. Being the pioneers of the field of Interventional Orthobiologics,
          and more than a decade and a half of experience in using these advanced Interventional
          Orthobiologics procedures for spine pain, our highly-skilled board-certified physicians
          are able to identify the most probable sources of pain and select the most appropriate
          non-surgical minimally-invasive treatment options available.
        </p>
      </RegenexxProcedure>
      <CollapseContent />
      <RegenexxProcedure
        className="bg-transparent pb-20 pt-0 lg:pb-32"
        imageClasses="object-contain max-w-[524px] drop-shadow-[0px_4px_120px_rgba(80,195,233,0.2)]"
        contentOrder={'first'}
        videoBanner={spineThumb}
        videoUrl="https://youtu.be/ZuKckDE1ntQ?si=1rBzgwZFlCUJN2km"
        titleClasses="lg:hidden"
        title={<>Regenexx Alternative to Spine Surgery or Steroid Epidural Injections</>}
      >
        <h2 className="mb-16 hidden text-2xl font-bold !leading-[1.1] text-white md:text-[45px] lg:block">
          Regenexx Alternative to Spine Surgery or Steroid Epidural Injections
        </h2>
        <p className="text-balance text-lg font-light leading-tight text-white lg:text-[25px]">
          A steroid epidural is an injection that places steroid medication around irritated or
          inflamed nerves in the spine. While they do help patients avoid surgery, epidurals use
          very high-dose steroids that can cause severe side effects and actually reduce the body’s
          ability to heal. <br />
          <br />
          Regenexx offers a variety of minimally invasive procedures that deliver ultra-precise
          spinal injections of platelet lysates (or in fewer cases, bone marrow concentrate) where
          needed, utilizing advanced imaging guidance to ensure precise placement into the injured
          area.
        </p>
        <Link
          href="#"
          className="relative z-0 mt-11 flex h-10 w-full max-w-[234px] items-center justify-center rounded bg-primary px-8 text-sm font-bold uppercase -tracking-0.02em text-white"
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
      </RegenexxProcedure>

      <Reviews />
      <ProcedureWork />
      <PatienceStories />
      <Disclaimer />
    </main>
  );
}
