import { lazy } from "react";
import TrangChu from "./component/trangChu";
import SinhVien from "./containers/home/sinhvien/SinhVien";
import ThongBao from "./containers/home/sinhvien/thongBao"; 
import XemThongTin from "./containers/home/sinhvien/xemThongTin";
import XinNghiHoc from "./containers/home/sinhvien/xinNghiHoc";
import BangDiem from "./containers/home/sinhvien/bangDiem";
import Login from "./containers/login/Login";
import LopHocPhan from "./containers/home/giangvien/lopHocPhan";
import LopHoc from "./containers/home/giangvien/lopHoc";
import GiangVien from "./containers/home/giangvien/GiangVien";
import PhuHuynh from "./containers/home/phuhuynh/PhuHuynh";


const LoginRoutes = [
  {
    path: "/login",
    name: "Login",
    icon: "",
    component: Login,
    layout: "/taikhoan",
  },
];

const SinhVienRoutes = [
  {
    path: "/xemthongtin",
    name: "Thông tin cá nhân",
    //   icon: Dashboard,
    component: XemThongTin,
    layout: "/sinhvien",
  },
  {
    path: "/xinnghihoc",
    name: "Đơn xin nghỉ học",
    icon: "",
    component: XinNghiHoc,
    layout: "/sinhvien",
  }, {
    path: "/bangdiem",
    name: "Kết quả học tập",
    icon: "",
    component: BangDiem,
    layout: "/sinhvien",
  },
  {
    path: "/thongbao",
    name: "",
    icon: <i className="fas fa-bell"></i>,
    component: ThongBao,
    layout: "/sinhvien",
  },

]



const GiangVienRoutes = [ 
  {
    path: "/lophocphan",
    name: "Lớp học phần",
    icon: "",
    component: LopHocPhan,
    layout: "/giangvien",
  }, {
    path: "/lophoc",
    name: "Lớp học",
    icon: "",
    component: LopHoc,
    layout: "/giangvien",
  },

]
const PhuHuynhRoutes = [
  {
    path: "/xemthongtin",
    name: "Thông tin sinh vien",
    //   icon: Dashboard,
    component: XemThongTin,
    layout: "/phuhuynh",
  }, {
    path: "/bangdiem",
    name: "Kết quả học tập",
    icon: "",
    component: BangDiem,
    layout: "/phuhuynh",
  },
  {
    path: "/thongbao",
    name: "",
    icon: <i className="fas fa-bell"></i>,
    component: ThongBao,
    layout: "/phuhuynh",
  }
]


const LayoutMain = [
  {
    path: "/sinhvien",
    component: SinhVien
  },
  {
    path: "/giangvien",
    component: GiangVien,
    // routers:GiangV
  },
  {
    path: "/phuhuynh",
    component: PhuHuynh
  },
  {
    path: "/login",
    component: Login
  }
]

export { LayoutMain, SinhVienRoutes, LoginRoutes, GiangVienRoutes, PhuHuynhRoutes };

