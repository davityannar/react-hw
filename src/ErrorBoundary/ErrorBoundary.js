import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { error: null, errorInfo: null};
    }
  
    
  
    componentDidCatch(error, info) {
      // You can also log the error to an error reporting service
      this.setState({
        error: error,
        errorInfo: info
      })
    }
  
    render() {
        if (this.state.errorInfo) {
          return (
            <div >
              <h2>Component did't render.</h2>
              <details style={{ whiteSpace: 'pre-wrap' }}>
                {this.state.error && this.state.error.toString()}
                <br />
                {this.state.errorInfo.componentStack}
              </details>
            </div>
          );
        }
        return this.props.children;
      }
  }

  export default ErrorBoundary;
  