import React, { Component } from "react";
import styles from "./Main.module.scss";
// import firebase, { firebase } from "../../firebase";
import Book from "./BookList/Book/Book";
import BookList from "../Main/BookList/BookList";
import SideBar from "../SideBar";
import Header from "../Main/Header";

export default class Main extends Component {
    render() {
        return (
            <section className={styles.Main}>
                <SideBar className={styles.sidebar}/>
                <Header />
                <BookList />
            </section>);
    }
}