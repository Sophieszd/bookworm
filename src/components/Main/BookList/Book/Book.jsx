import React, { Component } from "react";
import styles from "./Book.module.scss";


class BookComponent extends Component {
    render() {
        const bookData = this.props.bookData;
        return (
            <article className={styles.Book}>
                <h3>Title</h3>
                {/* <img className={styles.image} alt="Book image" src={require("../../static/image" + bookData.image)}> */}
                <p>{bookData.author}</p>
                <p>{bookData.pageCount}</p>
            </article>
        )
    }
    
}
export default BookComponent;