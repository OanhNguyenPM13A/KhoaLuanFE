import { chinhSuaThongTinApi, getThongBaoSinhVienApi, XemThongTinApi } from "../../api/SinhVienApi";
import { CHINHSUATHONGTINSINHVIEN_FAILED, CHINHSUATHONGTINSINHVIEN_SUCCESS, GETTHONGBAOSINHVIEN_FAILED, GETTHONGBAOSINHVIEN_SUCCESS, XEMTHONGTINSINHVIEN_FAILED, XEMTHONGTINSINHVIEN_SUCCESS } from "../constants/SinhVienConstants";
import { displayLoading, hideLoading } from "./Loading";
import { displayNotify } from "./Notify";

//atcXemthong tin

export const atcXemThongTinSinhVien = () => {
  return (dispatch) => {
    // dispatch(displayLoading());
    XemThongTinApi()
      .then((res) => { 
        dispatch(xemThongTinSuccess(res))
        // dispatch(hideLoading());
      })
      .catch((err) => {
        dispatch(xemThongTinFailed(err))
        // dispatch(hideLoading());
        dispatch(displayNotify({message:'Xin thử lại!',type:'warning'}));

      });
  };
};


const xemThongTinSuccess = (res) => {
  return {
    type: XEMTHONGTINSINHVIEN_SUCCESS,
    payload: res.data
  }
}


const xemThongTinFailed = (err) => {
  return {
    type: XEMTHONGTINSINHVIEN_FAILED,
    payload: err
  }
}


// ChinhSua sinh vien

export const atcChinhSuaThongTinSinhVien = (data, histrory) => {
  return (dispatch) => {
    dispatch(displayLoading());
    chinhSuaThongTinApi(data)
      .then((res) => {
        dispatch(chinhSuaThongTinSuccess(data))
        dispatch(hideLoading());
        histrory.push("/sinhvien/xemthongtin")
        dispatch(displayNotify({message:'Chỉnh sửa thành công!',type:'success'}));

      })
      .catch((err) => {
        dispatch(chinhSuaThongTinFailed(err))
        dispatch(hideLoading());
        dispatch(displayNotify({message:'Chỉnh sửa thất bại!',type:'success'}));

      });
  };
};


const chinhSuaThongTinSuccess = (data) => {
  return {
    type: CHINHSUATHONGTINSINHVIEN_SUCCESS,
    payload: data
  }
}


const chinhSuaThongTinFailed = (err) => {
  return {
    type: CHINHSUATHONGTINSINHVIEN_FAILED,
    payload: err
  }
}






export const atcGetThongBao=(pageNumber)=>{
  return (dispatch) => {
    dispatch(displayLoading());
    getThongBaoSinhVienApi(pageNumber)
      .then((res) => {
        dispatch(getThongBaosSuccess(res))
        dispatch(hideLoading());
      })
      .catch((err) => {
        dispatch(getThongBaoFailed(err))
        dispatch(hideLoading());
        dispatch(displayNotify({message:'Lấy dữ liệu thất bại! Xin load lại trang!',type:'warning'}));

      });
  };
}

const getThongBaosSuccess = (res) => {
  return {
    type: GETTHONGBAOSINHVIEN_SUCCESS,
    payload: res.data
  }
}


const getThongBaoFailed = (err) => {
  return {
    type: GETTHONGBAOSINHVIEN_FAILED,
    payload: err
  }
}
