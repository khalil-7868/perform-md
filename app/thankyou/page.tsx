import { Metadata } from 'next';

import { AboutDoctor } from 'components/sections/about-doctor';
import { CTA } from 'components/sections/cta';

export const metadata: Metadata = {
  title: 'Thank You',
  description: 'Thank you for your appointment submission'
};

export default function Page() {
  return (
    <main>
      <section className="bg-[#2A333D] px-5 py-16">
        <div className="mx-auto w-full max-w-[500px] text-center">
          <h2 className="mb-2 text-center text-[45px] font-bold capitalize leading-none text-white">
            appointment schedule!
          </h2>
          <p className="text-[22px] font-light leading-none text-white">
            Someone from perfomMD will contact you soon!
          </p>
        </div>
      </section>
      <AboutDoctor />
      <CTA />
    </main>
  );
}
