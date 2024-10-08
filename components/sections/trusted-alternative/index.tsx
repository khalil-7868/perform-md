import Image from 'next/image';

import regenexxPhacision from './regenexx-phacision.png';
import regenexx from './regenexx.png';

export function TrustedAlternative() {
  return (
    <section className="bg-[#29313A] px-5 py-20 lg:py-36">
      <div className="mx-auto w-full max-w-[1600px]">
        <h2 className="mb-16 text-center text-2xl font-bold text-white md:mb-32 md:text-[45px]">
          The Trusted Alternative to Orthopedic Surgery
        </h2>

        <div className="space-y-16 lg:space-y-[152px]">
          <div className="group flex flex-col items-center justify-between gap-11 md:gap-10 lg:flex-row">
            <div className="w-full lg:max-w-[718px] lg:group-even:order-last">
              <Image src={regenexx} alt="Regenexx" className="h-auto w-full object-cover" />
            </div>
            <div className="w-full lg:max-w-[746px]">
              <h4 className="mb-6 text-lg font-bold leading-none text-white md:text-[25px]">
                Regenexx® Procedures
              </h4>
              <p className="text-balance text-lg font-light leading-none text-white md:text-[25px]">
                Provide non-surgical treatment options for those suffering from pain related to
                osteoarthritis, joint injuries, spine pain, overuse conditions, and common sports
                injuries. These medical procedures are only performed by highly-skilled doctors
                trained specifically in{' '}
                <span className="text-primary">Interventional Orthopedics</span>, and are used to
                help reduce pain and improve function.
                <br />
                <br />
                Regenexx procedures have helped thousands of patients improve their quality of life,
                return to the activities they enjoy, and avoid the need for surgery or joint
                replacement*
              </p>
            </div>
          </div>

          <div className="group flex flex-col items-center justify-between gap-11 md:gap-10 lg:flex-row">
            <div className="w-full lg:max-w-[718px] lg:group-even:order-last">
              <Image
                src={regenexxPhacision}
                alt="Regenexx Physicians"
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="w-full lg:max-w-[746px]">
              <h4 className="mb-6 text-lg font-bold leading-none text-white md:text-[25px]">
                Regenexx Physicians
              </h4>
              <p className="text-balance text-lg font-light leading-none text-white md:text-[25px]">
                Represent a very selective, highly-skilled,{' '}
                <span className="text-primary">interventional orthopedics</span> network that is
                100% focused on orthopedic conditions. All Regenexx physicians are musculoskeletal
                experts with extensive training and experience in the diagnosis and treatment of
                musculoskeletal conditions, as well as complex, image-guided injections of your
                body’s own healing agents to treat orthopedic issues.
                <br />
                <br />
                Regenexx patient outcomes are tracked in a registry and with that information, we
                provide transparent outcome data (below) for those who may be considering this
                treatment option.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
