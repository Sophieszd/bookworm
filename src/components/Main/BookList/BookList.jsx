import React, { Component } from "react";
import styles from "./BookList.module.scss";
import Book from "./Book";
import SearchBar from "./SearchBar";
import firebase, { firestore } from "../../../firebase";



export default class BookList extends Component {
    state = {
        books: [],
        searchText: "",
        filteredBooks: [],
        url: `https://www.googleapis.com/books/v1/volumes/`
    }

    setSearchText = (event) => {
        event.preventDefault();
        const searchText = event.target.value;
        this.setState({ searchText }, this.fetchBooks);
    }

    fetchBooks() {
        fetch(`${this.state.url}?q=${this.state.searchText}&key=AIzaSyDMym1dMT591Z1reIhDlZSfVKctxMmuuDM&maxResults=40`)
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    books: data.items,
                    filteredBooks: data.items
                });
            })
    }

    render() {
        console.log(this.state);
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
