import React from "react";
import './style.css'
export default function DonNghiHoc() {
  return (
    <div
      className="tab-pane fade show"
      id="donnghihoc"
      role="tabpanel"
      aria-labelledby="donnghihoc-tab"
    >
      <div className="danh-sach-don-nghi-hoc">
       <div className="search-custem">
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
            
          >
            <option value={0}>Tất cả thông báo</option>
            <option value={1}>Thông báo bị ẩn</option>
            <option value={2}>Thông báo hiển thị</option>
            <option value={3}>Thông báo bị xóa</option>
          </select>
        </div>
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
 <div
      className="list-item"
      data-id={13}
      data-item-sortable-id={0}
      draggable="true"
      role="option"
      aria-grabbed="false"
    //   style={{backgroundColor:`${item.hienThi?'':'#e3f2fd'}`}}
    >
      <div className="flex">
        <a href="#" className="item-author text-color" data-abc="true">
          {/* {item.tieuDe.slice(0, 30)}... */}
        </a>
        <div className="item-except text-muted text-sm h-1x">
          {/* {item.noiDung} */}
        </div>
      </div>
      <div className="no-wrap">
        <div className="item-date text-muted text-sm d-none d-md-block">
          {/* {formatDateTime(item.ngayTao)} */}
        </div>
      </div>
      <div>
        <div className="item-action dropdown">
          <a
            href="#"
            data-toggle="dropdown"
            className="text-muted"
            data-abc="true"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-more-vertical"
            >
              <circle cx="12" cy="12" r="1"></circle>
              <circle cx="12" cy="5" r="1"></circle>
              <circle cx="12" cy="19" r="1"></circle>
            </svg>
          </a>
          <div
            className="dropdown-menu dropdown-menu-right bg-black"
            role="menu"
          >
            <a className="dropdown-item" data-abc="true"  >
              Xem chi tiết
            </a>
            <a
              className="dropdown-item edit"
              data-abc="true"
            //   onClick={chinhSua}
            >
              Chỉnh sửa
            </a>

            <a className="dropdown-item trash" data-abc="true" >
              Xóa
            </a>
            {/* {item.hienThi ? (
              <a className="dropdown-item trash" data-abc="true"  >
                Ẩn thông báo
              </a>
            ) : (
              <a className="dropdown-item trash" data-abc="true"  >
                Hiện thông báo
              </a>
            )} */}
          </div>
        </div>
      </div>
    </div>

                </div>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="pagination"></div>
      </div>
    </div>
  );
}
