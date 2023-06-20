import { memo, SVGProps } from 'react';

const Group70Icon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g filter='url(#filter0_d_129_164)'>
      <circle cx={20} cy={20} r={20} fill='white' />
    </g>
    <g clipPath='url(#clip0_129_164)'>
      <path d='M23.41 24.59L18.83 20L23.41 15.41L22 14L16 20L22 26L23.41 24.59Z' fill='#39B54A' />
    </g>
    <defs>
      <filter
        id='filter0_d_129_164'
        x={-10}
        y={-10}
        width={60}
        height={60}
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset />
        <feGaussianBlur stdDeviation={5} />
        <feComposite in2='hardAlpha' operator='out' />
        <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0' />
        <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_129_164' />
        <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_129_164' result='shape' />
      </filter>
      <clipPath id='clip0_129_164'>
        <rect width={24} height={24} fill='white' transform='translate(8 8)' />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(Group70Icon2);
export { Memo as Group70Icon2 };
