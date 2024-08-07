export function ScheduleAppointment() {
  return (
    <section className="bg-[#2A333D] px-5 py-12">
      <div className="mx-auto w-full max-w-[500px]">
        <h2 className="mb-10 text-center text-[45px] font-bold capitalize text-white">
          schedule appointment
        </h2>
        <form action="/thankyou">
          <label className="mb-4 block text-xl font-bold leading-none text-[#76C0D8]">
            Contact Info
          </label>

          <div className="mt-5 space-y-5">
            <input
              type="text"
              className="h-12 w-full border border-dark-16181B bg-white px-5 text-sm text-dark-16181B placeholder:capitalize placeholder:text-[#8E8E8E] focus:border-primary focus:ring-primary"
              placeholder="first/last Name"
            />
            <input
              type="email"
              className="h-12 w-full border border-dark-16181B bg-white px-5 text-sm text-dark-16181B placeholder:capitalize placeholder:text-[#8E8E8E] focus:border-primary focus:ring-primary"
              placeholder="Email"
            />
            <input
              type="tel"
              className="h-12 w-full border border-dark-16181B bg-white px-5 text-sm text-dark-16181B placeholder:capitalize placeholder:text-[#8E8E8E] focus:border-primary focus:ring-primary"
              placeholder="Phone"
            />
            <select className="h-12 w-full border border-dark-16181B bg-white px-5 text-sm capitalize text-dark-16181B placeholder:text-[#8E8E8E] focus:border-primary focus:ring-primary">
              <option value="" defaultChecked selected disabled>
                appointment location
              </option>
              <option value="">Location 1</option>
              <option value="">Location 2</option>
              <option value="">Location 3</option>
            </select>
          </div>

          <label className="mt-6 block text-xl font-bold leading-none text-[#76C0D8]">
            Time & Date
          </label>

          <div className="mt-5 space-y-5">
            <div className="relative">
              <input
                type="text"
                className="h-12 w-full border border-dark-16181B bg-white px-5 text-sm text-dark-16181B placeholder:capitalize placeholder:text-[#8E8E8E] focus:border-primary focus:ring-primary"
                placeholder="Select Time"
              />
              <input type="time" className="absolute inset-0 z-10 size-full" />
              <svg
                className="pointer-events-none absolute right-6.5 top-1/2 -translate-y-1/2"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 0C4.03711 0 0 4.03711 0 9C0 13.9629 4.03711 18 9 18C13.9629 18 18 13.9629 18 9C18 4.03711 13.9629 0 9 0ZM9 1.5C13.1514 1.5 16.5 4.84863 16.5 9C16.5 13.1514 13.1514 16.5 9 16.5C4.84863 16.5 1.5 13.1514 1.5 9C1.5 4.84863 4.84863 1.5 9 1.5ZM8.25 3V9.75H13.5V8.25H9.75V3H8.25Z"
                  fill="#2A333D"
                />
              </svg>
            </div>

            <div className="relative">
              <input
                type="text"
                className="h-12 w-full border border-dark-16181B bg-white px-5 text-sm text-dark-16181B placeholder:capitalize placeholder:text-[#8E8E8E] focus:border-primary focus:ring-primary"
                placeholder="Select Date"
              />
              <input type="date" className="absolute inset-0 z-10 size-full" />
              <svg
                className="pointer-events-none absolute right-6.5 top-1/2 -translate-y-1/2"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 0C4.03711 0 0 4.03711 0 9C0 13.9629 4.03711 18 9 18C13.9629 18 18 13.9629 18 9C18 4.03711 13.9629 0 9 0ZM9 1.5C13.1514 1.5 16.5 4.84863 16.5 9C16.5 13.1514 13.1514 16.5 9 16.5C4.84863 16.5 1.5 13.1514 1.5 9C1.5 4.84863 4.84863 1.5 9 1.5ZM8.25 3V9.75H13.5V8.25H9.75V3H8.25Z"
                  fill="#2A333D"
                />
              </svg>
            </div>
          </div>

          <label className="mt-6 block text-xl font-bold leading-none text-[#76C0D8]">
            Pain Experiencing?
          </label>

          <div className="mt-5 space-y-5">
            <select className="h-12 w-full border border-dark-16181B bg-white px-5 text-sm capitalize text-dark-16181B placeholder:text-[#8E8E8E] focus:border-primary focus:ring-primary">
              <option value="" selected disabled>
                Select Pain
              </option>
              <option value={''}>Knee Pain</option>
              <option value={''}>Spine Pain</option>
              <option value={''}>Hip Pain</option>
              <option value={''}>Hand & Wrist Pain</option>
              <option value={''}>Shoulder Pain</option>
              <option value={''}>Elbow Pain</option>
              <option value={''}>Neck Pain</option>
              <option value={''}>Ankle & Foot Pain</option>
            </select>
          </div>

          <button
            type="submit"
            className="mt-5 flex h-16 w-full items-center justify-center gap-1 border border-white bg-dark-1E242B text-xl font-bold capitalize text-primary transition-all hover:bg-primary hover:text-dark-1E242B"
          >
            <span>schedule now</span>
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              className="-mr-5.5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.54492 13.3311L12.7762 6.09983M6.65742 5.54358H12.5458C12.9802 5.54358 13.3324 5.89578 13.3324 6.33024V12.2186"
                stroke="white"
                strokeWidth="1.57332"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
}
