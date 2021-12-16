import { FormatIndentDecreaseTwoTone } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { atcDiemDanh, atcXoaNgayNghiSinhVien } from "../../../../../../../redux/actions/GiangVien";
import { formatDateTime } from "../../../../../../../utils/format/formatValues";

export default function DiemDanh(props) {
  const state = useSelector(state => state.ngayNghiSinhVienReducer);
  const [phep,setPhep] =useState(true);
  const [sinhVien, setSinhVien] = useState();
  const [date, setDate] = useState(new Date().toISOString().substring(0, 10));
  const { dataItem, idLopHocPhan } = props;
  useEffect(() => {
    if (dataItem) {
      setSinhVien(dataItem);
    }
  }, [dataItem]);
  const dispatch = useDispatch();
  const onDiemDanh = () => { 
    if(!window.confirm("Bạn chắc chứ!")){return;}  
    dispatch(atcDiemDanh(dataItem.id,idLopHocPhan,{date:date,phep:phep},props.dataItem.idSvLhp))
  };
  const onChangeDate = (e) => {
    setDate(e.target.value);
  };
  const onChangePhep = (e) => {
   setPhep(e.target.checked)
  };

  const xoaNgayNghi =(id)=>{ 

    if(!window.confirm("Bạn có chắc chắn xóa!"))return;
    dispatch(atcXoaNgayNghiSinhVien(id,props.idLopHocPhan,props.idSvLhp))
  }
  // 
 
  return (
    <div
      className="modal fade"
      id="modalSoNgayNghiPhep"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="modelTitleId"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">ĐIỂM DANH</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <h6>Danh sách ngày nghỉ</h6>
            <div className="card shadow mb-4">
              <div className="card-body p-5">
                <ul>
                 
                 {
                   state.data?state.data.map(ngayNghi=>{
                     return(
                      <li className="mb-2" key={ngayNghi.id}>
                     { formatDateTime(ngayNghi.ngayNghi)}
                     <span style={{ color: ngayNghi.phep?'blue':'currentcolor', fontWeight: "bold" }}>
                      {ngayNghi.phep?'Có phép  ':'Không phép'}
                    </span>
                      <i onClick={()=>xoaNgayNghi(ngayNghi.id)}
                        className="fas fa-trash-alt"
                        style={{ color: "red" }}
                      ></i>
                    </li>
                     )
                   }):""
                 } 
                </ul>
              </div>
            </div>
            <h6>Vắng</h6>
            <div className="card shadow mb-4 form-diemdanh">
              <div className="card-body p-5">
                <div className="form-group">
                  <label>Ngày nghỉ</label>
                  <input
                    className="form-control"
                    type="date"
                    onChange={onChangeDate}
                    name="date"
                    defaultValue={date}
                  />
                </div>
                <div>
                  <div className="form-check">
                    <label className="form-check-label">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        name="phep" 
                        defaultChecked
                        onChange={onChangePhep}
                      />
                      Phép
                    </label>
                  </div>
                </div>
              </div>
              <button
                style={{
                  width: "100px",
                  marginLeft: "70%",
                  marginBottom: "20px",
                }}
                className="btn btn-primary"
                onClick={onDiemDanh}
              >
                Lưu
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
