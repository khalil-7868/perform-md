import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import banner from './peter-michael.png';

interface Props {
  title?: string;
  description?: string | React.ReactNode;
  button_label?: string;
  button_link?: string;
  picture?: StaticImageData;
  varient?: 'default' | 'pic-start';
}

export function AboutDoctor(props: Props) {
  const {
    title = 'About Dr. Peter Michael',
    description = (
      <>
        Dr. Peter Michael is a graduate of the University of Miami Miller School of Medicine. He
        completed his internal medicine residency at Howard University Hospital and his physical
        medicine and rehabilitation (PM&R) at the University of Miami Miller School of Medicine. In
        2016, he completed an interventional pain management fellowship at the Florida Spine
        Institute, and in 2017, a interventional pain and regenerative sports medicine fellowship
        with Marko Brodor MD. <br />
        <br />
        Dr. Michael additionally received his Master of Business Administration from University of
        Miami School of Business in 2011, and has been published in various journals and
        conferences.
      </>
    ),
    button_label = 'LEARN MORE',
    button_link = '/regenexx',
    varient = 'default',
    picture = banner
  } = props;
  return (
    <>
      {varient === 'default' && (
        <section className="mx-auto w-full max-w-[1920px] px-4 pb-[67px] pt-9 sm:px-10 xl:px-32">
          <div className="ml-auto flex w-full max-w-[1572px] flex-col items-center justify-between gap-16 lg:flex-row lg:gap-10">
            <div className="w-full max-w-[1022px] text-white">
              <h2 className="mb-9 text-[35px] font-bold leading-none md:text-[45px]">{title}</h2>
              <div className="mb-9 text-lg font-light leading-none md:text-xl">{description}</div>
              <div className="relative z-0 flex w-fit items-end gap-1.5 text-sm font-medium uppercase text-white md:gap-4.5 md:text-xl xl:w-full">
                <div className="flex size-4 shrink-0 items-center justify-center border border-white xl:size-10">
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.285 10.6563L22.5392 10.6397H13.5236V12.1644H20.7162L10.0764 22.8042L11.1371 23.8648L21.7769 13.2251V20.4177H23.3015V11.4021L23.285 10.6563Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="pointer-events-none flex-1">
                  <span className="block w-fit xl:px-1.5 xl:pb-2.5">{button_label}</span>
                  <hr className="w-full max-w-[955px] border-t-white" />
                </div>
                <Link href={button_link} className="absolute inset-y-0 left-0 z-10 w-52" />
              </div>
            </div>
            <div className="order-last w-full sm:max-w-[442px] xl:order-none">
              <Image
                src={picture}
                alt={title}
                className="aspect-square w-full object-cover object-top sm:aspect-auto sm:h-[325px]"
              />
            </div>
          </div>
        </section>
      )}

      {varient === 'pic-start' && (
        <section className="mx-auto w-full max-w-[1920px] px-4 pb-[67px] pt-9 sm:px-10 xl:px-[120px]">
          <div className="ml-auto flex w-full max-w-[1592px] flex-col items-center justify-between gap-16 lg:flex-row lg:gap-10">
            <div className="order-last w-full sm:max-w-[287px] xl:order-none">
              <Image
                src={picture}
                alt={title}
                className="mb-4 block aspect-square w-full object-cover object-top sm:aspect-auto sm:h-[287px]"
              />
              <h5 className="mb-1.5 text-center text-15 font-bold uppercase leading-none tracking-[0.05em] text-white">
                peter michael
              </h5>
              <p className="text-center font-light uppercase tracking-[0.05em] text-primary">
                MD, MBA
              </p>
            </div>
            <div className="w-full max-w-[1075px] text-white">
              <h2 className="mb-9 text-[35px] font-bold leading-none md:text-[45px]">{title}</h2>
              <div className="mb-9 text-[25px] font-light leading-none">{description}</div>
              <div className="relative z-0 flex w-fit items-end gap-2 text-sm font-medium uppercase text-white md:text-xl xl:w-full xl:gap-7">
                <div className="pointer-events-none flex-1">
                  <span className="ml-auto block w-fit xl:px-1.5 xl:pb-2.5">{button_label}</span>
                  <hr className="ml-auto w-full max-w-[1007px] border-t-white" />
                </div>
                <div className="flex size-4 shrink-0 items-center justify-center border border-white xl:size-10">
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.285 10.6563L22.5392 10.6397H13.5236V12.1644H20.7162L10.0764 22.8042L11.1371 23.8648L21.7769 13.2251V20.4177H23.3015V11.4021L23.285 10.6563Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <Link href={button_link} className="absolute inset-y-0 right-0 z-10 w-52" />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
