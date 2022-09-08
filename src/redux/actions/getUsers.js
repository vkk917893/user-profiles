import { GET_USERS } from "../constants";

const getUsers = (payload) => {
  return {
    type: GET_USERS,
    payload: payload,
  };
};
export default getUsers;
