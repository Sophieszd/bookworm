import React, { Component } from "react";
import styles from "./BookList.module.scss";
import Book from "./Book";
import SearchBar from "./SearchBar";
import firebase, { firestore } from "../../../firebase";

export default class BookList extends Component {
    state = {
        books: [],
        searchText: "",
        filteredBooks: []
    }

    setSearchText = (event) => {
        const searchText = event.target.value;
        this.setState({ searchText }, this.filterBooks);
    }

    filterBooks = () => {
        let filteredBooks = this.state.books.filter(book => {
            return book.title.includes(this.state.searchText);
        })
        this.setState({ filteredBooks })
    }

    componentDidMount() {
        firestore
            .collection("books")
            .get()
            .then((query) => {
                const books = query.docs.map(doc => doc.data());
                this.setState({ 
                    books: books,
                    filteredBooks: books
                 });
                console.log(books)
            })
    }

    render() {
        return (
            <>
                <SearchBar searchText={this.state.searchText} setSearchText={this.setSearchText} />
                <section className={styles.books}>
                    {this.state.filteredBooks.map((book, index) => (
                        <Book bookData={book} key={index} />
                    ))}
                </section>
            </>
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

