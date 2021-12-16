import { GETSINHVIENS_LOPHOCPHAN_FAILED, GETSINHVIENS_LOPHOCPHAN_SUCCESS, GETSINHVIENS_LOPHOC_FAILED, GETSINHVIENS_LOPHOC_SUCCESS } from "../../constants/GiangVienConstants";

const initialState = {
  data: null,
  err: null,
};


 
const sinhViensLopHocPhanReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case GETSINHVIENS_LOPHOCPHAN_SUCCESS:
      state.data = payload;
      return { ...state };

    case GETSINHVIENS_LOPHOCPHAN_FAILED:
      state.err = payload;
      return { ...state };

     

    default:
      return {...state};
  }
};

export default sinhViensLopHocPhanReducer;