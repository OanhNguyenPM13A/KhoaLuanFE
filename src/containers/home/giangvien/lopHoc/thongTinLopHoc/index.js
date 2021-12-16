import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  atcGetSinhViensLopHoc,
  atcGetThongBaoSinhViensLopHoc,
} from "../../../../../redux/actions/GiangVien";
import DanhSachSinhVienLopHoc from "./DanhSachSinhVienLopHoc";
import "./style.css";
import ThongBaoLopHoc from "./ThongBaoLopHoc";
import ThongTinchiTietLopHoc from "./ThongTinChiTietLopHoc";
export default function ThongTinLopHoc(props) {
  const { id } = props.match.params;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(atcGetSinhViensLopHoc(id, 0));
    dispatch(atcGetThongBaoSinhViensLopHoc(id, 0));
  }, []);

  return (
    <div className="thong-tin-lop-hoc">
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
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="tab-content profile-tab" id="myTabContent">
                <ThongTinchiTietLopHoc id={id} />
                <ThongBaoLopHoc id={id} />
              </div>
            </div>
          </div>
        </form>
        <div className="container-fluid emp-profile danhsach" style={{marginTop:'1=20px'}}>
          
          <DanhSachSinhVienLopHoc id={id}/>
        </div>
      </div>
    </div>
  );
}
