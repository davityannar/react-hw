import axios from 'axios';
import {  CHANGING_SEARCH_TEXT_VALUE, CHANGING_SEARCH_BY_VALUE, CHANGING_SORT_BY_VALUE, SUBMIT_SEARCH_FORM } from './actionTypes';


export const changingSearchInputValue = (inputValue: ?string): Object => {
  return {
    type: CHANGING_SEARCH_TEXT_VALUE,
    payload: inputValue
  }
}

export const changingSearchByValue = (searchByValue: ?string): Object => {
  return {
    type: CHANGING_SEARCH_BY_VALUE,
    payload: searchByValue
  }
}

  export const changingSortByValue = (sortByValue: ?string): Object => {
   
    return {
      type: CHANGING_SORT_BY_VALUE,
      payload: sortByValue
    }

  }
  export const submitSearchForm = (data) => {
    return {
      type: SUBMIT_SEARCH_FORM,
      payload: {data: data},
    }
  }

  export const asyncHandlingSubmitFormAction = (searchText, searchBy, sortBy) => {
    let url = `http://react-cdp-api.herokuapp.com/movies?search=${searchText}&searchBy=${searchBy}&sortBy=${sortBy}&sortOrder=desc&limit=20`;
    console.log(url)
    return (dispatch) => {
      axios
      .get(url)
      .then(res => { 
      console.log(res.data.data  + '  tvyalner');
      return dispatch(submitSearchForm(res.data.data))
      }
      )
      .catch(err => console.error(err))
    }
  }

  
