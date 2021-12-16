import { combineReducers } from "redux";
import loadingReducer from "./Loading/LoadingReducer";
import sinhVienReducer from "./SinhVien/SinhVienReducer";
import sinhViensLopHocReducer from "./SinhVien/SinhVienLopHocReducer";
import taiKhoanReducer from "./TaiKhoan/LoginReducer";
import thongBaoReducer from "./ThongBao/thongBaoReducer";
import thongBaoSinhVienLopHocReducer from "./ThongBao/thongBaoSinhVienLopHocReducer";
import canhBaoSinhVienOfGiangVienReducer from "./CanhBao/canhBaoSinhVienOfGiangVienReducer";
import lopHocReducer from "./LopHoc/LopHocReducer";
import lopHocPhanReducer from "./LopHocPhan/lopHocPhanReducer";
import NotifyReducer from "./notify/NotifyReducer";
import sinhViensLopHocPhanReducer from "./SinhVien/sinhVienLopHocPhanReducer";
import diemReducer from "./DiemReducer/DiemReducer";
import ngayNghiSinhVienReducer from "./ngayNghi/ngayNghiSinhVienReducer";
 
const reducer = combineReducers({
  loadingReducer,
  sinhVienReducer,
  taiKhoanReducer,
  thongBaoReducer,
  lopHocReducer,
  sinhViensLopHocReducer,
  thongBaoSinhVienLopHocReducer,
  canhBaoSinhVienOfGiangVienReducer,
  NotifyReducer,
  lopHocPhanReducer,
  sinhViensLopHocPhanReducer,
  diemReducer,
  ngayNghiSinhVienReducer
});

export default reducer;
