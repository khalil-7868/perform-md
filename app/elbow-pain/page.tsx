import { Metadata } from 'next';

import Link from 'next/link';

import { CollapseContent } from 'components/sections/collapse-content';
import { Disclaimer } from 'components/sections/disclaimer';
import { PainHero } from 'components/sections/pain-hero';
import { PatienceStories } from 'components/sections/patience-stories';
import { ProcedureWork } from 'components/sections/procedure-work';
import { RegenexxProcedure } from 'components/sections/regenexx-procedure';
import { Reviews } from 'components/sections/reviews';

import background from './elbow-hero-bg.png';
import elbowpain from './elbow-pain.png';
import ww1 from './ww1.png';

export const metadata: Metadata = {
  title: 'Elbow Pain',
  description: 'Page Description'
};

export default function Page() {
  return (
    <main>
      <PainHero background={background} />
      <RegenexxProcedure image={elbowpain} contentOrder="first">
        <h2 className="mb-16 text-[45px] font-bold leading-[1.1] text-white">
          Regenexx® Procedures <span className="text-primary">for Elbow Injuries </span> Overuse
          Conditions and Arthritis
        </h2>
        <h4 className="mb-6 text-[25px] font-bold leading-none text-white">Regenexx® Procedures</h4>
        <p className="text-balance text-[25px] font-light leading-tight text-white">
          Are highly specialized non-surgical, image-guided injection-based procedures performed
          only by very specially trained Regenexx Physicians for elbow arthritis, overuse conditions
          such as tennis elbow or golfer’s elbow, and other conditions that cause elbow pain. These
          procedures utilize concentrated repair cells that are obtained from your own bone marrow
          or blood to promote your body’s own natural ability to heal.
          <br />
          <br />
          If you are experiencing elbow pain, Regenexx Procedures using the healing agents from your
          own body may be a good treatment option. In recent years, several studies have
          demonstrated good results of platelet-rich plasma in treating elbow tendon and ligament
          issues.
        </p>
      </RegenexxProcedure>
      <CollapseContent />
      <RegenexxProcedure
        className="bg-transparent pb-32 pt-0"
        imageClasses="object-contain max-w-[524px] drop-shadow-[0px_4px_120px_rgba(80,195,233,0.2)]"
        contentOrder={'last'}
        title={
          <span className="mx-auto block max-w-[749px]">
            The Interventional Orthopedics Solution For Elbow Problems
          </span>
        }
        image={ww1}
      >
        <p className="text-balance text-[25px] font-light leading-tight text-white">
          The elbow is a critical joint in the musculoskeletal system. It doesn’t have to bear
          weight, like a knee or ankle does; however, think of all the things you wouldn’t be able
          to do if you couldn’t bend your arm: button your shirt, drive a car, pick up a baby, and
          so on. Elbow injuries are well known in many sports participants, including tennis, golf,
          and other sports that create stress on this joint. Experiencing pain or inflammation in
          this important joint can make it difficult to perform many standard daily activities.{' '}
          <br />
          <br />
          Download this report and learn how the concept of using the healing agents from your own
          body with Regenexx blood platelet procedures is backed by research that demonstrates that
          Interventional Orthopedic Regenerative Medicine treatment options may be a smart
          alternative to treating elbow pain via surgery in a majority of circumstances.
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
