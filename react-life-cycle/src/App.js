import React, { Component } from 'react';

import './App.css';
import Child from "./Child";
import ShouldComponentUpdate from "./ShouldComponentUpdate";


class App extends Component {
  state = {
    name: 'Ozdemir'
  };

  constructor(props){
    super();
    console.log("-APP- constructor")
  }

  componentWillMount(){
    console.log('-APP- componentWillMount Sanal DOM dan Real DOM a aktarilmadan hemen once calisir');
  }

  componentDidMount() {
      console.log('-APP- componentDidMount Render dan sonra');
  }

  changeName = () => {
    this.setState({
        name: "Furkan"
    })
  };

    render() {
      console.log("-APP- RENDER");
    return (
      <div>
          APP <div>{this.state.name}</div>
          <Child name={this.state.name}/>
          <button onClick={this.changeName}>Change the Name</button>
          <br/>
          <br/>
          <ShouldComponentUpdate/>
      </div>
    );
  }
}

export default App;
