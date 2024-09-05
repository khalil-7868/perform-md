export function PatienceCounter() {
  return (
    <section className="px-4 py-20 md:px-5 md:py-36">
      <div className="mx-auto w-full max-w-[1491px]">
        <h2 className="mb-16 text-center text-2xl font-bold leading-none text-white md:mb-32 md:text-[45px]">
          Regenexx is a world leader in the field of orthopedic regenerative medicine based on
          scientific publications and is arguably the world’s most advanced platform for in-office
          interventional orthopedics.
        </h2>

        <div className="flex flex-col items-center justify-between gap-11 text-center text-white md:flex-row md:gap-10">
          <div className="w-full max-w-[580px]">
            <h3 className="mb-6 font-primary text-2xl font-bold leading-none tracking-[0.05em] text-primary md:mb-10 md:text-[45px]">
              188,050
            </h3>
            <p className="text-base font-light leading-none md:text-[19px]">
              More than 188,050 highly specific image-guided Regenexx® Procedures have been
              performed since Regenexx pioneered the field of{' '}
              <span className="text-primary">interventional orthopedics</span>, using{' '}
              <span className="text-primary">bone marrow concentrate</span> to treat common
              orthopedic problems in 2005.
            </p>
          </div>

          <div className="w-full max-w-[580px]">
            <h3 className="mb-6 font-primary text-2xl font-bold leading-none tracking-[0.05em] text-primary md:mb-10 md:text-[45px]">
              44%
            </h3>
            <p className="text-base font-light leading-none md:text-[19px]">
              The published research on Regenexx procedures accounts for approximately 44% of the
              world’s research on the use of{' '}
              <span className="text-primary">bone marrow concentrate</span> for orthopedic
              conditions (cumulative n of patients published & treated with{' '}
              <span className="text-primary">bone marrow concentrate</span> as of 1/1/2019)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
