import React, {Component} from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header'
import SortingSection from '../SortingSection/SortingSection'
import Card from '../Card/Card'
import Footer from '../Footer/Footer'
import NoFilmsFound from '../NoFilmsFound/NoFilmsFound';

export class Homepage extends Component {

    constructor(props) {
      super(props)
    }
  
    render() {
      
      let pageContent = this.props.apiData.length === 0 ? <NoFilmsFound /> : <Card {...this.props}/> 
      return (
        <>
          <Header />
            <><SortingSection />
            {pageContent}</>
          <Footer />
        </>
        )
      }
    }
  
  const mapStateToProps = (state) => ({apiData: state.search.apiData});

export default connect(mapStateToProps)(Homepage)