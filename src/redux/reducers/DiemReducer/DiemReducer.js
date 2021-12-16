import { GETDIEMSINHVIEN, GETDIEMSINHVIEN_FAILED, GETDIEMSINHVIEN_SUCCESS } from "../../constants/SinhVienConstants";

const initialState = {
    data: null,
    err: null,
  };
  
  const diemReducer = (state = initialState, { type, payload }) => {
    switch (type) {
  
      case GETDIEMSINHVIEN_SUCCESS:
        state.data = payload;
        return { ...state };
  
      case GETDIEMSINHVIEN_FAILED:
        state.err = payload;
        return { ...state };
  
  
      default:
        return {...state};
    }
  };
  
  export default diemReducer;