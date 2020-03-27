import React, { Component } from "react";
import styles from "./Main.module.scss";
// import firebase, { firebase } from "../../firebase";
import Book from "./BookList/Book/Book";
import Header from "../Main/Header/Header";
import BookList from "../Main/BookList/BookList";

export default class Main extends Component {
    render() {
        return (
            <section className={styles.Main}>
                {/* <Header /> */}
                <BookList />
            </section>);
    }
}