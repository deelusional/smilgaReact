import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const firstBook = {
  author: 'Jordan Moore',
  title: 'Interesting Facts For Curious Minds',
  img: './images/book-1.jpg'
}

const secondBook = {
  author: 'James Clear',
  title: 'Atomic Habits',
  img: './images/book-2.jpg'
}



function BookList() {
  return (
    <section className='booklist'>
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img} 
      />
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img} 
      />
    </section>
  );
}; 

//  This was the first way we used props. 
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
const Book = (props) => {
  const { img, title, author } = props;
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  )
 }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);
