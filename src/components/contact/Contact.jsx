import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookF, FaTelegramPlane } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="text-black">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container ">
        <div className="contact__options">
          <article className="contact_option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>borormeyphalla@gmail.com</h5>
            <a href="mailto:borormeyphalla@gmail.com">Send a message</a>
          </article>
        </div>

        <div className="contact__options">
          <article className="contact_option">
            <FaFacebookF className="contact__option-icon" />
            <h4>Facebook</h4>
            <h5>Sora - ぞら</h5>
            <a href="https://facebook.com/messages/t/100009017799685">
              Send a message
            </a>
          </article>
        </div>

        <div className="contact__options">
          <article className="contact_option">
            <FaTelegramPlane className="contact__option-icon" />
            <h4>Telegram</h4>
            <h5>089 668 777</h5>
            <a href="https://web.telegram.org/z/#1075950092">Send a message</a>
          </article>
        </div>
        {/* End of Contact Options*/}
        {/* <form action="">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            id="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form> */}
      </div>
    </section>
  );
}

export default Contact;
