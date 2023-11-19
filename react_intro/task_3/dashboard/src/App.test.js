import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App Component', () => {
  // Test if App renders without crashing
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    // Verifies if the component exists
    expect(wrapper.exists()).toBeTruthy();
  });

  // Test if App renders a div with class App-header
  it('renders a div with class App-header', () => {
    const wrapper = shallow(<App />);
    // Verifies the existence of App-header div
    expect(wrapper.find('.App-header').exists()).toBeTruthy();
  });

  // Test if App renders a div with class App-body
  it('renders a div with class App-body', () => {
    const wrapper = shallow(<App />);
    // Verifies the existence of App-body div
    expect(wrapper.find('.App-body').exists()).toBeTruthy(); 
  });

  // Test if App renders a div with class App-footer
  it('renders a div with class App-footer', () => {
    const wrapper = shallow(<App />);
    // Verifies the existence of App-footer div
    expect(wrapper.find('.App-footer').exists()).toBeTruthy();
  });
});
