import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { CheckAuthApi } from "../../../api/TaiKhoanApi";
import Navbar from "../../../component/navbar";
import {
  atcGetDiem,
  atcGetThongBao,
  atcXemThongTinSinhVien,
} from "../../../redux/actions/SinhVien";
import { checkAuthAtc } from "../../../redux/actions/TaiKhoan";
import { SinhVienRoutes } from "../../../routers";
import DoiMatKhau from "../../doiMatKhau";

export default function SinhVien(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    CheckAuthApi({
      token: localStorage.getItem("AccessToken"),
      id: localStorage.getItem("id"),
    })
      .then((res) => {
        if (res.data.active === false) {

          localStorage.removeItem("id");
          localStorage.removeItem("AccessToken");
          props.history.replace("/login");
         
        }
        if (res.data.role === "SINH_VIEN") {
          props.history.replace("/sinhvien");
        }
        if (res.data.role === "GIANG_VIEN") {
          props.history.replace("/giangvien");
        }
        if (res.data.role === "PHU_HUYNH") {
          props.history.replace("/phuhuynh");
        }
        dispatch(atcXemThongTinSinhVien(localStorage.getItem("id")));
        
        dispatch(atcGetThongBao(localStorage.getItem("id"),0));
        dispatch(atcGetDiem(localStorage.getItem("id")));
      })
      .catch((err) => {
        props.history.replace("/login");
        localStorage.removeItem("id");
        localStorage.removeItem("AccessToken");
      });
  }, []);
  return (
    <BrowserRouter>
    <Navbar routers={SinhVienRoutes} history={props.history} />
    <Switch>
    <Route exact path="/sinhvien/doimatkhau" component={DoiMatKhau} />
      {SinhVienRoutes.map((route) => {
        return (
          <Route
            key={route.path}
            exact
            path={route.layout + route.path}
            component={route.component}
          />
        );
      })}

    
    </Switch>
  </BrowserRouter>
  );
}
