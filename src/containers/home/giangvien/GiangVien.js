import React, { lazy, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { CheckAuthApi } from "../../../api/TaiKhoanApi";
import LoadingComponent from "../../../component/GlobalSettings/LoadingComponent";
import Navbar from "../../../component/navbar";
import { atcGetDanhSachLopHoc } from "../../../redux/actions/GiangVien";
import { GiangVienRoutes, SinhVienRoutes } from "../../../routers";
import DoiMatKhau from "../../doiMatKhau";
const ThongTinLopHoc = lazy(() => import("./lopHoc/thongTinLopHoc"));

export default function GiangVien(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    CheckAuthApi({
      token: localStorage.getItem("AccessToken"),
      id: localStorage.getItem("id"),
    })
      .then((res) => {
        if (res.data.active === false) {
          props.history.replace("/");
          localStorage.removeItem("id");
          localStorage.removeItem("AccessToken");
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

        dispatch(atcGetDanhSachLopHoc(0));
      })
      .catch((err) => {
        props.history.replace("/");
        localStorage.removeItem("id");
        localStorage.removeItem("AccessToken");
      });
  }, []);
  return (
    <BrowserRouter>
      <Navbar routers={GiangVienRoutes} history={props.history} />
      <Suspense fallback={LoadingComponent}>
        <Switch>
        <Route exact path="/giangvien/doimatkhau" component={DoiMatKhau} />

          {GiangVienRoutes.map((route) => {
            return (
              <Route
                exact
                key={route.path}
                path={route.layout + route.path}
                component={route.component}
              />
            );
          })}
          <Route
            exact
            path="/giangvien/lophoc/:id"
            component={ThongTinLopHoc}
          />

        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}
