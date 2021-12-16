import React from 'react'
import './style.css'
export default function DanhSachThongBaoLopHocPhan() {
    return (
        <div className="danh-sach-thong-bao">
      <div className="search">
        <div className="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
          <div className="input-group">
            <input
              type="search"
              name="search"
              placeholder="Nhập từ khóa cần tìm"
              aria-describedby="button-addon1"
              className="form-control border-0 bg-light"
            />
            <div className="input-group-append">
              <i className="fa fa-search"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="selected">
        <select
          className="form-select form-select-sm"
          aria-label=".form-select-sm example"
          defaultValue={0}
        >
          <option value={0}>Tất cả thông báo</option>
          <option value={1}>Thông báo bị ẩn</option>
          <option value={2}>Thông báo hiển thị</option>
          <option value={3}>Thông báo bị xóa</option>
        </select>
      </div>
      <div className="page-content page-container" id="page-content">
        <div className="padding">
          <div className="row">
            {/* <div className="col-md-8"> */}
              <div className="d-flex justify-content-center">
                <div
                  className="list list-row card"
                  id="sortable"
                  data-sortable-id={0}
                  aria-dropeffect="move"
                >
                </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="pagination">
        
      </div>
    </div>
    )
}
