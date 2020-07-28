import React from 'react'

const Portfolio = () => {

  return (
    <div className="slide" id="portfolio">
      <div className="slide-container">
        <h2>Portfolio</h2>
        <ul>
          <li><a target="_blank" rel="noopener noreferrer" href="https://peaceful-plains-43046.herokuapp.com/" title="JnTnD-BnB"><img src="images/portfolio/JnTnD-BnB.jpg" alt="JnTnD-BnB " /></a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://zypherone.github.io/moody-drinks" title="Moody Drinks"><img src="images/portfolio/moody-drinks.jpg" alt="Moody Drinks" /></a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://zypherone.github.io/AMT" title="A Moment in Time"><img src="images/portfolio/AMT.jpg" alt="A Moment in Time" /></a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://zypherone.github.io/WDD" title="Weather Dashboard"><img src="images/portfolio/WDD.jpg" alt="Weather Dashboard" /></a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://zypherone.github.io/note-taker" title="Note Taker"><img src="images/portfolio/note-taker.jpg" alt="Note Taker" /></a></li>
        </ul>
      </div>
    </div>
  )
}

export default Portfolio