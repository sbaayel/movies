import React from 'react'
import { shallow} from 'enzyme'

import Popup from './Popup'




describe("Search Component", () => {
  it("returns", () => {
    shallow(<Popup/>);
  });

  it("display found props", () => {
    const component = shallow(<Popup/>);
    expect(component.contains("props")).toBe(false);
  });
  it("displays found useState", () => {
    const component = shallow(<Popup/>);
    expect(component.contains("useState")).toBe(false);
  });
})