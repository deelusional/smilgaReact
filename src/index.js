import React from 'react';
import ReactDOM from 'react-dom/client';

function Greeting() { 

  return (
    <div>
      <h2>John Dickhead</h2>
      <p>This is my message.</p>
    </div >
  );
} 

// function Greeting() { 
//   return React.createElement('h2', {}, 'Hello Dickhead');
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting />);
