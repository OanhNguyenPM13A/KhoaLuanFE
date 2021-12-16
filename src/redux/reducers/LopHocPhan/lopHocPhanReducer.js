import { GETDANHSACH_LOPHOCPHAN_FAILED, GETDANHSACH_LOPHOCPHAN_SUCCESS } from "../../constants/GiangVienConstants";

const initialState = {
  data: null,
  err: null,
};


 
const lopHocPhanReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case GETDANHSACH_LOPHOCPHAN_SUCCESS:
      state.data = payload;
      return { ...state };

    case GETDANHSACH_LOPHOCPHAN_FAILED:
      state.err = payload;
      return { ...state };

    default:
      return {...state};
  }
};

export default lopHocPhanReducer;