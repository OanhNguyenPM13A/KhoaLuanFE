import React from "react";
import { useDispatch } from "react-redux";
import { atcGetCanhBaoSinhViensLopHoc } from "../../../redux/actions/GiangVien";
import { formatTinhTrangSinhVienText } from "../../../utils/format/formatTinhTrangSinhVien";

export default function SinhVienLopHocItem(props) {   
  console.log(props.item);
    const dispatch = useDispatch();
  const openModalCanhBao = () => {  
    props.getIdItem(props.item.id)  
    dispatch(atcGetCanhBaoSinhViensLopHoc(props.item.id));
  
  };
  return (
    <React.Fragment>
      <tr style={{backgroundColor:props.item.canhBao?"#ff79b0":""}}>
        <td>{props.stt}</td>
        <td>{props.item.maSV}</td>
        <td>{props.item.hoTen}</td>
        <td>{props.item.gioiTinh === true ? "Nam" : "Nữ"}</td>
        <td>{props.item.email}</td>
        <td>{formatTinhTrangSinhVienText(props.item.trangThaiSinhVien)}</td>
        <td>"hoc hanh binh thuong"</td>
        <td>{props.item.diemTBTL}</td>
        <td>
          <button
            className="btn btn-link"
            data-toggle="modal"
            data-target="#modelId"
            onClick={openModalCanhBao}
            style={{ color: "red" }}
          >
            Cảnh báo
          </button>
        </td>
      </tr>
     {/* <CanhBaoSinhVien data = {props.item}/> */}
    </React.Fragment>
  );
}
