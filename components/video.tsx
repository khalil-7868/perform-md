'use client';

import { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player/lazy';

import Image, { StaticImageData } from 'next/image';

import { cn } from 'lib/utils';

declare type SafeNumber = number | `${number}`;

export interface Props {
  url: string;
  thumbnail: StaticImageData;
  alt: string;
  thumbnailProps?: {
    src: StaticImageData;
    alt: string;
    width?: SafeNumber;
    height?: SafeNumber;
    fill?: boolean;
    quality?: SafeNumber;
    priority?: boolean;
    // loading?: LoadingValue;
    // placeholder?: PlaceholderValue;
    blurDataURL?: string;
    unoptimized?: boolean;
    // onLoadingComplete?: OnLoadingComplete;
  };
  className?: string;
}

const Video = (props: Props) => {
  const ref = useRef<HTMLHeadingElement>(null);
  const [showVideo, setShowVideo] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [videoHeight, setVideoHeight] = useState<number>();

  const handlePlay = () => setShowVideo(true);

  const handleLoadingComplete = () => setLoading(false);

  useEffect(() => {
    if (ref?.current?.clientHeight) {
      setVideoHeight(ref.current.clientHeight);
    }
  }, [loading]);

  return (
    <div ref={ref} className={cn('relative z-0 aspect-video overflow-hidden', props.className)}>
      {!showVideo && (
        <div
          className="absolute z-10 flex h-full w-full cursor-pointer items-center justify-center duration-500 ease-in-out hover:bg-black/60"
          onClick={handlePlay}
        >
          <button
            type="button"
            aria-label="play video"
            className="bg-secondary flex h-20 w-20 items-center justify-center rounded-full border-4 border-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1 h-8 w-8 fill-current text-center text-white"
              viewBox="7 5.74 11.01 12.52"
            >
              {' '}
              <path d="M7 17.259V6.741a1 1 0 0 1 1.504-.864l9.015 5.26a1 1 0 0 1 0 1.727l-9.015 5.259A1 1 0 0 1 7 17.259Z" />{' '}
            </svg>
          </button>
        </div>
      )}
      {showVideo ? (
        <div className="bg-black" style={{ height: videoHeight }}>
          <ReactPlayer
            url={props.url}
            controls
            width="100%"
            height="100%"
            config={{
              vimeo: { playerOptions: { autoplay: true, color: 'ff8d22', responsive: true } },
              youtube: { playerVars: { autoplay: true } },
              file: {
                attributes: {
                  preload: false,
                  autoPlay: true,
                  playsInline: true
                }
              }
            }}
          />
        </div>
      ) : (
        <Image
          src={props.thumbnail.src}
          // width={props.thumbnail.width}
          // height={props.thumbnail.height}
          alt={props.alt}
          fill
          // loader={props.thumbnailProps?.loader}
          quality={props.thumbnailProps?.quality}
          priority={props.thumbnailProps?.priority}
          // loading={props.thumbnailProps?.loading}
          // placeholder={props.thumbnailProps?.placeholder}
          // blurDataURL={`${props.thumbnailProps?.src}&blur=200`}
          unoptimized={props.thumbnailProps?.unoptimized}
          onLoadingComplete={handleLoadingComplete}
          className="object-cover brightness-75"
        />
      )}
    </div>
  );
};

export default Video;
