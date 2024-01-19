import React, { useState } from "react";
import axios from 'axios';
import toast from "react-hot-toast";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/subscribe`, {
      email
    });
    setEmail("");
    if (res.data.success) toast.success(res.data.message);
    else {
      toast.error(res.data.message);
    }
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
