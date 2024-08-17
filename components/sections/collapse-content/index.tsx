import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';

import CircleProgress from 'components/circle-progress';
import { ChevronDown } from 'components/icons/chevron-down';

export function CollapseContent() {
  return (
    <section className="my-36 px-5">
      <div className="mx-auto w-full max-w-[1595px] space-y-6">
        <Disclosure as="div" className="border-l-4 border-primary bg-[#29313A] px-16 py-12">
          <DisclosureButton className="flex w-full items-center justify-between gap-5 text-left text-[35px] font-bold text-white">
            <span>Commonly Treated Hip Conditions</span>
            <ChevronDown className="h-10 w-12 shrink-0" />
          </DisclosureButton>
          <div className="overflow-hidden">
            <DisclosurePanel
              transition
              className="origin-top pt-8 transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0"
            >
              <p className="mb-14 text-[25px] font-light leading-[1.2] text-white">
                This is not a complete list, so please contact us or complete the Regenexx Candidate
                Form if you have questions about whether you or your condition can be treated with
                these non-surgical procedures.
              </p>

              <div className="grid grid-cols-2 gap-5">
                <ul className="list-inside list-disc text-[25px] font-bold leading-[1.2] text-white marker:text-primary">
                  <li>Arthritis</li>
                  <li>Meniscus Tears</li>
                  <li>ACL, MCL, PCL, or LCL sprain or tear</li>
                  <li>Knee Instability</li>
                  <li>Patellofemoral Syndrome/Chondromalacia</li>
                </ul>
                <ul className="list-inside list-disc text-[25px] font-bold leading-[1.2] text-white marker:text-primary">
                  <li>Pes anserine bursitis</li>
                  <li>Baker’s cyst</li>
                  <li>Patellar tendonitis</li>
                  <li>Biceps Femoris Insertional Tendinopathy</li>
                  <li>Hamstrings Tendinopathy</li>
                </ul>
              </div>
            </DisclosurePanel>
          </div>
        </Disclosure>

        <Disclosure as="div" className="border-l-4 border-primary bg-[#29313A] px-16 py-12">
          <DisclosureButton className="flex w-full items-center justify-between gap-5 text-left text-[35px] font-bold text-white">
            <span>Patient Outcome Data</span>
            <ChevronDown className="h-10 w-12 shrink-0" />
          </DisclosureButton>
          <div className="overflow-hidden">
            <DisclosurePanel
              transition
              className="origin-top pt-8 transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0"
            >
              <div className="mx-auto mt-20 flex w-full max-w-[1212px] items-start justify-between gap-8">
                <div className="w-full max-w-[302px] text-center">
                  <div className="mb-14 aspect-square w-full">
                    <CircleProgress percentage={88} size={302} />
                  </div>
                  <p className="text-[25px] font-light leading-none text-white">
                    <strong className="font-bold">Up to 88% </strong> Average Function Regained
                  </p>
                </div>

                <div className="w-full max-w-[302px] text-center">
                  <div className="mb-14 aspect-square w-full">
                    <CircleProgress percentage={34} size={302} />
                  </div>
                  <p className="text-[25px] font-light leading-none text-white">
                    <strong className="font-bold">34% Decrease</strong> in Joint Pain After 1-month
                  </p>
                </div>

                <div className="w-full max-w-[302px] text-center">
                  <div className="mb-14 aspect-square w-full">
                    <CircleProgress percentage={55} size={302} />
                  </div>
                  <p className="text-[25px] font-light leading-none text-white">
                    <strong className="font-bold">55% Overall</strong> Improvement After 3-months
                  </p>
                </div>
              </div>
            </DisclosurePanel>
          </div>
        </Disclosure>

        <Disclosure as="div" className="border-l-4 border-primary bg-[#29313A] px-16 py-12">
          <DisclosureButton className="flex w-full items-center justify-between gap-5 text-left text-[35px] font-bold text-white">
            <span>About Regenexx and our Highly Skilled Physician Network</span>
            <ChevronDown className="h-10 w-12 shrink-0" />
          </DisclosureButton>
          <div className="overflow-hidden">
            <DisclosurePanel
              transition
              className="origin-top pt-8 transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0"
            >
              <p className="mb-14 text-[25px] font-light leading-[1.2] text-white">
                <strong className="font-bold">Regenexx® Procedures</strong> provide non-surgical
                treatment options for those suffering from pain related to osteoarthritis, joint
                injuries, spine pain, overuse conditions, and common sports injuries. These medical
                procedures are only performed by highly-skilled doctors trained specifically in{' '}
                <span className="text-primary">Interventional Orthopedics</span>, and are used to
                help reduce pain and improve function. Regenexx procedures have helped thousands of
                patients improve their quality of life, return to the activities they enjoy, and
                avoid the need for surgery or joint replacement*
              </p>
              <p className="text-[25px] font-light leading-[1.2] text-white">
                <strong className="font-bold">Regenexx® Procedures</strong> represent a very
                selective, highly-skilled,{' '}
                <span className="text-primary">interventional orthopedics</span> network that is
                100% focused on orthopedic conditions. All Regenexx physicians are musculoskeletal
                experts with extensive training and experience in the diagnosis and treatment of
                musculoskeletal conditions, as well as complex, image-guided injections of your
                body’s own healing agents to treat orthopedic issues. Regenexx patient outcomes are
                tracked in a registry and with that information, we provide transparent outcome data
                (below) for those who may be considering this treatment option.
              </p>
            </DisclosurePanel>
          </div>
        </Disclosure>
      </div>
    </section>
  );
}
