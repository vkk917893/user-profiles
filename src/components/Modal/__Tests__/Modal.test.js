
import React from "react";
import { shallow } from "../../../enzyme";
import {Modal} from "react-bootstrap";
import ContentModal from "../Modal"

describe("Modal tests", () => {
    it("Modal renders without crashing", () => {
      const wrapper = shallow(<ContentModal />);
      expect(wrapper.find(Modal)).toHaveLength(1);
    });
})