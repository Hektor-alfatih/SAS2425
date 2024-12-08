import React from 'react';

function Card() {
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', maxWidth: '300px' }}>
      <h2>{h2}</h2>
      <h3>{h3}</h3>
      <p>{paragraph}</p>
      <img src={src} alt={alt} />
    </div>
  );
}

export default Card;
