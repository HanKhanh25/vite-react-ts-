import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { FiRsAngleSmallDown1Icon2 } from './FiRsAngleSmallDown1Icon2.js';
import { FiRsAngleSmallDown1Icon3 } from './FiRsAngleSmallDown1Icon3.js';
import { FiRsAngleSmallDown1Icon } from './FiRsAngleSmallDown1Icon.js';
import classes from './MenuTop.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  hide?: {
    tRUONGMAMNONHALONG?: boolean;
    group8?: boolean;
  };
}
/* @figmaId 3:3 */
export const MenuTop: FC<Props> = memo(function MenuTop(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle1}></div>
      {!props.hide?.tRUONGMAMNONHALONG && <div className={classes.tRUONGMAMNONHALONG}>TRƯỜNG MẦM NON HẠ LONG</div>}
      <div className={classes.rectangle2}></div>
      <div className={classes.trangChu}>Trang chủ</div>
      <div className={classes.gioiThieu}>Giới thiệu</div>
      <div className={classes.fiRsAngleSmallDown1}>
        <FiRsAngleSmallDown1Icon className={classes.icon} />
      </div>
      <div className={classes.tuyenSinh}>Tuyển sinh</div>
      <div className={classes.fiRsAngleSmallDown12}>
        <FiRsAngleSmallDown1Icon2 className={classes.icon2} />
      </div>
      <div className={classes.tinTuc}>Tin tức</div>
      <div className={classes.fiRsAngleSmallDown13}>
        <FiRsAngleSmallDown1Icon3 className={classes.icon3} />
      </div>
      <div className={classes.tuyenDung}>Tuyển dụng</div>
      <div className={classes.chuongTrinhHoc}>Chương trình học</div>
      <div className={classes.rectangle3}></div>
      <div className={classes.AngKy}>Đăng ký</div>
    </div>
  );
});
