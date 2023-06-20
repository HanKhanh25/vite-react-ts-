import { memo, SVGProps } from 'react';

const Facebook1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 46 46' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_129_133)'>
      <path
        d='M5.75 46H23V30.1875H17.25V23H23V17.25C23 12.4852 26.8602 8.625 31.625 8.625H37.375V15.8125H34.5C32.913 15.8125 31.625 15.663 31.625 17.25V23H38.8125L35.9375 30.1875H31.625V46H40.25C43.4202 46 46 43.4202 46 40.25V5.75C46 2.57792 43.4202 0 40.25 0H5.75C2.57792 0 0 2.57792 0 5.75V40.25C0 43.4202 2.57792 46 5.75 46Z'
        fill='white'
      />
    </g>
    <defs>
      <clipPath id='clip0_129_133'>
        <rect width={46} height={46} fill='white' />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(Facebook1Icon);
export { Memo as Facebook1Icon };
