import React from 'react';
import { expect } from 'chai';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Login from './Login';

// Set up Enzyme with the adapter
configure({ adapter: new Adapter() });

describe('Login Component', () => {
  it('renders without crashing', () => {
    // Verifies that the Login component renders without crashing
    shallow(<Login />);
  });

  it('renders 2 input and 2 label tags', () => {
    // Verifies that the Login component renders 2 input and 2 label tags
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input')).to.have.length(2);
    expect(wrapper.find('label')).to.have.length(2);
  });
});
