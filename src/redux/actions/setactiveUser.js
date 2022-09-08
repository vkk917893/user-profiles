import { SET_ACTIVE_USERS } from "../constants";

const setActiveUser = (payload) => {
  return {
    type: SET_ACTIVE_USERS,
    payload: payload,
  };
};
export default setActiveUser;
