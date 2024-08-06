import micheal from 'components/images/peter-michael-first.png';
import { AboutDoctor } from 'components/sections/about-doctor';
import { Acheivements } from 'components/sections/acheivements';
import { CTA } from 'components/sections/cta';
import { Reviews } from 'components/sections/reviews';
import { ServiceCards } from 'components/sections/service-cards';

export const metadata: Metadata = {
  title: 'Home',
  datePublished: '14/07/2024',
  breadcrumbs: [{ name: 'Home', href: '/' }]
};

export default function Home() {
  return (
    <main>
      <ServiceCards />
      <AboutDoctor
        title="Perform MD regenerative orthopedics and spine"
        description="PerformMD practitioners embody an exclusive and highly proficient network in interventional orthopedics, with an unwavering dedication to orthopedic well-being. Our team of physicians at PerformMD are specialists in musculoskeletal health, boasting extensive training and hands-on experience in diagnosing and treating musculoskeletal conditions. They are adept at administering intricate, image-guided injections using your body's natural healing agents to address orthopedic concerns."
        picture={micheal}
        varient="pic-start"
      />
      <Acheivements />
      <Reviews />
      <AboutDoctor />
      <CTA />
    </main>
  );
}
