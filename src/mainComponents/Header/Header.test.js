import React from 'react'
import Header from './Header'

describe('Tests Header container', () => {
  it('Matching snapshot', () => {
    const container = shallow(<Header />)

    expect(container).toMatchSnapshot();
  })
})