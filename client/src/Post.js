import React from "react";

const Post = () => {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://cdn.mos.cms.futurecdn.net/M2bjTHjeAoLSqfXuizphcT-970-80.jpg.webp"
          alt=""
          className=""
        />
      </div>
      <div className="texts">
        <h2>
          15 years after the worst rebrand in history, Tropicana is trying again
        </h2>
        <p className="info">
          <a className="author">Him Rane</a>
          <time>2023-01-06 16:45</time>
        </p>
        <p className="summary">
          Back in 2009, Tropicana rebranded, and it was an unmitigated disaster.
          PepsiCo, its owner at the time, ditched the brand's classic packaging
          with its arched logo and fruit pierced with a straw in favour of an
          identity that looked like a cheap supermarket own-brand.
        </p>
      </div>
    </div>
  );
};

export default Post;
