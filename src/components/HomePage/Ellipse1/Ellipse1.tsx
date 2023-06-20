import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Ellipse1.module.css';
import { Ellipse1Icon } from './Ellipse1Icon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    ellipse1?: ReactNode;
  };
  hide?: {
    ellipse1?: boolean;
  };
}
/* @figmaId 10:160 */
export const Ellipse1: FC<Props> = memo(function Ellipse1(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {!props.hide?.ellipse1 && (
        <div className={classes.ellipse1}>{props.swap?.ellipse1 || <Ellipse1Icon className={classes.icon} />}</div>
      )}
    </div>
  );
});
