import { logDOM } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const books = [
  {
    author: 'Jordan Moore',
    title: 'Interesting Facts For Curious Minds',
    img: './images/book-1.jpg'
  },
  {
    author: 'James Clear',
    title: 'Atomic Habits',
    img: './images/book-2.jpg'
  }
];

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        console.log(book);

        const {img, title, author} = book
        return (
          <Book img={img} title={title} author={author} />
        );
      })}
    </section>
  );
}

// Or we can destructure the props if knowing the object is there
const Book = ({ img, title, author }) => {
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

//  This was the first way we used props. There are many different ways
// const Book = (props) => {
//   console.log(props);
//   return (
//     <article className='book'>
//       <img src={props.img} alt={props.title} /> 
//       <h2>{props.title}</h2>
//       <h4>{props.author}</h4>
//     </article>
//   );
// };

// Below is an alternate/cleaner version of using props
// const Book = (props) => {
//   console.log(props);
//   const { img, title, author } = props;
//   return (
//     <article className='book'>
//       <img src={img} alt={title} />
//       <h2>{title}</h2>
//       <h4>{author}</h4>
//     </article>
//   )
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);
