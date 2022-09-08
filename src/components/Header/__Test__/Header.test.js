
import React from "react";
import { shallow } from "../../../enzyme";
import {Navbar} from "react-bootstrap";
import Header from "../Header.jsx"

describe("Header tests", () => {
    it("Header renders without crashing", () => {
      const wrapper = shallow(<Header />);
      expect(wrapper.find(Navbar)).toHaveLength(1);
    });
})