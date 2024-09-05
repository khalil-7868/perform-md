import { ReactElement, ReactNode } from 'react';

import Image, { StaticImageData } from 'next/image';

import { cn } from 'lib/utils';

import Video from 'components/video';

interface Props {
  title?: ReactElement;
  titleClasses?: string;
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
    <section className={cn('bg-[#29313A] px-5 py-20 lg:py-36', props.className)}>
      <div className="mx-auto w-full max-w-[1486px]">
        {props.title && (
          <h2
            className={cn(
              'mb-16 text-center text-2xl font-bold !leading-[1.1] text-white md:text-[45px] lg:mb-32',
              props.titleClasses
            )}
          >
            {props.title}
          </h2>
        )}

        <div className="space-y-[152px]">
          <div className="group flex flex-col items-center justify-between gap-10 lg:flex-row">
            <div className="order-first w-full group-even:order-last lg:order-none lg:max-w-[666px]">
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
                'w-full lg:max-w-[688px]',
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
