import React, { Component } from "react";
import styles from "./BookList.module.scss";
import Book from "./Book";
import SearchBar from "./SearchBar";
import firebase, { firestore } from "../../../firebase";
import BookRecos from "./BookRecos";



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
                    books: data.items || []
            });
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <SearchBar className={styles.searchbar} searchText={this.state.searchText} setSearchText={this.setSearchText} />
                <section className={styles.books}>
                    {this.state.books.map((book, index) => (
                        <Book bookData={book} key={index} />
                        // if(searchText) {

                        // }
                    ))}
                </section>

                <section>
                    <p>Well Read's Suggested Books</p>
                    <BookRecos className={styles.books} />
                </section>
            </div>
        )
    }
}
