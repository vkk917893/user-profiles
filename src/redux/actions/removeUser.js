import { REMOVE_USERS } from "../constants";

const removeUser = (id) => {
  return {
    type: REMOVE_USERS,
    payload: id,
  };
};
export default removeUser;
