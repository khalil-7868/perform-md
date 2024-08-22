export function CandidateForm() {
  return (
    <section className="px-5 py-10 sm:py-20 lg:py-36">
      <div className="mx-auto flex w-full max-w-3xl flex-col justify-between gap-11 lg:max-w-[1458px] lg:flex-row lg:gap-10">
        <div className="w-full lg:max-w-[648px]">
          <form action="#" className="space-y-6">
            <div className="flex flex-col gap-6 sm:flex-row sm:gap-5">
              <div className="flex-1">
                <label
                  className="mb-2 ml-2.5 block text-base capitalize leading-none text-[#8E8E8E]"
                  htmlFor="first-name"
                >
                  first Name *
                </label>
                <input
                  id="first-name"
                  type="text"
                  className="block h-12 w-full border-0 bg-[#2A333D] px-5 text-white caret-primary focus:ring-primary"
                />
              </div>
              <div className="flex-1">
                <label
                  className="mb-2 ml-2.5 block text-base capitalize leading-none text-[#8E8E8E]"
                  htmlFor="last-name"
                >
                  last Name *
                </label>
                <input
                  id="last-name"
                  type="text"
                  className="block h-12 w-full border-0 bg-[#2A333D] px-5 text-white caret-primary focus:ring-primary"
                />
              </div>
            </div>
            <div className="flex-1">
              <label
                className="mb-2 ml-2.5 block text-base capitalize leading-none text-[#8E8E8E]"
                htmlFor="zip-code"
              >
                Zip Code
              </label>
              <input
                id="zip-code"
                type="text"
                className="block h-12 w-full border-0 bg-[#2A333D] px-5 text-white caret-primary focus:ring-primary"
              />
            </div>
            <div className="flex-1">
              <label
                className="mb-2 ml-2.5 block text-base capitalize leading-none text-[#8E8E8E]"
                htmlFor="phone"
              >
                Phone *
              </label>
              <input
                id="phone"
                type="tel"
                className="block h-12 w-full border-0 bg-[#2A333D] px-5 text-white caret-primary focus:ring-primary"
              />
            </div>
            <div className="flex-1">
              <label
                className="mb-2 ml-2.5 block text-base capitalize leading-none text-[#8E8E8E]"
                htmlFor="text-you"
              >
                Is it ok to text you? *
              </label>
              <select
                id="text-you"
                className="block h-12 w-full border-0 bg-[#2A333D] px-5 text-white caret-primary focus:ring-primary"
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className="flex-1">
              <label
                className="mb-2 ml-2.5 block text-base capitalize leading-none text-[#8E8E8E]"
                htmlFor="email"
              >
                Email *
              </label>
              <input
                id="email"
                type="email"
                className="block h-12 w-full border-0 bg-[#2A333D] px-5 text-white caret-primary focus:ring-primary"
              />
            </div>
            <div className="flex-1">
              <label
                className="mb-2 ml-2.5 block text-base capitalize leading-none text-[#8E8E8E]"
                htmlFor="intersted-in-talk"
              >
                I am interested in talking about my: *
              </label>
              <select
                id="intersted-in-talk"
                className="block h-12 w-full border-0 bg-[#2A333D] px-5 text-white caret-primary focus:ring-primary"
              >
                <option value="knee">Knee</option>
                <option value="shoulder">Shoulder</option>
                <option value="others">Others</option>
              </select>
            </div>
            <div className="flex-1">
              <label
                className="mb-2 ml-2.5 block max-w-[457px] text-base capitalize leading-none text-[#8E8E8E]"
                htmlFor="message"
              >
                Please assist your Regenerative Medicine Consultant by providing additional
                information about your condition or surgical procedure you are wanting to avoid
              </label>
              <textarea
                id="message"
                className="block h-32 w-full border-0 bg-[#2A333D] p-5 text-white caret-primary focus:ring-primary"
              />
            </div>
            <button className="flex h-12 w-full items-center justify-center bg-primary text-base font-bold uppercase -tracking-0.02em text-white">
              Begin Candidacy
            </button>
          </form>
        </div>
        <div className="order-first w-full lg:order-none lg:max-w-[620px]">
          <h2 className="mb-11 text-2xl font-bold !leading-[1.1] text-white md:text-[45px] lg:mb-20">
            Regenexx Procedure Candidate Form
          </h2>
          <p className="text-base font-light !leading-snug text-white md:text-[25px]">
            If you are suffering from arthritis, joint or muscle injury, spine pain, a
            sports-related injury, or other degenerative orthopedic condition, you may be a good
            candidate for this ground-breaking treatment. Please complete the Procedure Candidate
            Form below and we will get back to you with more information after your form is
            received. <br />
            <br /> <strong className="font-bold">Please note:</strong> Regenexx Procedures are not
            reimbursable by Healthcare or Medicare.
          </p>
        </div>
      </div>
    </section>
  );
}
