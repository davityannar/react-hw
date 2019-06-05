import React from 'react'
import Search from './Search'

describe('Tests Search component', () => {
  it('Matching snapshot', () => {
    const component = shallow(<Search />)

    expect(component).toMatchSnapshot();
  })
})