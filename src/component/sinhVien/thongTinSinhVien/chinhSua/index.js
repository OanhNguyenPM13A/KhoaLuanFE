import React, { useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { atcChinhSuaThongTinSinhVien } from '../../../../redux/actions/SinhVien';
import { atcImgUrl } from "../../../../redux/actions/TaiKhoan";
import { confirmAlert } from "react-confirm-alert";
export default function ChinhSuaThongTin(props) {
  const { data } = useSelector(state => state.sinhVienReducer,shallowEqual)
  const dispatch = useDispatch();
  const [thongTin, setThongTin] = useState({
    soDT: data.soDT,
    diaChi: data.diaChi,
    email: data.email
  })
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setThongTin({ ...thongTin, [name]: value }); 
    console.log(thongTin);
  }
  const handelChinhSuaThongTin = () => {
    confirmAlert({
      title: "Lưu ý",
      message:
        "Bạn có muốn chỉnh sửa thông tin! ",
      buttons: [
        {
          label: "Có",
          onClick: () => {
            dispatch(atcChinhSuaThongTinSinhVien(thongTin, props.history))
          },
          className: "btn btn-primary",
        },
        {
          label: "Không",
          onClick: () => {
            return;
          },
          className: "btn btn-primary btn-sm",
        },
      ],
    });
  
  }

  return (
    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab" style={{display:!localStorage.getItem("idsv")?'block':'none'}}>
      <div className="row">
        <div className="col-md-6">
          <label>Email</label>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <input type="text" className="form-control" name="email" placeholder="Nhập email " defaultValue={data.email} onChange={handleInputChange} />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <label>Số điện thoại</label>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <input type="text" className="form-control" name="soDT" placeholder="Nhập số điện thoại" defaultValue={data.soDT} onChange={handleInputChange} />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <label>Địa chỉ</label>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <input type="text" className="form-control" name="diaChi" placeholder="Nhập địa chỉ" defaultValue={data.diaChi} onChange={handleInputChange} />
          </div>
        </div>
      </div>
      <div className="col-md-2">
        <input type="button" className="profile-save-btn btn-primary" name="btnAddMore" defaultValue="Lưu thông tin" onClick={handelChinhSuaThongTin} />
      </div>
    </div>


  )
}
