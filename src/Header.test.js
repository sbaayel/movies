import React from 'react'
import { shallow, mount} from 'enzyme'

import Header from './Header'





describe("Header", () => {
  it("returns", () => {
    shallow(<Header />);
  });

  it("displays header", () => {
    const component = shallow(<Header/>);
    expect(component.contains(<h2></h2>)).toBe(true);
  });


  it("displays found export default Header", () => {
    const comp = shallow(<Header />);
    expect(comp.contains('export default Header')).toBe(false);
  });
})