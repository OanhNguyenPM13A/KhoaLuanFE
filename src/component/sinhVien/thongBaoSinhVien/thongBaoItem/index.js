import React from 'react'
import { formatDateTime } from '../../../../utils/format/formatValues'
import "./style.css";
export default function ThongBaoSinhVienItem(props) {
  const clickModal =()=>{
    props.handleClickThongBao(props.item)
  }
  console.log(props.item);
    return (
        <div className="card card-body" >
        <div className="media align-items-center align-items-lg-start text-center text-lg-left flex-column flex-lg-row">
          <div className="mr-2 mb-3 mb-lg-0"> 
            <img
              src="https://sv.iuh.edu.vn/Content/ThemeMXH/img/icons/news.png"
              width={150}
              height={150}
              alt="aa"
            />
          </div>
          <div className="media-body">
            <h6 className="media-title font-weight-semibold"> 
              <a style={{color:props.item.thongBaoType=="CANH_BAO"?"#ff6090":"steelblue"}}
                href="#"
                data-abc="true"
                data-toggle="modal"
                data-target="#myModal"
                onClick={clickModal}
              >
                {props.item.tieuDe}
              </a>
            </h6>
            <p className="list-inline list-inline-dotted mb-3 mb-lg-2">
              {`${formatDateTime(props.item.ngayTao)}`}

            </p>
            <p className="mb-3">{props.item.noiDung.slice(0,150)}....</p>
          </div>
        </div>
      </div>
    )
}
