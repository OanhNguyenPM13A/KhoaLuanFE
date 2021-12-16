import React from 'react'

export default function ThongTinChiTietLopHocPhan(props) {
  const{id,tenLopHocPhan,idMonHoc,tenMonHoc,siSo } = props.thongTin
    return (
        <div
      className="tab-pane fade show active"
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
                    {tenLopHocPhan}
                  </p>
                </div>
                <div className="bio-row">
                  <p>
                    <span>Khóa học </span>

                  </p>
                </div>
                <div className="bio-row">
                  <p>
                    <span>Chuyên ngành </span>
                  </p>
                </div>

                <div className="bio-row">
                  <p>
                    <span>Sỉ số </span>
                   {siSo}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    )
}
