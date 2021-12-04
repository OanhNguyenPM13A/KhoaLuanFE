import { chinhSuaThongTinApi, XemThongTinApi } from "../../api/SinhVienApi";
import { CHINHSUATHONGTINSINHVIEN_FAILED, CHINHSUATHONGTINSINHVIEN_SUCCESS, XEMTHONGTINSINHVIEN_FAILED, XEMTHONGTINSINHVIEN_SUCCESS } from "../constants/SinhVienConstants";
import { displayLoading, hideLoading } from "./Loading";


export const atcXemThongTinSinhVien = () => {
  return (dispatch) => {
    dispatch(displayLoading());
    XemThongTinApi()
      .then((res) => {
        dispatch(xemThongTinSuccess(res))
        dispatch(hideLoading());
      })
      .catch((err) => {
        dispatch(xemThongTinFailed(err))
        dispatch(hideLoading());
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
      })
      .catch((err) => {
        dispatch(chinhSuaThongTinFailed(err))
        dispatch(hideLoading());
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