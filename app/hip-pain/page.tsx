import { Metadata } from 'next';

import { CollapseContent } from 'components/sections/collapse-content';
import { Disclaimer } from 'components/sections/disclaimer';
import { PainHero } from 'components/sections/pain-hero';
import { PatienceStories } from 'components/sections/patience-stories';
import { ProcedureWork } from 'components/sections/procedure-work';
import { RegenexxProcedure } from 'components/sections/regenexx-procedure';
import { Reviews } from 'components/sections/reviews';

import background from './full-shot-old-people-stretching-together.png';
import hippain from './hip-pain.png';

export const metadata: Metadata = {
  title: 'Hip Pain',
  description: 'Page Description'
};

export default function Page() {
  return (
    <main>
      <PainHero background={background} backgroundImageClassess="object-[55%_0] lg:object-center" />
      <RegenexxProcedure
        title={
          <p className="mx-auto w-full max-w-[1158px]">
            Regenexx® Procedures <span className="text-primary">for Hip Injuries </span>
            <br className="hidden lg:inline-block" />
            Arthritis, Bursitis and Other Degenerative Conditions!
          </p>
        }
        image={hippain}
      >
        <h4 className="mb-6 text-lg font-bold leading-none text-white lg:text-[25px]">
          Regenexx® Procedures
        </h4>
        <p className="text-balance text-lg font-light leading-tight text-white lg:text-[25px]">
          Are non-surgical injection-based procedures for people suffering from hip pain due to
          common injuries, Avascular Necrosis (AVN, Osteonecrosis), Hip Bursitis, Hip Labral Tears,
          Hip Tendonitis, or degenerative problems like Arthritis related to the hip joint. These
          procedures utilize concentrated repair cells that are obtained from your own bone marrow
          or blood to promote your body’s own natural ability to heal.
          <br />
          <br />
          Regenexx regenerative orthopedic procedures offer a non-surgical treatment option for many
          patients who are considering elective surgeries to treat their hip pain. Accurate
          diagnosis is key as Hip pain is often referred from other areas. Regenexx procedures are
          designed to help reduce pain and improve function with precise highly specific
          image-guided procedures to promote the body’s ability to heal itself naturally.
        </p>
      </RegenexxProcedure>
      <CollapseContent />
      <RegenexxProcedure
        className="bg-transparent pb-20 pt-0 lg:pb-32"
        title={
          <span className="mx-auto block max-w-[679px]">
            Hip Surgery and Replacement vs. Regenexx Procedures
          </span>
        }
        contentOrder={'first'}
        videoBanner={hippain}
        videoUrl="https://youtu.be/JGOuzorrhm8?si=eVoTPXY0GAXGbSDS"
      >
        <p className="text-balance text-lg font-light leading-tight text-white lg:text-[25px]">
          Hip pain can be very difficult to deal with on a day-to-day basis and traditionally
          requires long-term pain management if the problem is not corrected. Hip surgery, hip
          replacement surgery, and hip resurfacing are often the only medical options presented to a
          patient to deal with their debilitating pain. <br />
          <br /> Hip surgeries are typically very traumatic and are often followed by months of pain
          and discomfort while attempting to redevelop strength and mobility. Regenexx patients are
          typically encouraged to walk the same day if possible, and most experience little downtime
          from the procedure. Watch the videos below to learn more.
        </p>
      </RegenexxProcedure>

      <Reviews />
      <ProcedureWork />
      <PatienceStories />
      <Disclaimer />
    </main>
  );
}
