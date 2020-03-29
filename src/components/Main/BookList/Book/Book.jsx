import React, { Component } from "react";
import styles from "./Book.module.scss";

export default class BookComponent extends Component {

    get title() {
        const dataTitle = this.props.bookData.volumeInfo.title;
        return dataTitle.length > 23
          ? dataTitle.substring(0, 20) + "..." 
          : dataTitle;
    }

    get authorSpacing() {
        const authors = this.props.bookData.volumeInfo.authors;
        addSpace = (authors) => {
            for (i = 0; i < authors.length; i++) {
                if(author[i] == " ") {
                    authors.push("&nbsp;");
                }
            }
        }
    }

    render() {
        const bookData = this.props.bookData.volumeInfo;
        return (
            <article className={styles.book}>
                <section className={styles.cover}>
                    <img
                    className={styles.image}
                    alt="Book image"
                    src= {(bookData.imageLinks != null) 
                        ? bookData.imageLinks.smallThumbnail
                        : "Image not available"}
                    />
                </section>
                <section className={styles.info}>
                    <p className={styles.title}> {this.title}</p>
                    <p className={styles.authors}> {bookData.authors}</p>
                    <p>Page Count: {bookData.pageCount}</p>
                    <p>Genre: {(bookData.categories != null)
                            ? bookData.categories
                            : "N/A"}
                    </p>
                </section>
            </article>
        )
    }
    
}