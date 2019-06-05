import React, {Component} from 'react';

import { Route, Switch, withRouter } from 'react-router-dom'
import MainPage from './mainComponents/MainPage/MainPage';
import Homepage from './mainComponents/MainPage/MainPage';

import 'isomorphic-fetch';
import 'babel-polyfill';


const PageNotFound = () => (
    <div>
        <h1> 404 Page Not Found </h1>
    </div>
);

export class App extends Component {

    constructor(props) {
        super(props)
      }


   
    render() {
  

        return (   
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path={['/movies/:id', '/movies']} component={MainPage} />
            <Route component={PageNotFound} />
          </Switch>
         
            
                        
        )
    }
}
export default withRouter(App)