import React from "react";
import { NavLink } from "react-router-dom";

export default function LopHocPhanItem(props) {
  const { stt, item } = props;
  return (
    <tr>
      <th scope="row">{stt+1}</th>
      <td> <NavLink className="nav-link" to={`/giangvien/lophocphan/${item.id}` }>{item.id}</NavLink></td>
      
      <td>{item.tenLopHocPhan}</td>
      <td>{item.tenMonHoc}</td>
      <td>{item.siSo}</td>
    </tr>
  );
}
