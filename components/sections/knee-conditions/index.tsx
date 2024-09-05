import Video from 'components/video';

import acl_tears from './acl-tears.png';
import meniscus_tears from './meniscus-tears.png';
import osteoarthritis from './osteoarthritis.png';

const conditions = [
  {
    title: 'Osteoarthritis',
    description:
      'Knee replacement surgery comes with many serious risks and complications, but is often considered to be a straightforward and accepted approach to treatment for those suffering from significant arthritis or injury in this joint. Before you consider knee replacement, learn what Regenexx can do for you.',
    videoBanner: osteoarthritis,
    videoUrl: 'https://youtu.be/fH53um9coSk?si=WK_gdVqNuc-aftl5'
  },
  {
    title: 'Meniscus Tears',
    description:
      'Meniscus tears are one of the most common injuries we treat. The last option anyone should consider for treating a meniscus injury is the surgical removal of all or some of this important structure. Click below to learn why Regenexx is likely a better choice than meniscus surgery.',
    videoBanner: meniscus_tears,
    videoUrl: 'https://youtu.be/fH53um9coSk?si=WK_gdVqNuc-aftl5'
  },
  {
    title: 'ACL Tears',
    description:
      'Knee ACL tears are a very common injury. The rush to surgery has long been due to the traditional thinking that an ACL will not heal. Our experience treating ACL tears with the Regenexx patented bone marrow concentrate treatment has shown that it may be a better option for those who have experienced a partial or complete non-retracted ACL tear.',
    videoBanner: acl_tears,
    videoUrl: 'https://youtu.be/fH53um9coSk?si=WK_gdVqNuc-aftl5'
  }
];

export function KneeConditions() {
  return (
    <section className="bg-[#29313A] px-4 py-20 sm:px-5 lg:py-36">
      <div className="mx-auto w-full max-w-[1595px]">
        <h2 className="mb-16 text-center text-2xl font-bold leading-none text-white lg:mb-32 lg:text-[45px]">
          Common Knee Conditions
        </h2>

        <div className="grid grid-cols-1 gap-11 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {conditions.map((condition, index) => (
            <div key={index} className="bg-[#1E242B]">
              <Video
                url={condition.videoUrl}
                thumbnail={condition.videoBanner}
                alt={condition.title}
              />
              <div className="px-4.5 py-6 md:p-11">
                <h3 className="mb-6 text-xl font-bold text-white md:mb-9 md:text-[25px]">
                  {condition.title}
                </h3>
                <p className="text-balance text-lg font-light leading-snug text-white md:text-[19px] md:leading-[1.1]">
                  {condition.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
