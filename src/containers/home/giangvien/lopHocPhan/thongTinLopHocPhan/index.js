import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { atcGetSinhViensLopHocPhan } from '../../../../../redux/actions/GiangVien'
import DanhSachSinhVienLopHocPhan from './danhDachSinhVienLopHocPhan'
import DonNghiHoc from './donNghiHoc'
import ThongBaoLopHocPhan from './thongBaoLopHocPhan'
import ThongTinChiTietLopHocPhan from './thongTinChiTietLopHocPhan'
import './style.css'
import { shallowEqual } from 'react-redux'
export default function ThongTinLopHocPhan(props) {
  const { id } = props.match.params;
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.lopHocPhanReducer, shallowEqual);
  const getThongTinLopHoc = () => {
    return data.lopHocPhanDtos.filter((lop) => {
      return lop.id == id;
    })[0];
  };
  console.log(getThongTinLopHoc());
  useEffect(() => {
    dispatch(atcGetSinhViensLopHocPhan(id, 0));

    // dispatch(atcGetThongBaoSinhViensLopHoc(id, 0));
  }, []);
  return (
    <div className="thong-tin-lop-hoc-phan">
      <div className="container-fluid emp-profile">
        <form method="post">
          <div className="row">
            <div className="col-md-12">
              <div className="profile-head">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="thongtin-tab"
                      data-toggle="tab"
                      href="#thongtin"
                      role="tab"
                      aria-controls="thongtin"
                      aria-selected="true"
                    >
                      Thông tin lớp học
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="thongbao-tab"
                      data-toggle="tab"
                      href="#thongbao"
                      role="tab"
                      aria-controls="thongbao"
                      aria-selected="false"
                    >
                      Thông báo
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="donnghihoc-tab"
                      data-toggle="tab"
                      href="#donnghihoc"
                      role="tab"
                      aria-controls="donnghihoc"
                      aria-selected="false"
                    >
                      Đơn xin nghỉ học
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="tab-content profile-tab" id="myTabContent">
                <ThongTinChiTietLopHocPhan thongTin={getThongTinLopHoc()} />
                <ThongBaoLopHocPhan />
                <DonNghiHoc />
              </div>
            </div>
          </div>
        </form>
        <div className="container-fluid emp-profile danhsach">
          <DanhSachSinhVienLopHocPhan id={id} />
        </div>
      </div>
    </div>
  )
}
