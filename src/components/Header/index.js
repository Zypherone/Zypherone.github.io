import React from 'react'

const Header = () => {

  return (
    <header>  
      <h1>zs</h1>
      <nav>
        <div className="menu menu-show" tabIndex="1">
          <i className="icon ellipsis vertical"></i>
        </div>
        <div className="menu menu-hide" tabIndex="2">
          <i className="close icon"></i>
        </div>
        <ul>
          <li><a data-type="slide" title="Home" href="#home"><i className="icon home"></i></a></li>
          <li><a data-type="slide" title="About" href="#about"><i className="icon user"></i></a></li>
          <li><a data-type="slide" title="Portfolio" href="#portfolio"><i className="icon briefcase"></i></a></li>
          <li><a data-type="slide" title="Contact" href="#contact"><i className="icon envelope"></i></a></li>
        </ul>
      </nav>
      <div id="social">
        <ul>
          <li><a title="Twitter" href="https://twitter.com/zypherone"><i className="icon twitter"></i></a></li>
          <li><a title="Github" href="https://twitter.com/zypherone"><i className="icon github"></i></a></li>
          <li><a title="LinkedIn" href="https://www.linkedin.com/in/danutuckersaunders/"><i className="icon linkedin"></i></a></li>
          <li><a title="facebook" href="https://www.facebook.com/zypherone"><i className="icon facebook f"></i></a></li>
        </ul>
      </div>
    </header>
  )
}

export default Header