import React from 'react'
import ChinhSuaThongBaoLopHocPhan from './chinhSuaThongBao'
import DanhSachThongBaoLopHocPhan from './danhSachThongBao'

export default function ThongBaoLopHocPhan() {
    return (
        <div
        className="tab-pane fade show"
        id="thongbao"
        role="tabpanel"
        aria-labelledby="thongbao-tab"
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <DanhSachThongBaoLopHocPhan />
            </div>
            <div className="col-md-1 between"></div>
            <div className="col-md-5">
              <ChinhSuaThongBaoLopHocPhan/>
            </div>
          </div>
        </div>
      </div>
    )
}
