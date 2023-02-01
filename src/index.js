import React from 'react';
import ReactDOM from 'react-dom/client';

function Greeting() { 
  return (
    // Below is a shorthand version of <React.Fragment></React.Fragment> 
    // (<></>)
    <> 
    <div className='someValue'>
      <h1>
        Hello Dickheads!
      </h1>
        <ul>
        <li>
          <a href="#">Only Dickheads Click Here!</a>
        </li>
        </ul>
      </div>
      <h2>This is for Asshats</h2>
      <input type="text" name='someName' id='someID' />
    </>
  );
}

// function Greeting() { 
//   return React.createElement('h2', {}, 'Hello Dickhead');
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting />);
