import React, { Component } from "react";
import styles from "./Book.module.scss";

class BookComponent extends Component {

    get title() {
        const dataTitle = this.props.bookData.volumeInfo.title;
        return dataTitle.length > 23
          ? dataTitle.substring(0, 20) + "..." 
          : dataTitle;
    }

    render() {
        const bookData = this.props.bookData.volumeInfo;
        return (
            <article className={styles.book}>
                <img
                className={styles.image}
                alt="Book image"
                src= {(bookData.imageLinks != null) 
                    ? bookData.imageLinks.smallThumbnail
                    : "Image not available"}
              />
                <p className={styles.title}> {this.title}</p>
                <p> {bookData.authors}</p>
                <p>Page Count: {bookData.pageCount}</p>
                <p>Genre: {(bookData.categories != null)
                        ? bookData.categories
                        : "N/A"}
                </p>
            </article>
        )
    }
    
}
export default BookComponent;