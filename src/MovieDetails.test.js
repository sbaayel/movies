import React from 'react'
import { shallow} from 'enzyme'

import MovieDetails from './MovieDetails'




describe("Search Component", () => {
  it("returns", () => {
    shallow(<MovieDetails/>);
  });

  it("display found props", () => {
    const component = shallow(<MovieDetails/>);
    expect(component.contains("props")).toBe(false);
  });
  it("displays found useState", () => {
    const component = shallow(<MovieDetails/>);
    expect(component.contains("useState")).toBe(false);
  });
})