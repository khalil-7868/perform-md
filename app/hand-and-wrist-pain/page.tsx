import { Metadata } from 'next';

import { CollapseContent } from 'components/sections/collapse-content';
import { Disclaimer } from 'components/sections/disclaimer';
import { PainHero } from 'components/sections/pain-hero';
import { PatienceStories } from 'components/sections/patience-stories';
import { ProcedureWork } from 'components/sections/procedure-work';
import { RegenexxProcedure } from 'components/sections/regenexx-procedure';
import { Reviews } from 'components/sections/reviews';

import background from './hero-background.png';
import wristpain from './wrist-pain.png';

export const metadata: Metadata = {
  title: 'Hand and Wrist Pain',
  description: 'Page Description'
};

export default function Page() {
  return (
    <main>
      <PainHero background={background} />
      <RegenexxProcedure image={wristpain} contentOrder="first">
        <h2 className="mb-20 pb-1.5 text-[45px] font-bold leading-[1.1] text-white">
          Regenexx® Procedures
          <span className="text-primary">for Hand Wrist</span> & Basal Joint (Thumb) Arthritis &
          Other Conditions
        </h2>
        <p className="text-balance text-[25px] font-light leading-tight text-white">
          Advanced non-surgical, precise, image-guided, injection procedures using the healing
          agents from your own body for those who are suffering from pain or reduced range of motion
          due to basal joint / CMC arthritis, hand arthritis, or other injuries & conditions in the
          hand or wrist.
        </p>
      </RegenexxProcedure>
      <CollapseContent />
      <RegenexxProcedure
        className="bg-transparent pb-32 pt-0"
        contentOrder={'first'}
        title={
          <>
            Targeted Procedure for Thumb Basal Joint <br />
            CMC Arthritis and Other Hand / Wrist Conditions
          </>
        }
        videoBanner={wristpain}
        videoUrl="https://youtu.be/JGOuzorrhm8?si=eVoTPXY0GAXGbSDS"
      >
        <p className="mb-32 text-balance text-[25px] font-light leading-tight text-white">
          Thumb CMC/Basal Joint Arthritis or Arthritis of the Hand Joints can appear early in life.
          The constant swiveling and pivoting motions of the basal joint, at the base of the thumb,
          tends to wear it out easily. While total joint reconstruction surgery may improve the
          condition for some, new problems in the thumb joint may develop over time, causing such
          symptoms as numbness, tenderness, or reduced range of motion. <br />
          <br /> This highly specialized, precise, image guided Regenexx procedure performed only by
          very specially trained Regenexx Physicians for CMC Arthritis and other injuries and
          conditions in the hand and wrist utilizes concentrated repair cells that are obtained from
          your own bone marrow or blood to promote your body’s own natural ability to heal.
        </p>
      </RegenexxProcedure>

      <Reviews />
      <ProcedureWork />
      <PatienceStories />
      <Disclaimer />
    </main>
  );
}
