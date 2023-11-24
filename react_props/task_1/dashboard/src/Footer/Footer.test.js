import React from 'react';
import { expect } from 'chai';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Footer from './Footer';

// Set up Enzyme with the adapter
configure({ adapter: new Adapter() });

describe('Footer Component', () => {
  it('renders without crashing', () => {
    // Verifies that the Footer component renders without crashing
    shallow(<Footer />);
  });

  it('renders at least the text "Copyright"', () => {
    // Verifies that the Footer component renders at least the text "Copyright"
    const wrapper = shallow(<Footer />);
    expect(wrapper.text()).to.contain('Copyright');
  });
});
