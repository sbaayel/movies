import React from 'react'
import { shallow} from 'enzyme'

import Footer from './Footer'




describe("Search Component", () => {
  it("returns", () => {
    shallow(<Footer/>);
  });

  it("display found props", () => {
    const component = shallow(<Footer/>);
    expect(component.contains("props")).toBe(false);
  });
  it("displays found useState", () => {
    const component = shallow(<Footer/>);
    expect(component.contains("useState")).toBe(false);
  });
})