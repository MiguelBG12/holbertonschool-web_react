import React from 'react';
import { expect } from 'chai';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './Header';

// Set up Enzyme with the adapter
configure({ adapter: new Adapter() });

describe('Header Component', () => {
  it('renders without crashing', () => {
    // Verifies that the Header component renders without crashing
    shallow(<Header />);
  });

  it('renders img and h1 tags', () => {
    // Verifies that the Header component renders img and h1 tags
    const wrapper = shallow(<Header />);
    expect(wrapper.find('img')).to.have.length(1);
    expect(wrapper.find('h1')).to.have.length(1);
  });
});
