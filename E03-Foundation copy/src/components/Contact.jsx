const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you. Get in touch with us!</p>
      </div>

      <div className="contact-content">
        {/* LEFT SIDE */}
        <div className="contact-info">
          <h2>Get in Touch</h2>

          <div className="info-item">
            <span>📍</span>
            <p>Bokaro Steel City, Jharkhand, India</p>
          </div>

          <div className="info-item">
            <span>📞</span>
            <p>+91 *******210</p>
          </div>

          <div className="info-item">
            <span>📧</span>
            <p>support@chefmaster.com</p>
          </div>

          <iframe
            title="map"
            src="https://www.google.com/maps?q=Bokaro%20Steel%20City,%20Jharkhand&output=embed"
            loading="lazy"
          ></iframe>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-form">
          <h2>Send Message</h2>

          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
