import { memo, SVGProps } from 'react';

const Ellipse1Icon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 130 130' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={65} cy={65} r={65} fill='white' stroke='#39B54A' strokeWidth={2} />
  </svg>
);
const Memo = memo(Ellipse1Icon2);
export { Memo as Ellipse1Icon2 };
