import React from "react";
import { NavLink } from "react-router-dom";

import "./style.css";

export default function Navbar(props) {
  const { pathname } = props.history.location;
  const handleLogout = () => {
    // localStorage.removeItem("id");
    // localStorage.removeItem("AccessToken");
    localStorage.clear();
    props.history.replace("/login");
  };
  const handleChangePassword = () => {
  };
  const getIndex = () => {
    return `/${pathname.split("/")[1]}/trangchu`;
  };
  return (
    <div className="nav-menu">
      <nav className="navbar navbar-expand-custom navbar-mainbg">
        <NavLink className="navbar-brand navbar-logo" to={getIndex}>
          Sổ Liên Lạc Điện Tử
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars text-white" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <div className="hori-selector">
              <div className="left" />
              <div className="right" />
            </div>

            {/* <div> */}
            <div className="menu-item">
              <li className="nav-item">
                <NavLink
                  activeStyle={{
                    marginTop: "10px",
                    border: "2px solid darkgray",
                    borderRadius: "10px 10px 0px 0px",
                    borderBottom: "none",
                    fontSize: "16px",
                    color: "darkturquoise"
                  }}
                  className="nav-link active"
                  to={getIndex}
                >
                  Trang chủ
                </NavLink>
              </li>

              {props.routers.map((router, index) => {
                return (
                  <li className="nav-item" key={index}>
                    <NavLink
                      activeStyle={{
                        marginTop: "10px",
                        border: "2px solid darkgray",
                        borderRadius: "10px 10px 0px 0px",
                        borderBottom: "none",
                        fontSize: "16px",
                        color: "darkturquoise"
                      }}
                      className="nav-link active"
                      to={router.layout + router.path}
                    >
                      {router.name}
                      {router.icon}
                    </NavLink>
                  </li>
                );
              })}
              { }
            </div>

            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fas fa-cog"></i>
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <NavLink
                  className="dropdown-item"
                  activeClassName="dropdown-item"
                  to={`${pathname}/doimatkhau`}
                >
                  Đổi mật khẩu
                </NavLink>
                <li className="dropdown-item" onClick={handleLogout}>
                  Đăng xuất <i className="fas fa-sign-out-alt"></i>
                </li>
              </div>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
}
