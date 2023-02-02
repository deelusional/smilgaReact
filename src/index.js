import React from 'react';
import ReactDOM from 'react-dom/client';

const BookList = () => {
  return <section>
    <Book />
  </section>;
}; 

const Book = () => {
  return <article>
    <Image />
    <Title />
    <Author />
  </article>
 }

const Image = () => <h2>Image placeholder</h2>
const Title = () => <h2>Book Title</h2>
const Author = () => {
  return <h2>Author</h2>
 }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);
