import React from 'react'
import { shallow, mount} from 'enzyme'

import Header from './Header'
import { Link } from 'react-router-dom';




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
    expect(comp.contains("export default Header;")).toBe(true);
  });


  // it("It searches for movies", () => {
  //   const wrapper = mount(<Search />);
  //   wrapper.find('[type="text"]').instance().value = "searchValue";
  //   expect(wrapper.find("input").instance().value).toEqual("searchValue");
  //   wrapper.find('[type="submit"]').simulate("onClick");
  //   expect(wrapper.find("movies").instance().value).toEqual("SEARCH");
  // });




});