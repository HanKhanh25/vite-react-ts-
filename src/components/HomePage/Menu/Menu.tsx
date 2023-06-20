import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { MenuTop } from '../MenuTop/MenuTop';
import { FiRsAngleSmallDown1Icon2 } from './FiRsAngleSmallDown1Icon2.js';
import { FiRsAngleSmallDown1Icon3 } from './FiRsAngleSmallDown1Icon3.js';
import { FiRsAngleSmallDown1Icon4 } from './FiRsAngleSmallDown1Icon4.js';
import { FiRsAngleSmallDown1Icon } from './FiRsAngleSmallDown1Icon.js';
import classes from './Menu.module.css';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
  classes?: {
    phucSinh11?: string;
    root?: string;
  };
  hide?: {
    tRUONGMAMNONHALONG?: boolean;
    group8?: boolean;
  };
}
/* @figmaId 10:90 */
export const Menu: FC<Props> = memo(function Menu(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <MenuTop
        className={classes.menuTop}
        hide={{
          tRUONGMAMNONHALONG: true,
          group8: true,
        }}
      />
      <div className={classes.rectangle2}></div>
      <div className={classes.trangChu}>Trang chủ</div>
      <div className={classes.gioiThieu}>Giới thiệu</div>
      <div className={classes.dichVu}>Dịch vụ</div>
      <div className={classes.fiRsAngleSmallDown1}>
        <FiRsAngleSmallDown1Icon className={classes.icon} />
      </div>
      <div className={classes.lamEp}>Làm đẹp</div>
      <div className={classes.fiRsAngleSmallDown12}>
        <FiRsAngleSmallDown1Icon2 className={classes.icon2} />
      </div>
      <div className={classes.kienThucYHoc}>Kiến thức Y học</div>
      <div className={classes.fiRsAngleSmallDown13}>
        <FiRsAngleSmallDown1Icon3 className={classes.icon3} />
      </div>
      <div className={classes.tinTuc}>Tin tức</div>
      <div className={classes.fiRsAngleSmallDown14}>
        <FiRsAngleSmallDown1Icon4 className={classes.icon4} />
      </div>
      <div className={classes.pHONGKHAMONGYPHUCSINH}>PHÒNG KHÁM ĐÔNG Y PHÚC SINH</div>
      <div className={classes.oRIENTALMEDICINECLINIC}>ORIENTAL MEDICINE CLINIC</div>
      <div className={classes.sOYTETHANHHOA}>SỞ Y TẾ THANH HOÁ</div>
      <div className={`${props.classes?.phucSinh11 || ''} ${classes.phucSinh11}`}></div>
      <div className={classes.rectangle4}></div>
      <div className={classes.AtLichHenKham}>Đặt lịch hẹn khám</div>
      <div className={classes.rectangle34}></div>
      <div className={classes.nhapTuKhoaTimKiem}>Nhập từ khoá tìm kiếm</div>
      <div className={classes.rectangle37}></div>
      <div className={classes.vector}>
        <VectorIcon className={classes.icon5} />
      </div>
    </div>
  );
});
