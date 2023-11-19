import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications Component', () => {
  // Test if Notifications renders without crashing
  it('renders without crashing', () => {
    const wrapper = shallow(<Notifications />);
    // Verifies if the component exists
    expect(wrapper.exists()).toBeTruthy();
  });

  // Test if Notifications renders three list items
  it('renders three list items', () => {
    const wrapper = shallow(<Notifications />);
    // Verifies the number of list items
    expect(wrapper.find('li')).toHaveLength(3);
  });

  // Test if Notifications renders the expected text
  it('renders the text "Here is the list of notifications"', () => {
    const wrapper = shallow(<Notifications />);
    // Verifies the displayed text
    expect(wrapper.text()).toContain('Here is the list of notifications');
  });
});
