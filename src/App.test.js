import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  it('Adds App snapshot testing', () => {
    const component = shallow(<App />);

    expect(component).toMatchSnapshot();
  });
});