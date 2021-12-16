import { DISPLAY_LOADING, HIDE_LOADING } from "./../../constants/LoadingConstants";

const initialState = {
    isLoading:false
};

const loadingReducer =(state = initialState, { type, payload }) => {
  switch (type) {
    case DISPLAY_LOADING:
        state.isLoading = true;
        return { ...state  };
    case HIDE_LOADING:
        state.isLoading = false;
        return { ...state  };

    default:
      return {...state};
  }
};

export default loadingReducer;