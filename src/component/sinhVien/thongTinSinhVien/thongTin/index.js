import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'; 
export default function ThongTinSinhVien() {
  const { data } = useSelector(state => state.sinhVienReducer,shallowEqual);
  return (

    ///
    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
      <div className="row">
        <div className="col-md-6">
          <label>Mã sinh viên</label>
        </div>
        <div className="col-md-6">
          <p>{data.maSinhVien}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <label>Chuyên ngành</label>
        </div>
        <div className="col-md-6">
          <p>{data.chuyenNganh}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <label>Họ và tên</label>
        </div>
        <div className="col-md-6">
          <p>{data.hoTen}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <label>Giới tính</label>
        </div>
        <div className="col-md-6">
          <p>{data.gioiTinh ? "Nam" : "Nữ"}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <label>Lớp</label>
        </div>
        <div className="col-md-6">
          <p>{data.tenLop}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <label>Email</label>
        </div>
        <div className="col-md-6">
          <p>{data.email}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <label>Số điện thoại</label>
        </div>
        <div className="col-md-6">
          <p>{data.soDT}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <label>Địa chỉ</label>
        </div>
        <div className="col-md-6">
          <p>{data.diaChi}</p>
        </div>
      </div>
    </div>

  )
}
