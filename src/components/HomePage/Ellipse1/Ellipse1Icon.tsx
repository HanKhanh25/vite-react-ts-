import { memo, SVGProps } from 'react';

const Ellipse1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 130 130' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={65} cy={65} r={65} fill='#E15D4A' />
  </svg>
);
const Memo = memo(Ellipse1Icon);
export { Memo as Ellipse1Icon };
