import Link from 'next/link';

export function PatienceResults() {
  return (
    <section className="bg-[#2A333D] px-5 py-32">
      <div className="mx-auto w-full max-w-[1595px]">
        <div className="flex items-start justify-between gap-10">
          <div className="w-full max-w-[746px] text-white">
            <h2 className="mb-11 text-[45px] font-bold leading-none">Patient Results</h2>
            <p className="mb-11 text-[25px] font-light leading-none">
              Regenexx maintains an active patient registry that tracks patients’ progress or side
              effects, post-procedure. Our outcomes database contains records on tens of thousands
              of Regenexx procedures performed by physicians in our network.
            </p>
            <p className="mb-32 text-[25px] font-light leading-none">
              Below, you can explore the outcomes database and see the number of currently tracked
              procedures as well as patient-reported results.
            </p>
            <h2 className="mb-11 text-[45px] font-bold leading-none">Patient Outcome Data</h2>
            <p className="text-balance text-[25px] font-light leading-none">
              There are more than 20097 Regenexx knee patients being tracked in the Regenexx®
              Patient Registry.
            </p>
          </div>
          <select
            name=""
            id=""
            className="block h-[58px] w-full max-w-[404px] border-0 bg-[#485869] px-6 text-[25px] font-light text-white"
          >
            <option value="">Knee results</option>
            <option value="">Knee results 1</option>
            <option value="">Knee results 2</option>
            <option value="">Knee results 3</option>
            <option value="">Knee results 4</option>
          </select>
        </div>

        <div className="mx-auto mt-20 flex w-full max-w-[1212px] items-start justify-between gap-8">
          <div className="w-full max-w-[302px] text-center">
            <div className="mb-14 aspect-square w-full bg-red-300"></div>
            <p className="text-[25px] font-light leading-none text-white">
              <strong className="font-bold">Up to 76%</strong> Average Function Regained
            </p>
          </div>

          <div className="w-full max-w-[302px] text-center">
            <div className="mb-14 aspect-square w-full bg-red-300"></div>
            <p className="text-[25px] font-light leading-none text-white">
              <strong className="font-bold">43% Decrease</strong> in Joint Pain After 1-month
            </p>
          </div>

          <div className="w-full max-w-[302px] text-center">
            <div className="mb-14 aspect-square w-full bg-red-300"></div>
            <p className="text-[25px] font-light leading-none text-white">
              <strong className="font-bold">51% Overall</strong> Improvement After 3-months
            </p>
          </div>
        </div>

        <Link
          href="#"
          className="mt-20 flex h-10 w-full max-w-[234px] items-center justify-center bg-primary text-sm font-bold uppercase -tracking-0.02em text-white"
        >
          More details
        </Link>
      </div>
    </section>
  );
}
