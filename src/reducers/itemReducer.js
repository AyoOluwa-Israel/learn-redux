import { SHOW_MESSAGE } from "../actions/types";

const initialState = {
  displayed: true,
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MESSAGE:
      console.log("i dey work")
      return {
        ...state,
        displayed: !state.displayed,
      };
      default:
        return state;
        
  }
}

export default itemReducer;


