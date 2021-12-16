import React from 'react'
import './style.css'
export default function ChinhSuaThongBaoLopHocPhan() {
    return (
        <>
      <div className="form-card">
        <div className="row justify-content-between text-left">
          <div className="form-group col-sm-12 flex-column d-flex">
            <label className="form-control-label px-3">
              Tiêu đề<span className="text-danger"> *</span>
            </label>
            <textarea
              id="lname"
              name="tieuDe"
              placeholder="Nhập tiêu đề"
            />
          </div>
          <div className="form-group col-sm-12 flex-column d-flex">
            <label className="form-control-label px-3">
              Nội dung<span className="text-danger"> *</span>
            </label>
            <textarea
              id="lname"
              name="noiDung"
              placeholder="Nhập nội dung"
              rows="5"
            />
          </div>
        </div>
        <div className="footer-thongbao">
          <button
            type="button"
            className="btn btn-primary btn-sm" 
          >
            Thêm thông báo
          </button>
          &nbsp;&nbsp;&nbsp;
          <button
            type="button"
            className="btn btn-primary btn-sm"
          >
            Làm mới
          </button>
          &nbsp;&nbsp;&nbsp;
          <button
            type="button"
            className="btn btn-primary btn-sm"
          >
            Lưu
          </button>
          &nbsp;&nbsp;&nbsp;
          <button
            type="button"
            className="btn btn-primary btn-sm"
          >
            Hủy bỏ
          </button>
        </div>
      </div>
    </>
    )
}
