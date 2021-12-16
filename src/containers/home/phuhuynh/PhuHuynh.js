import React, { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { CheckAuthApi } from "../../../api/TaiKhoanApi";
import LoadingComponent from "../../../component/GlobalSettings/LoadingComponent";
import Navbar from "../../../component/navbar";
import { atcGetThongBao, atcXemThongTinSinhVien } from "../../../redux/actions/SinhVien";
import {
  GiangVienRoutes,
  PhuHuynhRoutes,
  SinhVienRoutes,
} from "../../../routers";
import DoiMatKhau from "../../doiMatKhau";

export default function PhuHuynh(props) {
  const dispatch = useDispatch();
  useEffect(() => { 
    CheckAuthApi({
      token: localStorage.getItem("AccessToken"),
      id: localStorage.getItem("id"),
    })
      .then((res) => { 
        // console.log(res.data);
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
        // dispatch(atcXemThongTinSinhVien(localStorage.getItem("id")));
        dispatch(atcXemThongTinSinhVien(localStorage.getItem("idsv")));
        dispatch(atcGetThongBao(localStorage.getItem("idsv"),0));
        
      })
      .catch((err) => {
        props.history.replace("/");
        localStorage.removeItem("id");
        localStorage.removeItem("AccessToken");
      });
  }, []);
  return (
    <BrowserRouter>
      <Navbar routers={PhuHuynhRoutes} history={props.history} />
      <Suspense fallback={LoadingComponent}>
        <Switch>
        <Route exact path="/phuhuynh/doimatkhau" component={DoiMatKhau} />
          {PhuHuynhRoutes.map((route) => {
            return (
              <Route
                exact
                key={route.path}
                path={route.layout + route.path}
                component={route.component}
              />

            );
          })}
          
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}
