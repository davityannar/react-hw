import React from 'react';
import ErrorBoundary from './ErrorBoundary';

describe('Tests ErrorBoundary container', () => {
  it('Matching snapshot', () => {
    const container = shallow(<ErrorBoundary />)

    expect(container).toMatchSnapshot();
  })
})