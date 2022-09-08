import { ADD_USERS } from "../constants";

const addUsers = (payload) => {
  return {
    type: ADD_USERS,
    payload: payload,
  };
};
export default addUsers;
