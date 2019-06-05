import React, {Component} from 'react';
import './Card.scss';
import { connect } from 'react-redux';
// import {miCardCucadrel} from '../../actions/actionCreators'
import { withRouter } from 'react-router-dom'
import queryString  from 'query-string'
import CardItem from '../CardItem/CardItem';
import NoFilmsFound from "../NoFilmsFound/NoFilmsFound";

import {asyncHandlingSubmitFormAction} from '../../actions/actionCreators'

export class Card extends Component {
    constructor(props) {
      super(props)
    }

    componentDidMount() {
      const values = queryString.parse(this.props.location.search)
      if (values.limit) {
        const {search, searchBy, sortBy} = values
        this.props.showApiData(search, searchBy, sortBy);
      }
    }
    
    render() {
      
        let pageContent = this.props.apiData.map( content => <CardItem key={content.id} 
            movieId={content.id}
            onCustomClick={this.props.addingContentToOneCardComponent} 
            imgSrc={content.poster_path} 
            movieVote={content.vote_average} 
            movieName={content.title} 
            movieAge={content.release_date.slice(0, 4)} 
            movieGenre={content.genres.join(', ')}></CardItem>)
      return (
        <div className='card-wrapper'>
           {pageContent}
        </div>
      )
      
    }
  }

  const mapStateToProps = (state) => ({apiData: state.search.apiData})
  const mapDispatchToProps = (dispatch) => ({
    showApiData(searchText, searchBy, sortBy) {
      dispatch(asyncHandlingSubmitFormAction(searchText, searchBy, sortBy));
    }
  })

  
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Card))







