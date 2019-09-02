import React, { Component } from 'react'

export default class Sidebar extends Component {
	render(){
		return(
		<div>
  <div>
    <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></a>
    <aside id="colorlib-aside" role="complementary" className="border js-fullheight">
      <div className="text-center">
        <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
        <h1 id="colorlib-logo"><a href="index.html">Pratiksha Prabhu</a></h1>
        <span className="position"><a href="#">Graduate Student</a> at University Of Southern California</span>
      </div>
      <nav id="colorlib-main-menu" role="navigation" className="navbar">
        <div id="navbar" className="collapse">
          <ul>
            <li className="active"><a href="#" data-nav-section="home">Home</a></li>
            <li><a href="#" data-nav-section="about">About</a></li>
            <li><a href="#" data-nav-section="services">Services</a></li>
            <li><a href="#" data-nav-section="skills">Skills</a></li>
            <li><a href="#" data-nav-section="education">Education</a></li>
            <li><a href="#" data-nav-section="experience">Experience</a></li>
            <li><a href="#" data-nav-section="work">Work</a></li>
            <li><a href="#" data-nav-section="blog">Blog</a></li>
            <li><a href="#" data-nav-section="contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      <div className="colorlib-footer">
        <p><small>
            Copyright © All rights reserved | This template is made with <i className="icon-heart" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</small></p>
        <ul>
          <li><a href="#"><i className="icon-facebook2" /></a></li>
          <li><a href="#"><i className="icon-twitter2" /></a></li>
          <li><a href="#"><i className="icon-instagram" /></a></li>
          <li><a href="#"><i className="icon-linkedin2" /></a></li>
        </ul>
      </div>
    </aside>
  </div>
</div>
		)
	}
}