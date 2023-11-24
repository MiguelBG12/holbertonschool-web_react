import React from 'react';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import App from './App';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';

// Set up Enzyme with the adapter
configure({ adapter: new Adapter() });

describe('App Component', () => {
  it('renders without crashing', () => {
    // Verifies that the App component renders without crashing
    shallow(<App />);
  });

  it('contains the Notifications component', () => {
    // Verifies that the App component contains the Notifications component
    const wrapper = shallow(<App />);
    expect(wrapper.find(Notifications)).to.have.length(1);
  });

  it('contains the Header component', () => {
    // Verifies that the App component contains the Header component
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header)).to.have.length(1);
  });

  it('contains the Login component', () => {
    // Verifies that the App component contains the Login component
    const wrapper = shallow(<App />);
    expect(wrapper.find(Login)).to.have.length(1);
  });

  it('contains the Footer component', () => {
    // Verifies that the App component contains the Footer component
    const wrapper = shallow(<App />);
    expect(wrapper.find(Footer)).to.have.length(1);
  });
});
