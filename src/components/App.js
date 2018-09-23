import React from 'react';
import PropTypes from 'prop-types';

import '../assets/styles/App.scss';


class App extends React.Component{
    constructor() {
      super();
      this.state = { data: { data: 'norge' } };
    }
    componentDidMount() {
      fetch('/api/hello')
        .then(res => res.json())
        .then(json => this.setState({ data: json }));
    }
    
    render(){
        return(
            <div>
                  <h1>Hello, {this.state.data.data}!</h1>
            </div>
        );
    }
}


export default App;
