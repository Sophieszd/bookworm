import React, { Component } from "react";
import styles from "./Book.module.scss";
import bookData from "../../../../static/data/data";
// import Card from 'react-bootstrap/Card';

class BookComponent extends Component {
    render() {
        const bookData = this.props.bookData;
        return (
            <article className={styles.Book}>
                <h3>{this.props.bookData.title}</h3>
                {/* <img className={styles.image} alt="Book image" src={require("../../static/image" + bookData.image)}> */}
                <p>{this.props.bookData.author}</p>
                <p>Page Count: {bookData.pageCount}</p>
            </article>
        )
    }
    
}
export default BookComponent;