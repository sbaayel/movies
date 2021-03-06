import React from 'react'
import { shallow} from 'enzyme'

import Search from './Search'




describe("Search Component", () => {
  it("returns", () => {
    shallow(<Search/>);
  });

  it("display found props", () => {
    const component = shallow(<Search/>);
    expect(component.contains("props")).toBe(false);
  });
  it("displays found useState", () => {
    const component = shallow(<Search/>);
    expect(component.contains("useState")).toBe(false);
  });
})