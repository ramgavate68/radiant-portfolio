
import './Contact.css';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

function Contact() {
  return (
    <div id="contact" className="contact-container">
      <div className="left-box">
        <h2>CONTACT US</h2>
        <p>📞 09000000000</p>
        <p>📱 09000000000 | 09000000000</p>
        <p>📧 contactus@email.ng</p>
        <p>📍 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
        
        <div className="social-icons">
          <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
        </div>
        {/*  Ellipses  */}
  <div class="ellipse ellipse-793"></div>
  <div class="ellipse ellipse-794"></div>
      </div>

      <div className="right-box">
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" required></textarea>
          <button type="submit">send</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
