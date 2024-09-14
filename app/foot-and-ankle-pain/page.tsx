import { Metadata } from 'next';

import { CollapseContent } from 'components/sections/collapse-content';
import { Disclaimer } from 'components/sections/disclaimer';
import { PainHero } from 'components/sections/pain-hero';
import { PatienceStories } from 'components/sections/patience-stories';
import { ProcedureWork } from 'components/sections/procedure-work';
import { RegenexxProcedure } from 'components/sections/regenexx-procedure';
import { Reviews } from 'components/sections/reviews';

import anklepain from './ankle-pain.png';
import background from './foot-ankle-bg.png';

export const metadata: Metadata = {
  title: 'Foot and Ankle Pain',
  description: 'Page Description'
};

export default function Page() {
  return (
    <main>
      <PainHero background={background} backgroundImageClassess="object-[70%_0%]" />
      <RegenexxProcedure
        titleClasses="mx-auto w-full max-w-[1091px]"
        title={
          <>
            Regenexx® Procedures <span className="text-primary">for Foot & Ankle Conditions </span>
          </>
        }
        image={anklepain}
      >
        <h4 className="mb-6 text-lg font-bold leading-none text-white lg:text-[25px]">
          Regenexx® Procedures
        </h4>
        <p className="text-balance text-lg font-light leading-tight text-white lg:text-[25px]">
          Orthopedic procedures are non-surgical injection-based procedures for people suffering
          from foot and ankle injuries, arthritis, or other conditions that cause pain. These
          procedures utilize concentrated repair cells that are obtained from your own bone marrow
          or blood to promote your body’s own natural ability to heal.
          <br />
          <br />
          Current surgical treatment options for common ankle injuries and arthritis, include ankle
          arthroscopy to “clean up” damaged cartilage, fusion of ankle bones where cartilage has
          been lost, and tendon grafts screwed in place to strengthen loose connections between
          bones. All are painful and are often not be effective in the long run. These surgeries
          typically involve a painful post-surgical recovery with a lengthy rehab period to restore
          strength and mobility to the ankle. Regenexx may help reduce pain and improve function for
          those with foot or ankle pain due to injury or arthritis eliminating the need for these
          invasive surgeries.
        </p>
      </RegenexxProcedure>
      <CollapseContent />
      <RegenexxProcedure
        className="bg-transparent pb-32 pt-0"
        contentOrder={'first'}
        videoBanner={anklepain}
        videoUrl="https://youtu.be/U8SygxP4clg?si=VrPyjKlz54xCatXj"
      >
        <h2 className="mb-11 text-2xl font-bold !leading-[1.1] text-white md:mb-16 md:text-[45px]">
          Considering Ankle Surgery, <br /> Fusion or Replacement?
        </h2>
        <p className="mb-11 text-balance text-lg font-light leading-tight text-white lg:mb-32 lg:text-[25px]">
          As an alternative to surgery and the long recuperative period involved, tears to Foot and
          Ankle tendons and ligaments and Ankle Arthritis can often be treated with the healing
          agents from your own body, promoting your body’s ability to do its natural job of healing.{' '}
          <br />
          <br /> Regenexx Procedures may help alleviate pain and improve function with a highly
          specialized, non-surgical, precise image-guided injection procedure. Patients are often
          encouraged to walk the same day, and most experience little downtime from the procedure.
        </p>
        <h2 className="mb-11 text-2xl font-bold !leading-[1.1] text-white md:mb-16 md:text-[45px]">
          Ankle Ligament Tears, <br /> Sprains and Instability
        </h2>
        <p className="text-balance text-lg font-light leading-tight text-white lg:text-[25px]">
          When the ligaments that hold the bones of the ankle joint together are partially torn or
          stretched, as in the case of a bad sprain or repeated minor sprains, they can become
          painful, loose, and weak. This changes how you walk, putting painful stress on other
          joints of the foot, as well as making it more likely that you will sprain the ankle again.
          This leads to a cycle of chronic pain and instability.
        </p>
      </RegenexxProcedure>

      <Reviews />
      <ProcedureWork />
      <PatienceStories />
      <Disclaimer />
    </main>
  );
}
