import React from "react";
import { useDispatch } from "react-redux";
import { atcGetNgayNghiSinhVien } from "../../../redux/actions/GiangVien";
import ngayNghiSinhVienReducer from "../../../redux/reducers/ngayNghi/ngayNghiSinhVienReducer";

export default function SinhVienLopHocPhanItem(props) {
  const {
    diemSinhVienMonHocDto,
    hoTen,
    id,
    soNgayNghiKhongPhep,
    soNgayNghiPhep,
    trangThai,
    idSvLhp,
  } = props.item;
  const dispatch = useDispatch();
  const handleDiemDanh = () => {
    props.getIdItem(id);
    props.getIdSvLhp(idSvLhp);

    dispatch(atcGetNgayNghiSinhVien(idSvLhp));
  };
  const setColorWarning = ()=>{
    if((soNgayNghiPhep/2+soNgayNghiKhongPhep>=3)||diemSinhVienMonHocDto.gk==0||diemSinhVienMonHocDto.ck>3){
      console.log("false");
      return false;
    }
    console.log("true");
    return true;
  }
  return (
    <tr
      style={{
        backgroundColor:!setColorWarning()? "#e2f1f8":''
      }}
    >
      <td>{props.index + 1}</td>
      <td>{id}</td>
      <td>{hoTen}</td>
      <td>
        {diemSinhVienMonHocDto.tk1 > 0 ? diemSinhVienMonHocDto.tk1 : "-"}
      </td>
      <td>
        {diemSinhVienMonHocDto.tk2 > 0 ? diemSinhVienMonHocDto.tk2 : "-"}
      </td>
      <td>
        {diemSinhVienMonHocDto.tk3 > 0 ? diemSinhVienMonHocDto.tk3 : "-"}
      </td>
      <td>{diemSinhVienMonHocDto.gk > 0 ? diemSinhVienMonHocDto.gk : "-"}</td>
      <td>{diemSinhVienMonHocDto.ck > 0 ? diemSinhVienMonHocDto.ck : "-"}</td>
      <td>
        {Math.round(diemSinhVienMonHocDto.tbc * 100) / 100 >= 0
          ? Math.round(diemSinhVienMonHocDto.tbc * 100) / 100 
          : "-"}
      </td>
      <td style={{ textAlign: "center" }}>{soNgayNghiPhep}</td>
      <td style={{ textAlign: "center" }}>{soNgayNghiKhongPhep}</td>
      <td>{trangThai ? "Đang học" : "Cấm thi"}</td>
      <td style={{ textAlign: "left" }}>
        <button
          className="btn btn-link"
          style={{ color: "red", height: "20px" }}
        >
          Cảnh báo
        </button>
        <br></br>
        <button
          className="btn btn-link"
          style={{ color: "skyblue", height: "20px" }}
          data-toggle="modal"
          data-target="#modelNhapDiem"
          onClick={() => {
            props.getIdItem(id);
          }}
        >
          Nhập điểm
        </button>
        <br />
        <button
          className="btn btn-link"
          data-toggle="modal"
          data-target="#modalSoNgayNghiPhep"
          onClick={handleDiemDanh}
        >
          Điểm danh
        </button>
      </td>
    </tr>
  );
}
