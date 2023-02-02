import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const BookList = () => {
  return <section className='booklist'>
    <Book />
    <Book />
    <Book />
    <Book />
  </section>;
}; 

const author = 'Jordan Moore';
const Book = () => {
  const title = 'Interesting Facts For Curious Minds';
  return (
    <article className='book'>
      <img
        src="./images/book-1.jpg"
        alt='Interesting Facts For Curious Minds' 
      />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};


// Below is an example of JSX - CSS (inline styles)
// const Author = () => (
//   <h4 style={{ color: 'green', fontSize: '0.75rem', marginTop: '0.5rem' }}>
//     Jordan Moore
//   </h4>
// )


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);
