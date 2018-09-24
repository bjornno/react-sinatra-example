import React from 'react';
import PropTypes from 'prop-types';

import '../assets/styles/App.scss';


class Foo extends React.Component{
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
      const { value, onIncreaseClick } = this.props
      return(
          <div>
                <h1>Hello, {this.state.data.data}!</h1>
                <span>{value}</span>
                <button onClick={onIncreaseClick}>Increase</button>
          </div>
      );
    }
}


export default Foo;
