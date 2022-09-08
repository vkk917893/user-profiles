import { EDIT_USERS } from "../constants";

const edituser = (payload) => {
  return {
    type: EDIT_USERS,
    payload: payload,
  };
};
export default edituser;
