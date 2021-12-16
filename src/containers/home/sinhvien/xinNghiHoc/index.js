import React from "react";
import './style.css'
export default function XinNghiHoc() {
  return (
    <div className="don-xin-nghi-hoc">
      <div className="container-fluid px-1 py-5 mx-auto">
        <div className="row d-flex justify-content-center">
          <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
            <div className="card">
              <h5 className="text-center mb-4">ĐƠN XIN NGHỈ HỌC</h5>
              <form className="form-card">
                <div className="row justify-content-between text-left">
                  <div className="col-md-6">
                    <div className="form-group flex-column d-flex">
                      {" "}
                      <label className="form-control-label px-3">
                        Lớp học phần <span className="text-danger"> *</span>
                      </label>{" "}
                      <input type="text" id="fname" name="fname" />{" "}
                    </div>
                    <div className="form-group flex-column d-flex">
                      {" "}
                      <label className="form-control-label px-3">
                        Ngày nghỉ học <span className="text-danger"> *</span>
                      </label>{" "}
                      <input type="date" id="fname" name="fname" />{" "}
                    </div>
                  </div>
                  <div className="form-group col-md-6 flex-column d-flex">
                    {" "}
                    <label className="form-control-label px-3">
                      Lý do<span className="text-danger"> *</span>
                    </label>{" "}
                    <textarea id="ans" name="ans" rows={5} />{" "}
                  </div>
                </div>

                <div className="row justify-content-end">
                  <div className="form-group col-md-12" >
                    {" "}
                    <button type="submit" className="btn-block btn-primary" style={{ width: '30%', marginLeft: '70%' }}>
                      Gửi đơn
                    </button>{" "}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="danh-sach-dơn-nghi-hoc-sinh-vien">
        <h5 style={{ textAlign: "center" }}>DANH SÁCH ĐƠN NGHỈ HỌC</h5><br></br><br></br>
        <table className="table">
          <thead style={{ backgroundColor: "skyblue" }}>
            <tr>
              <th>STT</th>
              <th>Lớp học phần</th>
              <th>Ngày nghỉ</th>
              <th>Lý do</th>
              <th>Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>HP1</td>
              <td>20-10-2021</td>
              <td>Bị ốm</td>
              <td>Chấp nhận</td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>
  );
}
