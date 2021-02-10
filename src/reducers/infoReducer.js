import {ADD_INFO} from "../constants";

const initialState = {
    info: null,
  };

  const infoReducer = (state = initialState, action) => {
    console.log("REDUCER: " + JSON.stringify(action));
    switch (action.type) {
      case ADD_INFO:
        return {
          info: action.info
      }
      default:
        return state;
    }
  };
  export default infoReducer;