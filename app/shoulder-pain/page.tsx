import { Metadata } from 'next';

import { CollapseContent } from 'components/sections/collapse-content';
import { Disclaimer } from 'components/sections/disclaimer';
import { PainHero } from 'components/sections/pain-hero';
import { PatienceStories } from 'components/sections/patience-stories';
import { ProcedureWork } from 'components/sections/procedure-work';
import { RegenexxProcedure } from 'components/sections/regenexx-procedure';
import { Reviews } from 'components/sections/reviews';

import background from './shoulder-hero-bg.png';
import shoulderpain from './shoulder-pain.png';

export const metadata: Metadata = {
  title: 'Shoulder Pain',
  description: 'Page Description'
};

export default function Page() {
  return (
    <main>
      <PainHero background={background} />
      <RegenexxProcedure
        title={
          <p className="mx-auto w-full max-w-[1091px]">
            Regenexx® Procedures <span className="text-primary">for Rotator Cuff Tears </span>
            <br />
            Shoulder Arthritis, and Other Shoulder Conditions
          </p>
        }
        image={shoulderpain}
      >
        <h4
          className="mb-6 
text-lg font-bold leading-none text-white lg:text-[25px]"
        >
          Regenexx® Procedures
        </h4>
        <p className="text-balance text-lg font-light leading-tight text-white lg:text-[25px]">
          Orthopedic procedures are non-surgical injection-based procedures for people suffering
          from shoulder pain due to common injuries to the shoulder and rotator cuff, Shoulder
          Labrum, as well as degenerative conditions, such as shoulder osteoarthritis. These
          procedures utilize concentrated repair cells that are obtained from your own bone marrow
          or blood to promote your body’s own natural ability to heal.
          <br />
          <br />
          Traditional options for patients suffering from these conditions include arthroscopic
          shoulder surgery to repair tears, or shoulder joint replacement. With both surgeries,
          months of rehab are required, and the patient must be aware of and prepared to take on the
          risks. Regenexx procedures are designed to help reduce pain and improve function with
          precise highly specific image-guided medical procedures to promote the body’s ability to
          heal itself naturally.
        </p>
      </RegenexxProcedure>
      <CollapseContent />
      <RegenexxProcedure
        className="bg-transparent pb-32 pt-0"
        title={
          <span className="mx-auto block max-w-[670px]">
            Regenexx Procedures for Rotator Cuff Tears
          </span>
        }
        contentOrder={'first'}
        videoBanner={shoulderpain}
        videoUrl="https://youtu.be/JGOuzorrhm8?si=eVoTPXY0GAXGbSDS"
      >
        <p className="text-balance text-lg font-light leading-tight text-white lg:text-[25px]">
          Using the healing agents from your own body to treat rotator cuff tears, shoulder
          arthritis, and other common shoulder conditions, Regenexx provides an alternative to
          invasive surgeries like rotator cuff tear surgery, shoulder labrum surgery, acromioplasty,
          and shoulder replacement. <br />
          <br /> Highly specific, precise, image-guided injections of your own cells and{' '}
          <span className="text-primary">growth factors</span> directly into the injured area
          promotes your own body’s natural ability to repair. By both mobilizing your body’s own
          healing mechanisms and eliminating the trauma of surgery and atrophy caused by
          immobilization, Regenexx has produced good outcomes in the treatment of rotator cuff
          tears, and other common shoulder injuries and degenerative conditions like shoulder
          arthritis. <br />
          <br /> We have already published a mid-term report on our randomized control trial to
          treat rotator cuff tears and the final analysis will be published soon.
        </p>
      </RegenexxProcedure>

      <Reviews />
      <ProcedureWork />
      <PatienceStories />
      <Disclaimer />
    </main>
  );
}
