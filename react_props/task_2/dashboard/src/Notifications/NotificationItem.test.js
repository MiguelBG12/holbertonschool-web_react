import React from 'react';
import { expect } from 'chai';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NotificationItem from './NotificationItem';

configure({ adapter: new Adapter() });

describe("Testing <NotificationItem /> Component", () => {

  let wrapper;

  it("<NotificationItem /> is rendered without crashing", () => {
    // Rendering the NotificationItem component
    wrapper = shallow(<NotificationItem shouldRender />);

    console.log(wrapper);
    // Verifying that the component is defined
    expect(wrapper).to.not.be.an("undefined");
  });

  it("<NotificationItem /> renders the correct HTML by passing type and value props", () => {
    let props = {
      type: "default",
      value: "New resume",
      html: undefined
    }

    // Rendering the NotificationItem with specific props
    let component = shallow(<NotificationItem {...props} />);

    console.log(component);
    // Verifying that the rendered HTML matches the expected structure
    expect(component.contains(<li data-priority-type={props.type} dangerouslySetInnerHTML={undefined}>New resume</li>)).to.equal(true);
  });

  it("<NotificationItem /> renders the correct HTML by passing dummy HTML props", () => {
    let props = {
      type: "urgent",
      html: { __html: "<p>test</p>" },
    }

    // Rendering the NotificationItem with specific props containing HTML
    let component = shallow(<NotificationItem {...props} />);
    
    // Verifying that the rendered HTML matches the expected structure
    expect(component.contains(<li data-priority-type={props.type} dangerouslySetInnerHTML={props.html} />)).to.equal(true);
  });

});
