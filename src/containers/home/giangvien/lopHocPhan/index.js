import React, { useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import Pagination from '../../../../common/Pagination';
import LopHocPhanItem from '../../../../component/giangVien/LopHocPhanItem';
import { atcGetDanhSachLopHocPhan } from '../../../../redux/actions/GiangVien';
import './style.css';
export default function LopHocPhan() { 

  const { data } = useSelector((state) => state.lopHocPhanReducer, shallowEqual);
  const dispatch = useDispatch();
  const [items, setItems] = useState([]);
  const [totalPage, setTotalPage] = useState(10);
  const [index, setindex] = useState(0);
  const [dataItem, setDataItem] = useState();
  const handleClickLopHoc = () => {
    console.log("");
  }



  const handelPageClick = (page) => {
    dispatch(atcGetDanhSachLopHocPhan(page.selected));
    setindex(data.paginationMeta.pageNumber)
  };

  useEffect(() => { 
    setTotalPage(data.paginationMeta.totalPage)
  }, []);







  return (
    <div className="lop-hoc-phan">
      <div className='table-lop-hoc-phan'>
      <table className="table table-bordered">
        <thead>
          <tr style={{ backgroundColor: 'skyblue', textAlign: "center" }}>
            <th scope="col">STT</th>
            <th scope="col">Mã lớp học phần</th>
            <th scope="col">Tên lớp học phần</th>
            <th scope="col">Môn học</th>
            <th scope="col">Sỉ số</th> 
          </tr>
        </thead>
        <tbody>
          
          {data.lopHocPhanDtos ? data.lopHocPhanDtos.map((item, index) => {
            return (
              <LopHocPhanItem handleClickLopHoc={handleClickLopHoc} item={item} key={item.id} stt={index} />
            );
          }) : <tr></tr>}
        </tbody>
        <tfoot>
        
        </tfoot>
      
      </table>
      </div>
      <div className='pagination-foot-lophp'>
        <Pagination
          data={{ index: index, totalPage: totalPage, handelPageClick: handelPageClick }}
        />
      </div>
    </div>
  )
}
