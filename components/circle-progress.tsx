'use client';

import React, { useEffect, useRef, useState } from 'react';

interface CircleProgressProps {
  percentage: number;
  size?: number;
  strokeColor?: string;
  trailColor?: string;
  strokeWidth?: number;
  textColor?: string;
}

const CircleProgress: React.FC<CircleProgressProps> = ({
  percentage,
  size = 350,
  strokeColor = '#50C3E9',
  trailColor = '#485869',
  strokeWidth = 20,
  textColor = '#50C3E9'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current; // Capture the ref.current value

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsVisible(true);
        const interval = setInterval(
          () => {
            setAnimatedPercentage((prev) => {
              if (prev < percentage) {
                return Math.min(prev + 1, percentage);
              }
              clearInterval(interval);
              return prev;
            });
          },
          percentage > 50 ? percentage * 0.2 : percentage * 0.8
        ); // Adjust animation speed here
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1 // Adjust threshold if needed
    });

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, [percentage]);

  // Calculate the radius and circumference of the circle
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (animatedPercentage / 100) * circumference;

  return (
    <div ref={ref} style={{ display: 'inline-block' }}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter
            id="filter0_d"
            x="0"
            y="0"
            width={size}
            height={size}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="12" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.313726 0 0 0 0 0.764706 0 0 0 0 0.913725 0 0 0 0.1 0"
            />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
        </defs>

        {/* Background Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={trailColor}
          strokeWidth={strokeWidth}
          filter="url(#filter0_d)"
        />

        {/* Progress Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />

        {/* Percentage Text */}
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="45px"
          fontWeight="bold"
          fill={textColor}
        >
          {animatedPercentage}%
        </text>
      </svg>
    </div>
  );
};

export default CircleProgress;
