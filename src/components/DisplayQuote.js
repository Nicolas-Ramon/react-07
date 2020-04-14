import React from 'react';
  
function DisplayQuote({ oneQuote }) {
    return (
        <div className="DisplayQuote">
            <p>{oneQuote.character}</p>
            <img src={oneQuote.image} alt="one pic"/>
            <p>{oneQuote.quote}</p>
        </div>
    );
};
  
export default DisplayQuote;