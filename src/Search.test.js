import React from 'react'
import { shallow, mount} from 'enzyme'

import Search from './Search'




describe("Search", () => {
  it("returns", () => {
    shallow(<Search />);
  });

  it("found searchValue", () => {
    const component = shallow(<Search/>);
    expect(component.contains("searchValue")).toBe(true);
  });


  it("found onChange", () => {
    const comp = shallow(<Search />);
    expect(comp.contains("onChange")).toBe(true);
  });


  // it("It searches for movies", () => {
  //   const wrapper = mount(<Search />);
  //   wrapper.find('[type="text"]').instance().value = "searchValue";
  //   expect(wrapper.find("input").instance().value).toEqual("searchValue");
  //   wrapper.find('[type="submit"]').simulate("onClick");
  //   expect(wrapper.find("movies").instance().value).toEqual("SEARCH");
  // });




});