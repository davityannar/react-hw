import React from 'react'

import './SearchButton.scss'

const SearchButton = (props) => {
  let buttonClass = '';
   if (props.buttonClass === 'filter') {
    buttonClass = 'search-button';
  } else if (props.buttonClass === 'backToFilter') {
    buttonClass = 'back-to-filter';
  }

  return (
    <div>
      <button className={buttonClass}  onClick={props.onCustomSubmit} >{props.children}</button>
    </div>
  )
}

export default SearchButton;