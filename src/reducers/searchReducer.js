import {  CHANGING_SEARCH_TEXT_VALUE,CHANGING_SEARCH_BY_VALUE,CHANGING_SORT_BY_VALUE,SUBMIT_SEARCH_FORM } from '../actions/actionTypes'

const initialState = {
  searchValue: '',
  searchBy: 'title',
  sortBy: 'release_date',
  apiData: [],

};

const handilngSearchInputChange = ( state, action ) => {
  return Object.assign({}, state, {searchValue: action.payload})
}

const handilngSortInputChange = ( state, action ) => {
  return Object.assign({}, state, {sortBy: action.payload})
}

const handlingSearchByChange = (state, action) => {
  return Object.assign({}, state, {searchBy: action.payload})
}

const handlingFormSubmit = (state, action) => {
  return Object.assign({}, state, {apiData: [...action.payload.data]})
}



 
//   const inputValuPopoxutyun = ( state, action ) => {
//     return Object.assign({}, state, {searchValue: action.payload})
//   }

// const filtriPopoxutyun = (state, action) => {
//   return Object.assign({}, state, {searchBy: action.payload})
// }

// const formiPopoxutyun = (state, action) => {
//     return Object.assign({}, state, {apiData: [...action.payload]})
//   }

  // const sortiPopoxutyun = (state, action) => {
  //   let copiedApiDataObj = state.apiData.slice();
  //   let sortedContent = copiedApiDataObj.sort((item1, item2) => {
  //     if (action.payload === 'release_date') {
  //       return item2.release_date.slice(0, 4) - item1.release_date.slice(0, 4);
  //     } else if (action.payload === 'vote_average') {
  //       return item2.vote_average - item1.vote_average;
  //     }
  //   })
  //   console.log(sortedContent)
  //   // return Object.assign({}, state, {sortBy: action.payload, apiData: sortedContent})
  //   return {...state,sortBy: action.payload, apiData: sortedContent}
  // }

  // const handilngSortInputChange = ( state, action ) => {
  //   return Object.assign({}, state, {sortBy: action.payload})
  // }
  // const OneCardContentEreval = (state, action) => {
  //   let oneCardContent = state.apiData.slice().filter(card => card.id === action.payload);
  //   return Object.assign({}, state, {oneCardShowed: true, oneCardData: oneCardContent})
  // }

  // const handlingSearchFilterVisibility = (state, action) => {
  //   return Object.assign({}, state, {oneCardShowed: false})
  // }

// const searchReducer = (state = initialState, action) => {
//   switch(action.type) {
//     case INPUT_VALUEN_POPOXEL:
//       return { ...state, searchValue: action.payload };
//     case VALUEOV_FILTREL:
//       return { ...state, searchBy: action.payload };
//     case TVYALNERI_POXANCUM:
//       return { ...state, apiData: [...action.payload] };
//     case CHANGING_SORT_BY_VALUE:
//       return { ...state,sortBy: action.payload};

//     // case SORTAVOREL_YST:
//     //   return sortiPopoxutyun(state, action);
   
//     // case MI_CARD_CUCADREL:
//     //   return OneCardContentEreval(state, action);
//     // case SHOWING_SEARCH_FILTER_CONTENT:
//     //   return handlingSearchFilterVisibility(state, action);
//     default:
//       return state;
//   }
// }
const searchReducer = (state: Object = initialState, action: Object): Object => {
  switch (action.type) {
    case SUBMIT_SEARCH_FORM:
      return handlingFormSubmit(state, action);
    case CHANGING_SEARCH_TEXT_VALUE:
      return handilngSearchInputChange(state, action);
    case CHANGING_SEARCH_BY_VALUE:
      return handlingSearchByChange(state, action);
    case CHANGING_SORT_BY_VALUE:
      return handilngSortInputChange(state, action);
    default:
      return state;
  }
}

export default searchReducer;