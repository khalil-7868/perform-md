import { Metadata } from 'next';

import { Disclaimer } from 'components/sections/disclaimer';
import { PainHero } from 'components/sections/pain-hero';
import { PatienceCounter } from 'components/sections/patience-counter';
import { PatienceResults } from 'components/sections/patience-results';
import { PatienceStories } from 'components/sections/patience-stories';
import { ProcedureWork } from 'components/sections/procedure-work';
import { Reviews } from 'components/sections/reviews';
import { ServiceCards } from 'components/sections/service-cards';
import { TrustedAlternative } from 'components/sections/trusted-alternative';

import background from './full-shot-old-people-stretching-together.png';

export const metadata: Metadata = {
  title: 'Regenexx',
  description: 'Page Description'
};

export default function Page() {
  return (
    <main>
      <PainHero background={background} />
      <TrustedAlternative />
      <PatienceCounter />
      <Reviews />
      <ProcedureWork />
      <PatienceResults />
      <Disclaimer />
      <ServiceCards title="Where Are You Experiencing Pain?" className="bg-transparent py-36" />
      <PatienceStories />
    </main>
  );
}
