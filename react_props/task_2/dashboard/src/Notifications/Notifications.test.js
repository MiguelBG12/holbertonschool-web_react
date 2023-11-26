import React from 'react';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Notifications from './Notifications'; // Importing the Notifications component
import NotificationItem from './NotificationItem'; // Importing the NotificationItem component

configure({ adapter: new Adapter() });

describe('Testing the <Notifications /> Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Notifications />); // Shallow rendering the Notifications component
  });

  it('<Notifications /> is rendered without crashing', () => {
    expect(wrapper).to.not.be.an('undefined'); // Checking if Notifications component renders without crashing
  });

  it('<Notifications /> renders the text "Here is the list of notifications"', () => {
    expect(wrapper.contains(<p>Here is the list of notifications</p>)).to.equal(true); // Checking if specific text is rendered
  });

  it('<Notifications /> renders NotificationItem elements', () => {
    expect(wrapper.find(NotificationItem)).to.have.lengthOf(3); // Checking if NotificationItem components are rendered
  });

  it('the first NotificationItem renders the right html', () => {
    const firstItem = wrapper.find(NotificationItem).at(0); // Getting the first NotificationItem component
    expect(firstItem.props().type).to.equal('default'); // Checking type prop of the first NotificationItem
    expect(firstItem.props().value).to.equal('New course available'); // Checking value prop of the first NotificationItem
    expect(firstItem.props().html).to.equal(null); // Checking html prop of the first NotificationItem
  });
});
