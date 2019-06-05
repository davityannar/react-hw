import React from 'react'
import SortingSection from './SortingSection'

describe('Tests SortingSection container', () => {
  it('Matching snapshot', () => {
    const container = shallow(<SortingSection />)

    expect(container).toMatchSnapshot();
  })
})