import React, { Component } from 'react';
import './App.css';
import About from './components/about'
import Home from './components/home'
import Services from './components/services'
import Skills from './components/skills'
import Education from './components/education'
import Experience from './components/experience'
import Work from './components/work'
import Blog from './components/blog'
import Contact from './components/contact'
import Sidebar from './components/sidebar'


class App extends Component {
  render(){
    return(
      <div id="colorlib-page">
        <div class="container-wrap">
        <Sidebar></Sidebar>
        <div id="colorlib-main">
          <Home></Home>
          <About></About>
          <Services></Services>
          <Skills></Skills>
          <Education></Education>
          <Experience></Experience>
          <Work></Work>
          <Blog></Blog>
          <Contact></Contact>
        </div>
        </div>
      </div>
      );
  }
}

export default App;
