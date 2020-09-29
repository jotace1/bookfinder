import React from 'react';
import { FaArrowRight } from 'react-icons/fa'
import './styles.css'

const BookItem = ({ book }) => {
    return (
        <a className="bookItem" target="_blank" href={book.volumeInfo.infoLink}>
            { book.volumeInfo.imageLinks ? 
            <img src={book.volumeInfo.imageLinks.smallThumbnail} alt="livro" /> : <span>SEM FOTO</span>
            }
            <div className="bookInfo">

            <strong>{book.volumeInfo.title}</strong>

            { book.volumeInfo.description ? 
            <p>{book.volumeInfo.description}</p> : undefined
            }

            <strong>Autor: {book.volumeInfo.authors}</strong>
            </div>
            <FaArrowRight />
        </a>
    );
}

export default BookItem;