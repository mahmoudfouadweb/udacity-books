import React from 'react';
import Card from '../Card/Card';
import ShelfChanger from '../ShelfChanger/ShelfChanger';
import classes from './bookShelf.module.scss';

const BookShelf = props => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          <Card book={props.status} />
        </ol>
      </div>
    </div>
  );
};

export default BookShelf;
