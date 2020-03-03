import React, { Component } from "react";
import styles from "./Main.module.scss";
// import firebase, { firebase } from "../../firebase";
import Book from "./BookList/Book/Book";

export default class Main extends Component {
    render() {
        return (
            <section className={styles.Main}>
                <Book />
            </section>);
    }
}