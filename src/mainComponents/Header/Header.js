import React, {Component} from 'react';
import {  withRouter, Link,Route } from 'react-router-dom'
import {connect} from 'react-redux'
import  Search  from '../Search/Search';
import OneFilm from "../oneFilm/oneFilm"
import SearchButton from '../Search/SearchButton/SearchButton'
import './Header.scss';

export class Header extends Component {
    constructor(props) {
        super(props)
      }     

    render() {               
       
      let header, headerContent;
      if( this.props.location.pathname === '/' || this.props.location.pathname === '/movies' ) {
        header = <p className='netflix'>netflixroulette</p>;
        headerContent = <><p className='find-your-movie'>Find your movie</p><Search /></>;
      } else if ( this.props.match.params.id ) {
        let cardToShow = this.props.apiData.filter( card => card.id === Number(this.props.match.params.id))[0];

        header = <><p className='netflix'>netflixroulette</p><SearchButton buttonClass='backToFilter' ><Link to={{pathname: `/movies`, search: `?search=${this.props.searchValue}&searchBy=${this.props.searchBy}&sortBy=${this.props.sortBy}&sortOrder=desc&limit=20`}}>Search</Link></SearchButton></>;
        headerContent = <OneFilm 
          cardImgPath={cardToShow.poster_path} 
          cardTitle={cardToShow.title}
          cardGenres={cardToShow.genres.join(', ')}
          cardReleaseDate={cardToShow.release_date.slice(0, 4)}
          cardRuntime={cardToShow.runtime}
          cardFilmOverview={cardToShow.overview} />
      }
            
            return (<div className='header-image'>
            <div className='header'>
            <div className='logo-header'>
            {header}
            </div>
            {headerContent}
            </div>
            </div>)      
            
    }
}
const mapStateToProps = (state) => ({apiData: state.search.apiData, sortBy: state.search.sortBy, searchValue: state.search.searchValue, searchBy: state.search.searchBy})

export default withRouter(connect(mapStateToProps)(Header))
