import React, { useState } from "react";
const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="footer">
      <div className="subscribe_n">
        <h2>KEEP IN TOUCH WITH AMSCO</h2>
        <p>
          Subscribe today to stay on top of everything at AMSCO Medical.
        </p>
        <p>
        Including seasonal special, promo deals, blog updates and much more!
        </p>
        <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="subscribe-text"
              placeholder="Email Address"
              required
            />
          <button type="submit" className="subscribe-btn">
            Subscribe
          </button>
        </form>
      </div>
      <div>
          <span>About</span>
          <span>About</span>
          <span>About</span>
          <span>About</span>
          <span>About</span>
          <span>About</span>
      </div>
    </div>
  );
};

export default Footer;
