import React, { useEffect, useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  atcGetCanhBaoSinhViensLopHoc,
  atcPostCanhBaoSinhViensLopHoc,
} from "../../../redux/actions/GiangVien";
import CanhBaoItem from "./DanhSachCanhBao/CanhBaoItem";
import "./style.css";
export default function CanhBaoSinhVien(props) {
  const { data } = props;
  const dispatch = useDispatch();
  const [dataCanhBao, setDataCanhBao] = useState({
    idSinhVien: props.data.id,
    idGiangVien: localStorage.getItem("id"),
    tieuDe: "",
    noiDung: "",
  });
  const state = useSelector((state) => state.canhBaoSinhVienOfGiangVienReducer);
  useEffect(() => {
    dispatch(atcGetCanhBaoSinhViensLopHoc(data.id));
  }, []);

  const onChangeCanhBao = (e) => {
    const { name, value } = e.target;
    setDataCanhBao({ ...dataCanhBao, [name]: value });
  };

  const postCanhBao = (e) => {
    e.preventDefault();
    if (
      !window.confirm(
        "Việc gởi cảnh này sẽ gởi sms cho sinh viên và phụ huynh, bạn đã chắc chắn?"
      )
    ) {
      return;
    }
    dispatch(atcPostCanhBaoSinhViensLopHoc(dataCanhBao));
  };

  return (
    <div className="canh-bao">
      <div
        className="modal fade"
        id="modelId"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Quản lý cảnh báo sinh viên</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="home-tab"
                    data-toggle="tab"
                    href="#danh-sach-canh-bao"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    Danh sách cảnh báo
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="profile-tab"
                    data-toggle="tab"
                    href="#tao-canh-bao"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    Tạo cảnh báo
                  </a>
                </li>
              </ul>
              <div
                className="tab-pane fade show active "
                id="danh-sach-canh-bao"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                {/* <div className="canh-bao-form"> */}
                <div className="page-content page-container" id="page-content" >
                  <div className="padding">
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="list list-row block">
                          {state.data
                            ? state.data.map((item) => {
                                return (
                                  <CanhBaoItem item={item} key={item.id} />
                                );
                              })
                            : ""}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* </div> */}
              </div>
              <div
                className="tab-pane fade canh-bao-form"
                role="tabpanel"
                aria-labelledby="profile-tab"
                id="tao-canh-bao"
              >
                <form className="form-card" onSubmit={postCanhBao}>
                  <div className="row justify-content-between text-left">
                    <div className="form-group col-sm-12 flex-column d-flex">
                      <label className="form-control-label px-3">
                        Tiêu đề<span className="text-danger"> *</span>
                      </label>
                      <textarea
                        type="text"
                        id="fname"
                        name="tieuDe"
                        placeholder="Nhập tiêu đề"
                        rows={3}
                        onChange={onChangeCanhBao}
                        defaultValue={""}
                      />
                    </div>
                    <div className="form-group col-sm-12 flex-column d-flex">
                      <label className="form-control-label px-3">
                        Nội dung<span className="text-danger"> *</span>
                      </label>
                      <textarea
                        type="text"
                        id="fname"
                        name="noiDung"
                        onChange={onChangeCanhBao}
                        placeholder="Nhập nội dung"
                        rows={5}
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="row justify-content-end">
                    <div
                      className="form-group col-sm-6"
                      style={{ display: "flex" }}
                    >
                      <button
                        style={{ marginTop: "1.8%", marginRight: "5%" }}
                        type="submit"
                        className="btn-block btn-primary"
                      >
                        Lưu
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
