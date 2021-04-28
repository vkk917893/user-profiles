import { ADD_USERS } from "../constants";

const edituser = (payload) => {
  return {
    type: ADD_USERS,
    payload: payload,
  };
};
export default edituser;
