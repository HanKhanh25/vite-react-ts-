import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Ellipse1 } from './Ellipse1/Ellipse1';
import { Ellipse1Icon2 } from './Ellipse1Icon2.js';
import { Ellipse1Icon3 } from './Ellipse1Icon3.js';
import { Ellipse1Icon4 } from './Ellipse1Icon4.js';
import { Ellipse1Icon } from './Ellipse1Icon.js';
import { Facebook1Icon } from './Facebook1Icon.js';
import { FiRsAngleDoubleSmallRight1Icon2 } from './FiRsAngleDoubleSmallRight1Icon2.js';
import { FiRsAngleDoubleSmallRight1Icon } from './FiRsAngleDoubleSmallRight1Icon.js';
import { Group70Icon2 } from './Group70Icon2.js';
import { Group70Icon } from './Group70Icon.js';
import { Group71Icon2 } from './Group71Icon2.js';
import { Group71Icon } from './Group71Icon.js';
import classes from './HomePage.module.css';
import { Like11Icon } from './Like11Icon.js';
import { Like12Icon } from './Like12Icon.js';
import { Like13Icon } from './Like13Icon.js';
import { Menu } from './Menu/Menu';
import { QuotationMarksInSpeechBubble1I } from './QuotationMarksInSpeechBubble1I.js';

interface Props {
  className?: string;
  hide?: {
    ellipse1?: boolean;
    tRUONGMAMNONHALONG?: boolean;
    group8?: boolean;
  };
}
/* @figmaId 2:2 */
export const HomePage: FC<Props> = memo(function HomePage(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.footer}>
        <div className={classes.rectangle25}></div>
        <div className={classes.gopMatTrongNhungHoatOngOCacBac}>
          <div className={classes.textBlock}>Làm việc tất cả các ngày trong tuần</div>
          <div className={classes.textBlock2}>Sáng: 8h - 12h</div>
          <div className={classes.textBlock3}>Chiều: 13h30 - 17h30</div>
          <div className={classes.textBlock4}>Nếu đến sau 17h30 vui lòng liên hệ trước để bác sĩ đặt lịch</div>
        </div>
        <div className={classes.truongMamNonHaLong}>phòng khám đông y phúc sinh</div>
        <div className={classes.IaChiSo342UongMyInhPhuongMyInh}>
          <p className={classes.labelWrapper}>
            <span className={classes.label}>Địa chỉ : </span>
            <span className={classes.label2}>Số 282 đường Nguyễn Trãi, thành phố Thanh Hóa, tỉnh Thanh Hoá</span>
          </p>
          <div className={classes.textBlock5}>
            <p className={classes.labelWrapper2}>
              <span className={classes.label3}>Hotline :</span>
              <span className={classes.label4}> 084 666 2595</span>
            </p>
          </div>
        </div>
        <div className={classes.chaoMungEnVoiMamNonHaLong}>Lịch làm việc</div>
        <div className={classes.rectangle10}></div>
        <div className={classes.facebookComMamnonhalong}>Facebook.com/PhongKhamDongYPhucSinh282</div>
        <div className={classes.facebook1}>
          <Facebook1Icon className={classes.icon4} />
        </div>
      </div>
      <div className={classes.boxAngKy}>
        <div className={classes.rectangle23}></div>
        <div className={classes.AtLichHenKhamTaiPhongKhamOngYP}>
          Đặt lịch hẹn khám tại Phòng Khám Đông Y Phúc Sinh ngay để giải quyết các vấn đề của bạn
        </div>
        <div className={classes.ANGKYEATLICHKHAMNGAY}>ĐĂNG KÝ ĐỂ ĐẶT LỊCH KHÁM NGAY</div>
        <div className={classes.rectangle102}></div>
        <div className={classes.rectangle8}></div>
        <div className={classes.ANGKY}>ĐĂNG KÝ</div>
        <div className={classes.image20}></div>
        <div className={classes.rectangle41}></div>
        <div className={classes.hoVaTen}>Họ và tên</div>
        <div className={classes.rectangle412}></div>
        <div className={classes.tieuE}>Tiêu đề</div>
        <div className={classes.rectangle413}></div>
        <div className={classes.soIenThoai}>Số điện thoại</div>
        <div className={classes.rectangle414}></div>
        <div className={classes.noiDungLienHe}>Nội dung liên hệ</div>
      </div>
      <div className={classes.tinTuc}>Tin tức</div>
      <div className={classes.rectangle103}></div>
      <div className={classes.thanhPhanChuDuocTrongBaiThuocT}>
        Thành phần chủ dược trong bài thuốc Thảo dược Đông y tăng cường sức đề kháng
      </div>
      <div className={classes.thaoDuocOngYTangCuongSucEKhang}>
        Thảo dược Đông y tăng cường sức đề kháng Thuốc dân tộc được nhiều người dùng tin tưởng và đánh giá cao hiệu quả
        điều trị.
      </div>
      <div className={classes.thanhPhanChuDuocTrongBaiThuocT2}>
        Thành phần chủ dược trong bài thuốc Thảo dược Đông y tăng cường sức đề kháng
      </div>
      <div className={classes.thaoDuocOngYTangCuongSucEKhang2}>
        Thảo dược Đông y tăng cường sức đề kháng Thuốc dân tộc được nhiều người dùng tin tưởng và đánh giá cao hiệu quả
        điều trị.
      </div>
      <div className={classes.tRAINGHIEMNGAYHOMNAYVOIGIAUUAI}>
        TRẢI NGHIỆM NGAY HÔM NAY VỚI GIÁ ƯU ĐÃI CHỈ 69K - Đi 2 TÍNH TIỀN 1
      </div>
      <div className={classes.chonTruongMamNonQuocTeHayTruon}>
        Chọn trường mầm non quốc tế hay trường mầm non song ngữ cho con vốn là băn khoăn của không ít Phụ huynh, nhất là
        khi xu hướng đầu...
      </div>
      <div className={classes.tRAINGHIEMNGAYHOMNAYVOIGIAUUAI2}>
        TRẢI NGHIỆM NGAY HÔM NAY VỚI GIÁ ƯU ĐÃI CHỈ 69K - Đi 2 TÍNH TIỀN 1
      </div>
      <div className={classes.chonTruongMamNonQuocTeHayTruon2}>
        Chọn trường mầm non quốc tế hay trường mầm non song ngữ cho con vốn là băn khoăn của không ít Phụ huynh, nhất là
        khi xu hướng đầu...
      </div>
      <div className={classes._4LoiIchCuaPhuongPhapCaoGioKinh}>4 Lợi ích của phương pháp cạo gió kinh lạc mặt</div>
      <div className={classes.chonTruongMamNonQuocTeHayTruon3}>
        Chọn trường mầm non quốc tế hay trường mầm non song ngữ cho con vốn là băn khoăn của không ít Phụ huynh, nhất là
        khi xu hướng đầu...
      </div>
      <div className={classes._4LoiIchCuaPhuongPhapCaoGioKinh2}>4 Lợi ích của phương pháp cạo gió kinh lạc mặt</div>
      <div className={classes.chonTruongMamNonQuocTeHayTruon4}>
        Chọn trường mầm non quốc tế hay trường mầm non song ngữ cho con vốn là băn khoăn của không ít Phụ huynh, nhất là
        khi xu hướng đầu...
      </div>
      <div className={classes.rectangle82}></div>
      <div className={classes.fiRsAngleDoubleSmallRight1}>
        <FiRsAngleDoubleSmallRight1Icon className={classes.icon5} />
      </div>
      <div className={classes.xemThem}>Xem thêm</div>
      <div className={classes.image14}></div>
      <div className={classes.image15}></div>
      <div className={classes.image16}></div>
      <div className={classes.image17}></div>
      <div className={classes.image18}></div>
      <div className={classes.image19}></div>
      <div className={classes.rectangle14}></div>
      <div className={classes.imgBg1Min1}></div>
      <div className={classes.like11}>
        <Like11Icon className={classes.icon6} />
      </div>
      <div className={classes.like12}>
        <Like12Icon className={classes.icon7} />
      </div>
      <div className={classes.like13}>
        <Like13Icon className={classes.icon8} />
      </div>
      <div className={classes.ongPhamThanhTungKhachHangTaiOn}>
        <p className={classes.labelWrapper3}>
          <span className={classes.label5}>Ông. Phạm Thanh Tùng</span>
          <span className={classes.label6}> - Khách hàng tại Đông Y Phúc Sinh</span>
        </p>
      </div>
      <div className={classes.quotationMarksInSpeechBubble1}>
        <QuotationMarksInSpeechBubble1I className={classes.icon9} />
      </div>
      <div className={classes.CamOnPhongKhamOngYPhucSinhCung}>
        “Cảm ơn Phòng Khám Đông Y Phúc Sinh cùng liệu pháp Đả thông kinh lạc trị liệu Cổ - Vai - Gáy hiệu quả đã giúp
        tôi điều trị triệt để tình trạng đau mỏi vai gáy, tinh thần thoải mái, thể lực cũng trở nên khoẻ mạnh”
      </div>
      <div className={classes.line1}></div>
      <div className={classes.dichVuTaiPhongKham}>Dịch vụ tại Phòng khám</div>
      <div className={classes.rectangle104}></div>
      <div className={classes.triLieu}>Trị liệu</div>
      <div className={classes.duongSinhOngY}>Dưỡng sinh Đông Y</div>
      <div className={classes.phongKhamOngYPhucSinhChamSocIe}>
        Phòng Khám Đông Y Phúc Sinh chăm sóc điều trị các vấn đề đau đầu, mất ngủ, rối loạn tiền đình, đau mỏi vai gáy,
        tê bì tay chân, đau mỏi lưng eo, đau mỏi khớp gối.
      </div>
      <div className={classes.rectangle38}></div>
      <div className={classes.rectangle39}></div>
      <div className={classes.rectangle40}></div>
      <div className={classes.image9}></div>
      <div className={classes.image5}></div>
      <div className={classes.AuAuMatNgu}>Đau đầu mất ngủ</div>
      <div className={classes.AuMoiCoVaiGay}>Đau mỏi cổ vai gáy</div>
      <div className={classes.teBiTayChan}>Tê bì tay chân</div>
      <div className={classes.image8}></div>
      <div className={classes.group70}>
        <Group70Icon className={classes.icon10} />
      </div>
      <div className={classes.group71}>
        <Group71Icon className={classes.icon11} />
      </div>
      <div className={classes.rectangle382}></div>
      <div className={classes.rectangle392}></div>
      <div className={classes.rectangle402}></div>
      <div className={classes.thuAoThang}>Thủ Đạo Thang</div>
      <div className={classes.cuuNgaiNong}>Cứu ngải nóng</div>
      <div className={classes.chamSocMatBangNgocThach}>Chăm sóc mặt bằng ngọc thạch</div>
      <div className={classes.group702}>
        <Group70Icon2 className={classes.icon12} />
      </div>
      <div className={classes.group712}>
        <Group71Icon2 className={classes.icon13} />
      </div>
      <div className={classes.image11}></div>
      <div className={classes.image12}></div>
      <div className={classes.image13}></div>
      <div className={classes.rectangle13}></div>
      <div className={classes.rectangle83}></div>
      <div className={classes.fiRsAngleDoubleSmallRight12}>
        <FiRsAngleDoubleSmallRight1Icon2 className={classes.icon14} />
      </div>
      <div className={classes.lienHeNgay}>Liên hệ ngay</div>
      <div className={classes.AngKyNhanTuVan}>Đăng ký nhận tư vấn</div>
      <div className={classes.prescribingDrugsPatient1}></div>
      <div className={classes.rectangle9}></div>
      <div className={classes.taiSaoBanChonChungToi}>Tại sao bạn chọn chúng tôi?</div>
      <div className={classes.rectangle105}></div>
      <div className={classes.rectangle12}></div>
      <div className={classes.rectangle11}></div>
      <div className={classes.rectangle132}></div>
      <div className={classes.giayPhepHoatOng}>Giấy phép hoạt động</div>
      <div className={classes.phongKhamOngYPhucSinhUocCapPhe}>
        Phòng Khám Đông Y Phúc Sinh được cấp phép hoạt động bởi Sở Y Tế tỉnh Thanh Hoá
      </div>
      <div className={classes.image1}></div>
      <div className={classes.rectangle112}></div>
      <div className={classes.rectangle133}></div>
      <div className={classes.chungChiHanhNghe}>Chứng chỉ hành nghề</div>
      <div className={classes.OiNguBacSiChuyenGiaUocSoYTeTha}>
        Đội ngũ bác sĩ, chuyên gia được Sở Y Tế Thanh Hoá cấp chứng chỉ hành nghề khám chữa bệnh bằng Y Học Cổ Truyền
      </div>
      <div className={classes.image110}></div>
      <div className={classes.rectangle113}></div>
      <div className={classes.rectangle134}></div>
      <div className={classes.duocLieuSach}>Dược liệu sạch</div>
      <div className={classes.toanBoDuocLieuSuDungTrongKhamC}>
        Toàn bộ dược liệu sử dụng trong khám chữa bệnh tại Đông Y Phúc Sinh là 100&amp; dược liệu sạch
      </div>
      <div className={classes.image111}></div>
      <div className={classes.vePhongKhamOngYPhucSinh}>Về Phòng Khám Đông Y Phúc Sinh</div>
      <div className={classes.phongKhamOngYPhucSinhChamSocIe2}>
        <div className={classes.textBlock6}>
          Phòng Khám Đông Y Phúc Sinh chăm sóc điều trị các vấn đề đau đầu, mất ngủ, rối loạn tiền đình, đau mỏi vai
          gáy, tê bì tay chân, đau mỏi lưng eo, đau mỏi khớp gối.
        </div>
        <div className={classes.textBlock7}>
          Sử dụng thảo dược tự nhiên như trà dưỡng sinh, rượu nóng,... và các kỹ thuật dưỡng sinh đông y giúp xóa tan
          mệt mỏi, trị các bệnh về xương khớp, các bệnh của thời hiện đại,...
        </div>
      </div>
      <div className={classes.rectangle4}></div>
      <div className={classes.loremIpsumIsSimplyDummyTextOfT}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
        industry&#39;s standard dummy text ever since the 1500s
      </div>
      <div className={classes.loremIpsumIsSimplyDummyTextOfT2}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
        industry&#39;s standard dummy text ever since the 1500s
      </div>
      <div className={classes.loremIpsumIsSimplyDummyTextOfT3}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
        industry&#39;s standard dummy text ever since the 1500s
      </div>
      <div className={classes.loremIpsumIsSimplyDummyTextOfT4}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
        industry&#39;s standard dummy text ever since the 1500s
      </div>
      <div className={classes.bACSITANTAM}>
        <div className={classes.textBlock8}>BÁC SĨ</div>
        <div className={classes.textBlock9}>TẬN TÂM</div>
      </div>
      <div className={classes.vATLYTRILIEU}>
        <div className={classes.textBlock10}>VẬT LÝ</div>
        <div className={classes.textBlock11}>TRỊ LIỆU</div>
      </div>
      <div className={classes.bAITHUOCHAY}>
        <div className={classes.textBlock12}>BÀI THUỐC</div>
        <div className={classes.textBlock13}>HAY</div>
      </div>
      <div className={classes.nGHIENCUUCHUYENSAU}>
        <div className={classes.textBlock14}>NGHIÊN CỨU</div>
        <div className={classes.textBlock15}>CHUYÊN SÂU</div>
      </div>
      <Ellipse1
        className={classes.ellipse5}
        swap={{
          ellipse1: <Ellipse1Icon className={classes.icon} />,
        }}
      />
      <div className={classes._5967307}></div>
      <Ellipse1
        className={classes.ellipse6}
        swap={{
          ellipse1: <Ellipse1Icon2 className={classes.icon2} />,
        }}
      />
      <Ellipse1
        className={classes.ellipse7}
        swap={{
          ellipse1: <Ellipse1Icon3 className={classes.icon3} />,
        }}
      />
      <div className={classes._3696315}></div>
      <Ellipse1
        className={classes.ellipse8}
        hide={{
          ellipse1: true,
        }}
      />
      <div className={classes.ellipse1}>
        <Ellipse1Icon4 className={classes.icon15} />
      </div>
      <div className={classes._3974844}></div>
      <div className={classes._18394041}></div>
      <div className={classes.banner}></div>
      <Menu className={classes.menu} classes={{ phucSinh11: classes.phucSinh11 }} />
    </div>
  );
});
