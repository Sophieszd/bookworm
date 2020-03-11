import React, { Component } from "react";
import styles from "./SideBar.module.scss";
import SearchBar from "../Main/BookList/SearchBar";
// import firebase, { firebase } from "../../firebase";

class SideBar extends Component {
    render() {
        return (
            <section className={styles.SideBar}>
                <p>Menu</p>
                <p>Number of Books in Catalogue:</p>
                {/* <SearchBar /> */}
            </section>);
    }
}

export default SideBar;