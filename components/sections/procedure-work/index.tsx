import Image from 'next/image';

import scp from './scp.png';
import sd from './sd.png';

export function ProcedureWork() {
  return (
    <section className="px-5 pb-36 pt-32">
      <div className="mx-auto w-full max-w-[1452px]">
        <h2 className="mb-32 text-center text-[45px] font-bold leading-none text-white">
          How Regenexx Procedures Work
        </h2>

        <div className="flex items-start justify-between gap-8">
          <div className="relative z-0 w-full max-w-[654px] pl-12">
            <Image src={sd} alt="Bone Marrow Concentrate" width={208} objectFit="contain" />

            <div className="mt-12 space-y-5 text-[19px] font-light leading-none text-white">
              <p>
                <span className="text-primary">Regenexx-SD</span> is{' '}
                <span className="text-primary">Bone Marrow Concentrate</span>. These repair cells
                from your own body live inside all of us in various tissues, poised to leap into
                action to repair damage as it occurs. As we age or have big injuries, we may not be
                able to recruit enough of these cells to the site to fully repair the area.{' '}
              </p>
              <p>
                <span className="text-primary">The Regenexx-SD</span> Procedure helps overcome this
                problem by harvesting Bone Marrow from an area of the back of the hip that contains
                a dense population of these important cells and then concentrating those cells
                before precisely injecting them into the injured area using advanced imaging
                guidance.{' '}
              </p>
              <p>
                The goal of the procedure is to reduce pain and improve function by promoting the
                body’s own ability to heal naturally. This Patented{' '}
                <span className="text-primary">Bone Marrow Concentrate</span> Protocol can be used
                for a wide range of orthopedic conditions. Your Regenexx doctor will evaluate your
                condition and your imaging to determine whether a{' '}
                <span className="text-primary">bone marrow concentrate</span> or platelet-based
                treatment is the best option for your orthopedic condition.
              </p>
            </div>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-px bg-[#00A990]" />
          </div>

          <div className="relative z-0 w-full max-w-[654px] pl-12">
            <Image src={scp} alt="Bone Marrow Concentrate" width={208} objectFit="contain" />

            <div className="mt-12 space-y-5 text-[19px] font-light leading-none text-white">
              <p>
                Platelet Rich Plasma (<span className="text-primary">PRP</span>) and{' '}
                <span className="text-primary">Platelet Lysate</span> are Platelet procedures that
                contain healing <span className="text-primary">growth factors</span> from your own
                blood that promote your body’s natural ability to repair itself.{' '}
              </p>
              <p>
                The use of <span className="text-primary">PRP</span> to treat joint, tendon,
                ligament, and muscle injuries is becoming well known, thanks to exposure from
                professional athletes. Platelet injections have a stimulating effect on the repair
                cells within the targeted area, making those cells work harder to perform their
                natural job of healing the body. Like all Regenexx procedures, Regenexx SCP
                procedures are performed with high-level imaging guidance to ensure the most
                accurate placements of cells into the desired area.{' '}
              </p>
              <p>
                Our Advanced Platelet Procedures are more concentrated and purer than{' '}
                <span className="text-primary">PRP</span> created by the automated machines used at
                most <span className="text-primary">regenerative medicine</span> clinics, increasing
                its ability to stimulate the body’s natural healing response. Platelet procedures
                are commonly used for soft tissue injuries, mild arthritis, spine conditions, and
                around nerves.
              </p>
            </div>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-px bg-[#00A990]" />
          </div>
        </div>
      </div>
    </section>
  );
}
