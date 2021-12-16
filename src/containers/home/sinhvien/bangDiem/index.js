import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import "./style.css";

export default function BangDiem() {
  const { data } = useSelector((state) => state.diemReducer, shallowEqual);
  return (
    <div className="bangdiem">
      <table className="table table-bordered">
        <thead>
          <tr style={{ backgroundColor: 1, textAlign: "center" }}>
            <th scope="col">STT</th>
            <th scope="col">Tên môn học</th>
            <th scope="col" colSpan="3">
              Điểm thường kỳ
            </th>
            <th scope="col">Điểm giữa kỳ</th>
            <th scope="col">Điểm cuối kỳ</th>
            <th scope="col">Điểm tổng kết</th>
            <th scope="col">Ghi chú</th>
          </tr>
        </thead>
        <tbody>
          {data ? (
            data.diemSinhVienDtos.map((item, index) => {
              console.log(item);
              return (
                <tr key={index}>
                  <th scope="row">{index+1}</th>
                  <td>{item.tenMonHoc}</td>
                  <td>{item.tk1}</td>
                  <td>{item.tk2}</td>
                  <td>{item.tk3}</td>
                  <td>{item.gk}</td>
                  <td>{item.ck}</td>
                  <td>{!item.trangThai?0:item.tbc}</td>
                  <td>{!item.trangThai?'Học lại':''}</td>
                </tr>
              );
            })
          ) : (
            <tr></tr>
          )}

          <tr>
            <th scope="row">Điểm trung bình: </th>
            <td colSpan="8">{data?data.diemTongKet:''}</td>
          </tr>
          <tr>
            <th scope="row">Nhận xét: </th>
            <td colSpan="8">1</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
