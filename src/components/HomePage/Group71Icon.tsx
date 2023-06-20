import { memo, SVGProps } from 'react';

const Group71Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g filter='url(#filter0_d_129_159)'>
      <circle cx={20} cy={20} r={20} fill='white' />
    </g>
    <g clipPath='url(#clip0_129_159)'>
      <path d='M16.59 15.41L21.17 20L16.59 24.59L18 26L24 20L18 14L16.59 15.41Z' fill='#39B54A' />
    </g>
    <defs>
      <filter
        id='filter0_d_129_159'
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
        <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_129_159' />
        <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_129_159' result='shape' />
      </filter>
      <clipPath id='clip0_129_159'>
        <rect width={24} height={24} fill='white' transform='matrix(-1 0 0 -1 32 32)' />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(Group71Icon);
export { Memo as Group71Icon };
