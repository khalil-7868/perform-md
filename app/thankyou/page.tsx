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
      <section className="bg-[#2A333D] px-4 py-16 sm:px-5">
        <div className="mx-auto w-full max-w-[500px] text-center">
          <h2 className="mb-2 text-center text-2xl font-bold capitalize !leading-none text-white md:text-[45px]">
            appointment schedule!
          </h2>
          <p className="text-base font-light leading-none text-white md:text-[22px]">
            Someone from perfomMD will contact you soon!
          </p>
        </div>
      </section>
      <AboutDoctor />
      <CTA />
    </main>
  );
}
