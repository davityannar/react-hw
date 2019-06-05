import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import {asyncHandlingSubmitFormAction, changingSortByValue} from '../../actions/actionCreators'
import Filter from '../Search/SearchFilters/Filter/Filter'



import './SortingSection.scss'

export class SortingSection extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className='sorting-section'>
        <p className='movies-found'>
          {this.props.moviesFound} movies found
        </p>
        <div className='sort-filters'>
          <p>
            Sort by
          </p>
          
          <Filter inputId='release' onCustomChange={(e) => (this.props.handilngSortInputChange(e.target.value), this.props.changingSortBy(this.props.searchValue,this.props.searchBy, e.target.value))} inputClass='secondary-filter' inputName='sort' inputType='radio' inputValue='release_date' inputText='release date' checkedOption={this.props.sortBy === 'release_date' ? true : false} />
          <Filter inputId='rating' onCustomChange={(e) => (this.props.handilngSortInputChange(e.target.value), this.props.changingSortBy(this.props.searchValue, this.props.searchBy, e.target.value))} inputClass='secondary-filter' inputName='sort' inputType='radio' inputValue='vote_average' inputText='rating' checkedOption={this.props.sortBy === 'vote_average' ? true : false} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({searchValue: state.search.searchValue, searchBy: state.search.searchBy, sortBy: state.search.sortBy})
const mapDispatchToProps = (dispatch) => ({

  handilngSortInputChange(sortInputValue) {
    dispatch(changingSortByValue(sortInputValue))
  },
  changingSortBy(searchText, searchBy, sortBy) {
    dispatch(asyncHandlingSubmitFormAction(searchText, searchBy, sortBy))
  }
  
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SortingSection))