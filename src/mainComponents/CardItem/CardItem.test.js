import React from 'react';
import CardItem from './CardItem';

describe('Test CardItem component', () => {
  it('Matching snapshot', () => {

    const props = {
        title: 'title',
        poster_path: 'http://test.am',
        release_date: '2018-03-30',
        genres: ['example']
    };

    const component = shallow(<CardItem { ...props } />);

    expect(component).toMatchSnapshot();
  })
})