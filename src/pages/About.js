import React from 'react'

const About = () => {

  return (
      <div className="slide" id="about">
        <div className="slide-container">
          <h2>About</h2>
          <img className="right" src="images/profile-danu-tucker-saunders.jpg" alt="Danu Tucker-Saunders (Zypherone) - Full-Stack Developer" />
          <p>I am a full-stack developer, with over five years’ experience in back-end development. Based in Sydney, Australia, I recently completed a 24-week intensive program at Sydney University; focused on gaining additional technical programming skills in HTML5, CSS3, Javascript, JQuery, Bootstrap, Firebase, Node Js, MySQL, MongoDB, Express, Handelbars.js & ReactJS.</p>
          <p><a className="download-button" href="assets/resume.pdf" title="Resume/CV | Danu Tucker-Saunders | Full Stack Developer" target="_blank" rel="noopener noreferrer" ><span className="icon-download"></span> Download CV</a></p>
          <h3>History</h3>
          <p>Was formally a bar manager at an established restaurant, with over ten years in customer service, hospitality and concierge, my unique insight allows me to problem solve and understand customers need. With extensive knowledge in communicating with various stakeholders, put me in a unique position to deliver and satisfy customers expectation.</p>
          <p>My interests and hobbies extend to reading, problem solving and ancient history.</p>
          <h3>Skills</h3>
          <ul>
            <li><span className="icon-html5"></span> HTML5</li>
            <li><span className="icon-css3"></span> CSS3</li>
            <li><span className="icon-php"></span> PHP</li>
            <li><span className="icon-python"></span> Python</li>
            <li><span className="icon-javascript"></span> Javascript</li>
            <li><span className="icon-jquery"></span> JQuery</li>
            <li><span className="icon-bootstrap"></span> Bootstrap</li>
            <li><span className="icon-firebase"></span> Firebase</li>
            <li><span className="icon-node-dot-js"></span> Node Js</li>
            <li><span className="icon-mysql"></span> MySQL</li>
            <li><span className="icon-mongodb"></span> MongoDB</li>
            <li><span className="icon-expressjs"></span> Express</li>
            <li><span className="icon-handlebarsjs"></span> Handelbars.js</li>
            <li><span className="icon-react"></span> ReactJS</li>
            <li><img src="assets/momentjs.svg" alt="SVG logo for Moment.js" /> Moment.js</li>
          </ul>
        </div>
    </div>
  )
}

export default About