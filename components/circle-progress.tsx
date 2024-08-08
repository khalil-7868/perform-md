// src/components/CircleProgress.tsx
import React from 'react';

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
  // Calculate the radius and circumference of the circle
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
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
        {percentage}%
      </text>
    </svg>
  );
};

export default CircleProgress;
