import React, { Component } from 'react'
import Home from 'pages/Home'
import About from 'pages/About'
import Portfolio from 'pages/Portfolio'
import Contact from 'pages/Contact'
import $ from 'jquery'

class Section extends Component {

  componentDidMount() {
    // Build the next/prev buttons for each slide
    $.each($('.slide'), function(key, value) {

      const elm = {
        prev: $(value.previousElementSibling).attr('id'),
        next: $(value.nextElementSibling).attr('id')
      };

      const button = {
        prev: `<div class="slide-button slide-prev"><a data-type="slide" href="#${elm.prev}"><i class="icon chevron left"><i></a></div>`,
        next: `<div class="slide-button slide-next"><a data-type="slide" href="#${elm.next}"><i class="icon chevron right"><i></a></div>`
      };

      // Ensure we don't add them where no slide exist for either prev or next.
      if (elm.prev !== undefined) {
        $(value).prepend(button.prev);
      }
      if  (elm.next !== undefined) {
        $(value).append(button.next);
      }
    })

  }

  render() {
    return (
      <section>
        <div className="slide-holder">
          <Home />
          <About />
          <Portfolio />
          <Contact />
        </div>
      </section>
    )
  }
}

export default Section