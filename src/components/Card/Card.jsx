import React, { useEffect, useState } from 'react';
import ShelfChanger from '../ShelfChanger/ShelfChanger';
import classes from './card.module.scss';

const Card = props => {
  const bookChangeHandler = isChange => {
    const newEntry = {
      id: props.id,
      title: props.title,
      thumbnail: props.img,
      author: props.authors,
      shelf: isChange,
    };

    console.log('THE MAIN FUNCTION');
    console.log(newEntry);
    console.log(isChange);
    return newEntry;
  };

  const render = (
    <li key={props.id} id={props.id}>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${props.thumbnail})`,
            }}
          ></div>
          <ShelfChanger onChange={bookChangeHandler} />
        </div>
        <div className="book-title">{props.title}</div>
        <div className="book-authors">{props.authors}</div>
      </div>
    </li>
  );

  return <React.Fragment>{render}</React.Fragment>;
};

export default Card;
