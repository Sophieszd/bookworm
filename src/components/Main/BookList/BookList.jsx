import React, { Component } from "react";
import styles from "./BookList.module.scss";
import Book from "./Book";
// import data from "../../../static/data/data";
import firebase, { firestore } from "../../../firebase";

export default class BookList extends Component {
    state = {
        books: []
    }

    componentDidMount() {
        firestore
            .collection("books")
            .get()
            .then((query) => {
                const books = query.docs.map(doc => doc.data());
                this.setState({ books });
                console.log(books)
            })
    }

    render() {
        return (
            <section className={styles.books}>
                {this.state.books.map((book, index) => (
                    <Book bookData={book} key={index} />
                ))}
            </section>

        )
    }
}

// export default class BookList extends Component {
    
//     render() {
//         return (
//             <section className={styles.BookList}>
//                 {data.map((book, index) => (
//                     <Book bookData={book} key={index} />
//                 ))}
//             </section>
//         )

