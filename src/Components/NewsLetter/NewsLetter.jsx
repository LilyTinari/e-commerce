import React from "react"; // 6.9k (gzipped: 2.7k)
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="newsletter">
      <h1>Get Exclusive Offers Sent To Your Email </h1>
      <p>
        Subscribe to our newsletter to stay updated on sales,collection drops
        and exclusive offers!{" "}
      </p>
      <div>
        <input type="email" placeholder="Your Email ID" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
