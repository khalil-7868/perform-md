import Link from 'next/link';

import CircleProgress from 'components/circle-progress';

export function PatienceResults() {
  return (
    <section className="bg-[#2A333D] px-4 py-16 md:px-5 md:py-32">
      <div className="mx-auto w-full max-w-[1595px]">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row">
          <div className="w-full text-white lg:max-w-[746px]">
            <h2 className="mb-11 text-2xl font-bold leading-none md:text-[45px]">
              Patient Results
            </h2>
            <p className="mb-11 text-lg font-light leading-none md:text-[25px]">
              Regenexx maintains an active patient registry that tracks patients’ progress or side
              effects, post-procedure. Our outcomes database contains records on tens of thousands
              of Regenexx procedures performed by physicians in our network.
            </p>
            <p className="mb-16 text-lg font-light leading-none md:mb-32 md:text-[25px]">
              Below, you can explore the outcomes database and see the number of currently tracked
              procedures as well as patient-reported results.
            </p>
            <h2 className="mb-11 text-2xl font-bold leading-none md:text-[45px]">
              Patient Outcome Data
            </h2>
            <p className="text-balance text-lg font-light leading-none md:text-[25px]">
              There are more than 20097 Regenexx knee patients being tracked in the Regenexx®
              Patient Registry.
            </p>
          </div>
          <select
            name=""
            id=""
            className="block h-[58px] w-full border-0 bg-[#485869] px-6 text-lg font-light text-white md:text-[25px] lg:max-w-[404px]"
          >
            <option value="">Knee results</option>
            <option value="">Knee results 1</option>
            <option value="">Knee results 2</option>
            <option value="">Knee results 3</option>
            <option value="">Knee results 4</option>
          </select>
        </div>

        <div className="mx-auto mt-20 flex w-full max-w-[1212px] flex-col items-center justify-between gap-11 lg:flex-row lg:items-start lg:gap-8">
          <div className="w-full max-w-[302px] text-center">
            <div className="mb-9 w-full lg:mb-14 lg:aspect-square">
              <div className="hidden lg:block">
                <CircleProgress percentage={76} size={302} />
              </div>
              <div className="lg:hidden">
                <CircleProgress percentage={76} size={256} strokeWidth={28} />
              </div>
            </div>
            <p className="text-xl font-light leading-none text-white md:text-[25px]">
              <strong className="font-bold">Up to 76%</strong> Average Function Regained
            </p>
          </div>

          <div className="w-full max-w-[302px] text-center">
            <div className="mb-9 w-full lg:mb-14 lg:aspect-square">
              <div className="hidden lg:block">
                <CircleProgress percentage={43} size={302} />
              </div>
              <div className="lg:hidden">
                <CircleProgress percentage={43} size={256} strokeWidth={28} />
              </div>
            </div>
            <p className="text-xl font-light leading-none text-white md:text-[25px]">
              <strong className="font-bold">43% Decrease</strong> in Joint Pain After 1-month
            </p>
          </div>

          <div className="w-full max-w-[302px] text-center">
            <div className="mb-9 w-full lg:mb-14 lg:aspect-square">
              <div className="hidden lg:block">
                <CircleProgress percentage={51} size={302} />
              </div>
              <div className="lg:hidden">
                <CircleProgress percentage={51} size={256} strokeWidth={28} />
              </div>
            </div>
            <p className="text-xl font-light leading-none text-white md:text-[25px]">
              <strong className="font-bold">51% Overall</strong> Improvement After 3-months
            </p>
          </div>
        </div>

        <Link
          href="#"
          className="mt-20 flex h-10 w-full items-center justify-center bg-primary text-sm font-bold uppercase -tracking-0.02em text-white sm:mx-auto sm:max-w-[234px] lg:mx-0"
        >
          More details
        </Link>
      </div>
    </section>
  );
}
