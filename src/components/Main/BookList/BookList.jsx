import React, { Component } from "react";
import styles from "./BookList.module.scss";
import Book from "./Book";
import data from "../../../static/data/data";
// import firebase, { firestore } from "../../firebase";

class BookList extends Component {
    render() {
        return (
            <section className={styles.BookList}>
                {data.map((book, index) => (
                    <Book bookData={book} key={index} />
               
                ))}
               
            </section>
        )
    }
}

export default BookList;