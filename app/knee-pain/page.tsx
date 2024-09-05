import { Metadata } from 'next';

import { CollapseContent } from 'components/sections/collapse-content';
import { Disclaimer } from 'components/sections/disclaimer';
import { KneeConditions } from 'components/sections/knee-conditions';
import { KneeHipReplacement } from 'components/sections/knee-hip-replacement';
import { PainHero } from 'components/sections/pain-hero';
import { PatienceStories } from 'components/sections/patience-stories';
import { ProcedureWork } from 'components/sections/procedure-work';
import { RegenexxProcedure } from 'components/sections/regenexx-procedure';
import { Reviews } from 'components/sections/reviews';

import background from './knee-pain-bg.png';
import kneepain from './knee-pain.png';

export const metadata: Metadata = {
  title: 'Knee Pain',
  description: 'Page Description'
};

export default function Page() {
  return (
    <main>
      <PainHero
        background={background}
        backgroundImageClassess="object-[70%_0] lg:object-center"
        gradientLayerStyles={{
          background: 'linear-gradient(-90deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.80) 100%)'
        }}
      />
      <RegenexxProcedure
        titleClasses="mx-auto w-full max-w-[1090px]"
        title={
          <>
            Regenexx® Procedures <span className="text-primary">for Knee Arthritis</span>
            <br className="hidden lg:inline-block" /> Meniscus Tears, Tendon & Ligament Tears,
            Overuse Injuries and Other Conditions
          </>
        }
        image={kneepain}
      >
        <h4 className="mb-6 text-lg font-bold leading-none text-white lg:text-[25px]">
          Regenexx® Procedures
        </h4>
        <p className="text-balance text-lg font-light leading-tight text-white lg:text-[25px]">
          Are non-surgical injection-based procedures for people suffering from knee pain due to
          common injuries to the knee Meniscus, ACL,  MCL, and other structures, or who are
          experiencing degenerative conditions such as Osteoarthritis. These procedures utilize
          concentrated repair cells that are obtained from your own bone marrow or blood to promote
          your body’s own natural ability to heal.
          <br />
          <br />
          Traditional options for patients suffering from these conditions include arthroscopic knee
          surgery to repair ligament tears, meniscus, or total knee replacement. With those
          surgeries, months of rehab are required, and the patient must be aware of and prepared to
          take on the risks. As an alternative, Regenexx regenerative orthopedic procedures are
          designed to help reduce knee pain and improve function with precise highly specific
          image-guided medical procedures.
        </p>
      </RegenexxProcedure>
      <CollapseContent />
      <RegenexxProcedure
        className="bg-transparent pb-16 pt-0"
        contentOrder={'first'}
        videoBanner={kneepain}
        videoUrl="https://youtu.be/JGOuzorrhm8?si=eVoTPXY0GAXGbSDS"
      >
        <h4 className="mb-6 text-[25px] font-bold leading-none text-white lg:text-[45px]">
          Your Alternative to Knee Surgery
        </h4>
        <p className="text-balance text-lg font-light leading-tight text-white lg:text-[25px]">
          Surgical options for those dealing with painful knee issues range from arthroscopic knee
          surgery to total knee joint replacement. Recent research has shown that some of the most
          popular arthroscopic surgeries, such as meniscectomy, provide little benefit to the
          patient. Knee replacement is extremely traumatic and carries risks of chronic pain and
          toxic wear particles entering the bloodstream. Surgical risks aside, all surgeries require
          months of painful rehab to regain strength and mobility. Most knee surgeries also
          accelerate the cascade of degeneration that leads to Osteoarthritis.
        </p>
      </RegenexxProcedure>

      <RegenexxProcedure
        className="bg-transparent pb-16 pt-0"
        contentOrder={'last'}
        videoBanner={kneepain}
        videoUrl="https://youtu.be/JGOuzorrhm8?si=eVoTPXY0GAXGbSDS"
      >
        <p className="text-balance text-lg font-light leading-tight text-white lg:text-[25px]">
          We have seen exciting results on difficult cases, such as complete muscle and ligament
          tears, and we have helped thousands of patients with arthritis avoid knee replacement and
          continue to do the things they love with little or no pain. Most Regenexx patients
          experience little downtime from their procedure and are encouraged to return to activity
          as they begin to feel better. <br />
          <br /> Your Regenexx Physician will determine if you are, or are not, a Candidate for
          these procedures and recommend surgery if that’s what’s needed.
        </p>
      </RegenexxProcedure>

      <Reviews />
      <ProcedureWork />
      <KneeConditions />
      <KneeHipReplacement />
      <PatienceStories />
      <Disclaimer />
    </main>
  );
}
