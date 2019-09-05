import React, { Component } from 'react'

export default class About extends Component {
	render(){
		return(
		<div>
  <section className="colorlib-about" data-section="about">
    <div className="colorlib-narrow-content">
      <div className="row">
        <div className="col-md-12">
          <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
            <div className="col-md-12">
              <div className="about-desc">
                <span className="heading-meta">About Us</span>
                <h2 className="colorlib-heading">Who Am I?</h2>
                <p>Hi I'm <strong>a Masters in Computer Science </strong>at University Of Southern California, Los Angeles. Primarily interested in exploring the different facets of Computer Science. I am extremely passionate about the latest developments in the field of Artificial Intelligence and Machine Learning and looking for summer internship opportunities from 2020</p>
                <br/>
                <p> I have two years of working experience in developing highly scalable microservices, reactive systems and cloud based applications using different architectural styles.</p>
                <br/>
                <p> When I'm not working I enjoy reading books, playing badminton and Racquet ball</p>
              </div>
            </div>
          </div>       
        </div>
      </div>
    </div>
  </section>
</div>
		)
	}
}