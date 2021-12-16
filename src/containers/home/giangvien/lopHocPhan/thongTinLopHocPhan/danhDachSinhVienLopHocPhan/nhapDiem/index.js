import { get, set } from "draft-js/lib/DefaultDraftBlockRenderMap";
import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { atcChinhSuaBangDiem } from "../../../../../../../redux/actions/GiangVien";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

export default function NhapDiem(props) {
  const { dataItem } = props;
  const [diem, setDiem] = useState();
  const [tbc, setTbc] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    if (dataItem) {
      setDiem(dataItem.diemSinhVienMonHocDto);
      setTbc(dataItem.diemSinhVienMonHocDto.tbc);
    }
  }, [dataItem]);

  const onChange = (e) => {
    const { name, value } = e.target;
    console.log(name + " " + value);
    if (value >= "0" && value <= "9") {
      setDiem({
        ...diem,
        [name]: Number(-1),
      });
    }
    setDiem({
      ...diem,
      [name]: Number(value),
    });
    const { tk1, tk2, gk, ck, tk3 } = diem;
    const tkcc = (((tk1 + tk2 + tk3) / 3) * 20) / 100;
    const gkcc = (gk * 30) / 100;
    const ckcc = (ck * 50) / 100;
    const tbccc = tkcc + gkcc + ckcc;
    if (tkcc > 0 || gkcc > 0 || ckcc > 0) {
      setTbc("Chưa đủ cột điểm");
    }
    setTbc(tbccc);

    // console.log(tbc);
  };
  const xemTbc = () => {
    const { tk1, tk2, gk, ck, tk3 } = diem;
    const tkcc = (((tk1 + tk2 + tk3) / 3) * 20) / 100;
    const gkcc = (gk * 30) / 100;
    const ckcc = (ck * 50) / 100;
    const tbccc = tkcc + gkcc + ckcc;
    if (tkcc < 0 || gkcc < 0 || ckcc < 0) {
      setTbc("Chưa đủ cột điểm");
    }
    setTbc(tbccc);
  };
  const getDiem = (diem)=>{
    return diem>=0?diem:'';
  }
  const handleLuu = () => {
    if (!window.confirm("Bạn đã chắc chắn?")) {
      return;
    }
    dispatch(
      atcChinhSuaBangDiem(
        props.idLopHocPhan,
        dataItem.diemSinhVienMonHocDto.id,
        diem
      )
    );
  };
  return (
    <div
      className="modal fade"
      id="modelNhapDiem"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="modelTitleId"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">NHẬP ĐIỂM</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="form-group">
              <label>Điểm thường kỳ 1</label>
              <input
                name="tk1"
                type="text"
                className="form-control"
                placeholder="Nhập điểm thường kì 1"
                onChange={onChange}
                value={diem ? getDiem(diem.tk1) : ""}
              />
            </div>
            <div className="form-group">
              <label>Điểm thường kỳ 2</label>
              <input
                name="tk2"
                type="text"
                className="form-control"
                placeholder="Nhập điểm thường kì 2"
                onChange={onChange}
                value={diem ? getDiem(diem.tk2) : ""}
              />
            </div>
            <div className="form-group">
              <label>Điểm thường kỳ 3</label>
              <input
                name="tk3"
                type="text"
                className="form-control"
                placeholder="Nhập điểm thường kì 3"
                onChange={onChange}
                value={diem ? getDiem(diem.tk3) : ""}
              />
            </div>
            <div className="form-group">
              <label>Điểm giữa kỳ</label>
              <input
                name="gk"
                type="text"
                className="form-control"
                placeholder="Nhập điểm giữa kì"
                onChange={onChange}
                value={diem ? getDiem(diem.gk) : ""}
              />
            </div>
            <div className="form-group">
              <label>Điểm cuối kỳ</label>
              <input
                name="ck"
                type="text"
                className="form-control"
                placeholder="Nhập điểm cuối kì"
                onChange={onChange}
                value={diem ? getDiem(diem.ck) : ""}
              />
            </div>
            <div className="form-group">
              <label onClick={xemTbc}>Điểm trung bình cộng</label>
              <input
                type="text"
                className="form-control"
                disabled={true}
                value={getDiem(tbc)}
              />
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleLuu}
            >
              Lưu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
