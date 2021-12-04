import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { getThongBaoSinhVienApi } from "../../../../api/SinhVienApi";
import Pagination from "../../../../common/Pagination";
import ModelChiTietThongBaoSinhVien from "../../../../component/sinhVien/thongBaoSinhVien/modelChiTietThongBaoSinhVien";
import ThongBaoSinhVienItem from "../../../../component/sinhVien/thongBaoSinhVien/thongBaoItem";
import { atcGetThongBao } from "../../../../redux/actions/SinhVien";
import "./style.css";
export default function ThongBao() {
  const { data } = useSelector((state) => state.thongBaoReducer);
  const dispatch = useDispatch();
  const [items, setItems] = useState([]);
  const [totalPage,setTotalPage] = useState(10);
  const [index,setindex] = useState(0);
  const [dataItem,setDataItem] = useState();

  const handleClickThongBao = (data)=>{
    setDataItem(data);
  }


  const handelPageClick = (page) => {
    dispatch(atcGetThongBao(page.selected));  
    setindex(data.paginationMeta.pageNumber)
  };

  useEffect(() => { 
    setTotalPage(data.paginationMeta.totalPage) 
  }, []);

  return (
    <div className="thong-bao">
      <div className="container d-flex justify-content-center mt-50 mb-50">
        <div className="row">
          <div className="col-md-10">
            {data.thongBaoSinhVienDtos? data.thongBaoSinhVienDtos.map((item) => {
              return (
                <ThongBaoSinhVienItem handleClickThongBao={handleClickThongBao} item={item} key ={item.id}/>
              );
            }):"asdasdas"}
          
            <Pagination data={{index:index,totalPage:totalPage,handelPageClick:handelPageClick}}/>
            
          </div>
        </div>
      </div>
      <ModelChiTietThongBaoSinhVien data = {dataItem}/>
      
    </div>
  );
}
