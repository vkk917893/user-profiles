import {
  GET_USERS,
  ADD_USERS,
  REMOVE_USERS,
  SET_ACTIVE_USERS,
} from "../constants";

const initialState = {
  userData: [],
  activeUser: {},
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS: {
      return { ...state, userData: [...action.payload] };
    }
    case ADD_USERS:
      return {
        ...state,
        userData: [action.payload, ...state.userData],
      };
    case REMOVE_USERS:
      return {
        ...state,
        userData: state.userData.filter((ele) => ele.id !== action.payload),
        activeUser: {},
      };
    case SET_ACTIVE_USERS:
      return {
        ...state,
        activeUser: state.userData.find((user) => user.id === action.payload),
      };
    default:
      return state;
  }
};

export default users;
