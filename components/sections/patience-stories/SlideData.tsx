import { Dialog, DialogPanel } from '@headlessui/react';
import { X } from 'lucide-react';
import { useState } from 'react';

import Image, { StaticImageData } from 'next/image';

import Video from 'components/video';

interface Props {
  story: {
    label: string;
    author: string;
    banner: StaticImageData;
    videoLink: string;
  };
}

export function SlideData(props: Props) {
  const [opened, setOpened] = useState(false);
  const { story } = props;
  return (
    <div className="relative z-0 h-full">
      <button
        onClick={() => setOpened(true)}
        className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
      >
        <svg
          width="120"
          height="120"
          className="size-15 xl:size-[120px]"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.8">
            <circle cx="60" cy="60" r="58" stroke="white" strokeWidth="4" />
            <path d="M88 60L45 83L45 37L88 60Z" fill="white" />
          </g>
        </svg>
      </button>

      <div className="absolute bottom-3 left-3 z-10 text-white md:bottom-12 md:left-12">
        <h4 className="text-xs font-bold leading-none md:text-[25px]">{story.label}</h4>
        <p className="text-xs font-light leading-none md:text-[25px]">{story.author}</p>
      </div>

      {opened && (
        <Dialog onClose={close} open={opened} as="div" className="relative z-10 focus:outline-none">
          <div
            className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black/10 backdrop-blur-sm"
            onClick={() => setOpened(false)}
          >
            <div className="flex min-h-full items-center justify-center p-4">
              <DialogPanel
                transition
                className="data-[closed]:transform-[scale(95%)] relative w-full max-w-5xl rounded-xl bg-white/50 p-2 duration-300 ease-out data-[closed]:opacity-0 md:p-6"
              >
                <button
                  className="absolute -top-2 right-0 flex size-10 -translate-y-full items-center justify-center rounded-full bg-white lg:top-0 lg:-translate-y-1/2 lg:translate-x-1/2"
                  onClick={() => setOpened(false)}
                >
                  <X className="text-red-500" />
                </button>
                <Video url={story.videoLink} alt={story.label} thumbnail={story.banner} />
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      )}

      <Image
        src={story.banner}
        alt={story.label}
        className="pointer-events-none size-full object-cover"
      />
      <div className="pointer-events-none absolute inset-0 size-full bg-[#2A333D]/50" />
    </div>
  );
}
