import React from 'react';
import './addons';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '../src/mainComponents/Search/SearchButton/SearchButton'
import Filter from '../src/mainComponents/Search/SearchFilters/Filter/Filter'

storiesOf('Button', module)
  .add('Search button', () => <Button buttonClass='filter' onCustomSubmit={action('clicked')}>New one</Button> )
  .add('Filter button', () => <Button buttonClass='backToFilter' onCustomSubmit={action('clicked')}>New one</Button> );

storiesOf('Input', module)
  .add('Input radio checked', () => <Filter 
  inputId='title' 
  inputClass='main-filter' 
  onCustomChange={action('clicked')} 
  inputName='search' 
  inputType='radio' 
  inputValue='title' 
  inputText='Title' 
  checkedOption={true} />)
  .add('Input radio unchecked', () => <Filter 
  inputId='title' 
  inputClass='main-filter' 
  onCustomChange={action('clicked')} 
  inputName='search' 
  inputType='radio' 
  inputValue='title' 
  inputText='Title' 
  checkedOption={false} />)