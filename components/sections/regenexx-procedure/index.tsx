import { ReactElement, ReactNode } from 'react';

import Image, { StaticImageData } from 'next/image';

import { cn } from 'lib/utils';

import Video from 'components/video';

interface Props {
  title?: ReactElement;
  image?: StaticImageData;
  children: ReactNode;
  videoBanner?: StaticImageData;
  videoUrl?: string;
  className?: string;
  contentOrder?: 'first' | 'last';
  imageClasses?: string;
}

export function RegenexxProcedure(props: Props) {
  return (
    <section className={cn('bg-[#29313A] px-5 py-36', props.className)}>
      <div className="mx-auto w-full max-w-[1486px]">
        {props.title && (
          <h2 className="mb-32 text-center text-[45px] font-bold leading-[1.1] text-white">
            {props.title}
          </h2>
        )}

        <div className="space-y-[152px]">
          <div className="group flex items-center justify-between gap-10">
            <div className="w-full max-w-[666px] group-even:order-last">
              {props.image && (
                <Image
                  src={props.image}
                  alt="image"
                  className={cn('h-auto w-full object-cover', props.imageClasses)}
                />
              )}
              {props.videoBanner && props.videoUrl && (
                <Video url={props.videoUrl} thumbnail={props.videoBanner} alt="Video Thumbnail" />
              )}
            </div>
            <div
              className={cn(
                'w-full max-w-[688px]',
                props.contentOrder === 'first'
                  ? 'order-first'
                  : props.contentOrder === 'last'
                  ? 'order-last'
                  : ''
              )}
            >
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
