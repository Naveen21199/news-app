import './App.css';
import NavBar from './component/NavBar';
import News from './component/News';

import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <News pageSize={5}/>
      </div>
    )
  }
}