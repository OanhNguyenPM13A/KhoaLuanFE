import { GETNGAYNGHI_SINHVIEN_FAILED, GETNGAYNGHI_SINHVIEN_SUCCESS } from "../../constants/GiangVienConstants";

const initialState = {
  data: null,
  err: null,
};


 
const ngayNghiSinhVienReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case GETNGAYNGHI_SINHVIEN_SUCCESS:
      state.data = payload;
      return { ...state };

    case GETNGAYNGHI_SINHVIEN_FAILED:
      state.err = payload;
      return { ...state };

     

    default:
      return {...state};
  }
};

export default ngayNghiSinhVienReducer;