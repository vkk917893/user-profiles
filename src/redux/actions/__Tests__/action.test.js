import addUsers from "../addUser";
// import * as getUserActions from "../getUsers";
// import * as removeUserActions from "../removeUser";
// import * as setActiveUserActions from "../addUser";
import {ADD_USERS, EDIT_USERS, GET_USERS, REMOVE_USERS, SET_ACTIVE_USERS} from "../../constants"
import edituser from "../editUser";
import getUsers from "../getUsers";
import removeUser from "../removeUser";
import setActiveUser from "../setactiveUser";

describe("Tests actions", () => {
    const payload = "testText"
    it("should test user actions", () => {
        const expectedAction = {
            type: ADD_USERS,
            payload
        }
        expect(addUsers(payload)).toEqual(expectedAction)
    })
    it("should test editUser actions", () => {
        const expectedAction = {
            type: EDIT_USERS,
            payload
        }
        expect(edituser(payload)).toEqual(expectedAction)
    })
    it("should test getUser actions", () => {
        const expectedAction = {
            type: GET_USERS,
            payload
        }
        expect(getUsers(payload)).toEqual(expectedAction)
    })
    it("should test remove user action", () => {
        const expectedAction = {
            type: REMOVE_USERS,
            payload: 1
        }
        expect(removeUser(1)).toEqual(expectedAction)
    })
    it("should test set active user action", () => {
        const expectedAction = {
            type: SET_ACTIVE_USERS,
            payload: 1
        }
        expect(setActiveUser(1)).toEqual(expectedAction)
    })
})
