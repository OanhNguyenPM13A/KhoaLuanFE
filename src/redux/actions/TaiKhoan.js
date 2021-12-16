import { DangNhapApi, CheckAuthApi, changePasswordApi, changeImgUrlApi } from "../../api/TaiKhoanApi";
import * as taiKhoanConstants from "./../constants/taiKhoanConstants";
import { displayLoading, hideLoading } from "./Loading";
import { displayNotify } from "./Notify";
import { atcXemThongTinSinhVien } from "./SinhVien";

export const atcDangNhap = (taiKhoan, history) => {
  return (dispatch) => {
    dispatch(displayLoading());
    DangNhapApi(taiKhoan)
      .then((res) => { 
        dispatch(DangNhapSuccess(res.data));

        const { thongTin, token, role } = res.data;
        localStorage.setItem("id", thongTin.id);
        localStorage.setItem("AccessToken", token);
        if (role === "SINH_VIEN") {
          history.replace("/sinhvien");
        }
        if (role === "GIANG_VIEN") {
          history.replace("/giangvien");
        }

        if (role === "PHU_HUYNH") {
          history.replace("/phuhuynh"); 
          const {thongTin} =res.data;
          localStorage.setItem("idsv", thongTin.idSv);
        }

        dispatch(hideLoading());
        dispatch(displayNotify({message:'Đăng nhập thành công! Chào mừng '+res.data.name+' đến với trang web',type:'success'}))
      })
      .catch((err) => {
        console.log(err);
        // dispatch(DangNhapFailed(err.response.data));
        history.replace("/login");
        dispatch(hideLoading());
        dispatch(displayNotify({message:'Đăng nhập thất bại, xin kiểm tra lại tài khoản và mật khẩu!',type:'warning'}))
      });
  };
};

export const checkAuthAtc = (token, id, history) => {
  return (dispatch) => {
    CheckAuthApi({ token: token, id: id })
      .then((res) => { 
        console.log(res);
        if (res.active === false) {
          history.replace("/");
        }
      })
      .catch((err) => {
        history.replace("/login");
        localStorage.removeItem("id");
        localStorage.removeItem("AccessToken");
        dispatch(displayNotify({message:'Hết hạn đăng nhập!',type:'info'}))

      });
  };
};

const DangNhapSuccess = (res) => {
  return {
    type: taiKhoanConstants.DANGNHAP_SUCCSESS,
    payload: res.data,
  };
};

const DangNhapFailed = (err) => {
  return {
    type: taiKhoanConstants.DANGNHAP_FAILED,
    payload: err,
  };
};

export const atcChangePassword = (data) => {
  return (dispatch) => {
    dispatch(displayLoading());
    changePasswordApi(data)
      .then((res) => {
        dispatch(hideLoading());
        dispatch(displayNotify({message:'Thay đổi thành công ! ',type:'success'}))

      })
      .catch((err) => { 
        dispatch(hideLoading());
        dispatch(displayNotify({message:'Thao tác không thành công ! '+err.response.data.message,type:'warning'}))
      });
  };
};

const changePasswordSuccess = (res) => {
  return {
    type: taiKhoanConstants.CHANGEPASSWORD_SUCCSESS,
    payload: res.data,
  };
};

const changePasswordFailed = (err) => {
  return {
    type: taiKhoanConstants.CHANGEPASSWORD_FAILED,
    payload: err,
  };
};



export const atcImgUrl = (data) => {
  return (dispatch) => {
    dispatch(displayLoading());
    changeImgUrlApi(data)
      .then((res) => {
        dispatch(atcXemThongTinSinhVien(localStorage.getItem("id"))); 
        dispatch(displayNotify({message:'Thay đổi thành công! ',type:'success'}))
        dispatch(hideLoading())
      })
      .catch((err) => { 
        dispatch(displayNotify({message:'Thao tác không thành công ! ',type:'warning'}))
        dispatch(hideLoading())
      });
  };
};

const changeImgUrlSuccess = (res) => {
  return {
    type: taiKhoanConstants.CHANGEIMGURL_SUCCSESS,
    payload: res.data,
  };
};

const changeImgUrlFailed = (err) => {
  return {
    type: taiKhoanConstants.CHANGEIMGURL_FAILED,
    payload: err,
  };
};