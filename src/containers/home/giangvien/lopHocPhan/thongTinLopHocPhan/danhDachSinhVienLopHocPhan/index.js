import React, { useEffect, useMemo, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Pagination from "../../../../../../common/Pagination";
import SinhVienLopHocPhanItem from "../../../../../../component/giangVien/sinhVienLopHocPhanItem";
import { atcGetSinhViensLopHocPhan } from "../../../../../../redux/actions/GiangVien";
import DiemDanh from "./diemDanh";
import NhapDiem from "./nhapDiem";
import "./style.css";
export default function DanhSachSinhVienLopHocPhan(props) { 
  const [items, setItems] = useState();
  const [totalPage, setTotalPage] = useState(10);
  const [index, setindex] = useState(0);
  const [dataItem, setDataItem] = useState();
  const [idLhp, setIdLhp] = useState();
  const { data } = useSelector(
    (state) => state.sinhViensLopHocPhanReducer,
    shallowEqual
  ); 
  const [select, setSelect] = useState(0);

  const [search, setSearch] = useState("");
  const dispatch = useDispatch(); 
  const getItem = (id) => {
    return data.sinhVienLopHocPhanDtos.filter((item) => {
      return item.id == id;
    })[0];
  };
  const getIdItem = (id) => {
    setDataItem(getItem(id));
  };
  
  const getIdSvLhp=(id)=>{
    setIdLhp(id);
  }

  const handelPageClick = (page) => {
    dispatch(atcGetSinhViensLopHocPhan(props.id, page.selected));
    setindex(data.paginationMeta.pageNumber);
  };
  useEffect(() => {
    if (data) {
      setTotalPage(data.paginationMeta.totalPage);
    }
  }, [data]);
  return (
    <>
      <div className="danh-sach-sinh-vien">
        <h3 style={{ textAlign: "center", marginTop: "30px" }}>
          DANH SÁCH SINH VIÊN{" "}
        </h3>
        <div className="header-danh-sach-sinh-vien">
          <div className="search-danh-sach-sinh-vien">
            <div className="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
              <div className="input-group">
                <input
                  type="search"
                  placeholder="Nhập từ khóa cần tìm..."
                  aria-describedby="button-addon1"
                  className="form-control border-0 bg-light"
                />
                <div className="input-group-append">
                  <i className="fa fa-search"></i>
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: "100%" }}></div>
          <div
            className="selected-danh-sach-sinh-vien"
            style={{ width: "60%", marginTop: "15px" }}
          >
            <select
              style={{ height: "35px", borderRadius: "1.2rem" }}
              className="form-select form-select-sm"
              aria-label=".form-select-sm example"
              defaultValue={0}
            >
              <option value={0}>Tất cả sinh viên</option>
              <option value={1}>
                Những sinh viên có tình trạng bị cảnh báo
              </option>
            </select>
          </div>
        </div>
        <table className="table table-bordered" style={{ textAlign: "center" }}>
          <thead>
            <tr
              style={{
                backgroundColor: "#b3e0ff",
                textAlign: "center",
              }}
            >
              <th scope="col">STT</th>
              <th scope="col">Mã sinh viên</th>
              <th scope="col">Họ và tên</th>
              <th scope="col">TK1</th>
              <th scope="col">TK2</th>
              <th scope="col">TK3</th>
              <th scope="col">GK</th>
              <th scope="col">CK</th>
              <th scope="col">TBC</th>
              <th scope="col" style={{ width: "10%" }}>
                Số ngày nghỉ có phép
              </th>
              <th scope="col" style={{ width: "10%" }}>
                Số ngày nghỉ không phép
              </th>
              <th scope="col">Tình trạng</th>
              <th scope="col">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {data ? (
              data.sinhVienLopHocPhanDtos.map((sinhvien, index) => {
                return (
                  
                  <SinhVienLopHocPhanItem
                    key={sinhvien.id}
                    item={sinhvien}
                    index={index}
                    getIdItem={getIdItem}
                    getIdSvLhp={getIdSvLhp}
                  />
                );
              })
            ) : (
              <tr></tr>
            )}
          </tbody>
        </table>
      </div>
      {useMemo(
        () => (
          <NhapDiem dataItem={dataItem} idLopHocPhan = {props.id}/>
        ),
        [dataItem]
      )}
       {useMemo(
        () => (
          <DiemDanh idLopHocPhan = {props.id} dataItem={dataItem} idSvLhp = {idLhp} />
        ),
        [dataItem]
      )}
    

      <Pagination
        data={{
          index: index,
          totalPage: totalPage,
          handelPageClick: handelPageClick,
        }}
      />
    </>
  );
}
