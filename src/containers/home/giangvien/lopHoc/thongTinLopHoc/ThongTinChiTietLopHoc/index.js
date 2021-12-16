import React from "react";
import { shallowEqual, useSelector } from "react-redux";

export default function ThongTinchiTietLopHoc(props) {
  const { data } = useSelector((state) => state.lopHocReducer,shallowEqual);
  const getThongTinLopHoc = () => {
    return data.lopDtos.filter((lop) => {
      return lop.id == props.id;
    })[0];
  };
  return (
    <div
      className="tab-pane fade"
      id="thongtin"
      role="tabpanel"
      aria-labelledby="thongtin-tab"
    >
      <div className="row">
        <div className="col-md-12">
        <div className="thong-tin-lop" style={{marginTop: "-216px" , marginLeft: "100px"}}>
          <div className="info">
            <div className="panel-body bio-graph-info">
              <div className="row">
                <div className="bio-row">
                  <p>
                    <span>Tên lớp </span>
                    {getThongTinLopHoc() ? getThongTinLopHoc().tenLop : ""}
                  </p>
                </div>
                <div className="bio-row">
                  <p>
                    <span>Khóa học </span>
                    {getThongTinLopHoc() ? getThongTinLopHoc().khoaHoc : ""}
                  </p>
                </div>
                <div className="bio-row">
                  <p>
                    <span>Chuyên ngành </span>
                    {getThongTinLopHoc()
                      ? getThongTinLopHoc().tenChuyenNganh
                      : ""}
                  </p>
                </div>

                <div className="bio-row">
                  <p>
                    <span>Sỉ số </span>
                    {getThongTinLopHoc() ? getThongTinLopHoc().siSo : ""}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
