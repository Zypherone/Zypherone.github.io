import React from 'react'

const Contact = () => {

  return (
    <div className="slide" id="contact">
      <div className="slide-container">
        <h2>Contact</h2>
        <p>Phone: <a className="contact-details" href="tel:+610424693534">&#x0002B;61-424-693-534</a></p>
        <p>Email: <a className="contact-details antispam" href="danutuckersaunders/a/email/d/com">danutuckersaunders&#x00040;email&#x000B7;com</a></p>
        <p>&nbsp;</p>
        <p>Keen to contact me for work oportunity? Or just a consulting gig? Feel free to drop me a line, and I will be get back to you as soon as I can!</p>
        <form>
          <div className="msg">
            <div className="msg-success">
              <p>Message sent!</p>
            </div>
            <div className="msg-waiting">
              <p><span className="loader"></span>  Sending...</p>
            </div>
          </div>
          <label>
            <input type="text" name="name" placeholder="Name" required />
          </label>
          <label>
            <input type="email" name="email" placeholder="Email" required />
          </label>
          <label>
            <input type="text" name="subject" placeholder="Subject" required />
          </label>
          <label>
            <textarea name="message" placeholder="Message" required ></textarea>
          </label>
          <label>
            <input type="submit" value="Send" />
          </label>
        </form>
      </div>
    </div>
  )
}

export default Contact