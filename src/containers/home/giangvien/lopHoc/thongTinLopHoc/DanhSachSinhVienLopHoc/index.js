import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Pagination from "../../../../../../common/Pagination";
import CanhBaoSinhVien from "../../../../../../component/giangVien/CanhBaoSinhVien";
import SinhVienLopHocItem from "../../../../../../component/giangVien/sinhVienLopHocItem";
import { atcGetSinhViensLopHoc } from "../../../../../../redux/actions/GiangVien";
import "./style.css";

export default function DanhSachSinhVienLopHoc(props) { 
  const [items, setItems] = useState([]);
  const [totalPage, setTotalPage] = useState(10);
  const [index, setindex] = useState(0);
  const [dataItem, setDataItem] = useState();
  const { data } = useSelector((state) => state.sinhViensLopHocReducer,shallowEqual);
  const [select, setSelect] = useState(0);

  const [search, setSearch] = useState("");
  // atcGetSinhViensLopHoc
  const dispatch = useDispatch();
  const onChangeSelect = (e) => {
    const { value, name } = e.target; 
    setSelect(value)
  };
  const handleSearch = (data) => { 
    if (select == 1) {
      data = data.filter((item) => {
        return item.canhBao;
      });
    } 
    if(search===""){
      return data;
    }
    return data.filter((item) => {
      return (
        item.hoTen.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
        item.email.toLowerCase().indexOf(search.toLowerCase()) !== -1||
        item.maSV.toLowerCase().indexOf(search.toLowerCase()) !== -1
      );
    });
  }

  const onSearch = (e) => {
    const { value, name } = e.target;
    setSearch(value);
  };
  
  const handelPageClick = (page) => {
    dispatch(atcGetSinhViensLopHoc(props.id,page.selected));
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
      <h3 style={{textAlign:"center", marginTop:'30px'}}>DANH SÁCH SINH VIÊN </h3>
        <div className="header-danh-sach-sinh-vien">
          <div className="search-danh-sach-sinh-vien">
            <div className="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
              <div className="input-group">
                <input
                  type="search"
                  onChange = {onSearch}
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
          <div className="selected-danh-sach-sinh-vien"  style={{ width: "60%",marginTop:'15px' }}>
            <select style={{ height:"35px", borderRadius:'1.2rem'}}
              className="form-select form-select-sm"
              aria-label=".form-select-sm example"
              defaultValue={0}
              onChange = {onChangeSelect}
            >
              <option  value={0} >Tất cả sinh viên</option>
              <option  value={1}>Những sinh viên có tình trạng bị cảnh báo</option> 
            </select>
          </div>
        </div>
        <table className="table table-bordered">
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
              <th scope="col">Giới tính</th>
              <th scope="col">Email</th>
              <th scope="col">Tình trạng</th>
              <th scope="col">Đánh giá rèn luyện</th>
              <th scope="col">Điểm trung bình tích lũy</th>
              <th scope="col">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            <tr></tr>
            {data ? (
              handleSearch(data.sinhVienLopHocDtos).map((item, index) => {
                return (
                  <SinhVienLopHocItem
                    key={item.id}
                    stt={index + 1}
                    item={item}
                  />
                );
              })
            ) : (
              <tr></tr>
            )}
          </tbody>
        </table>
      </div>
      <Pagination data={{index:index,totalPage:totalPage,handelPageClick:handelPageClick}}/>
    
    </>
  );
}
