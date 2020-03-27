import React, { Component } from "react";
import styles from "./Header.module.scss";

export default class Header extends Component {

    render() {
        return ( 
            <section>
            <h1 className={styles.header}>Well Read</h1>
            <p>A place to curate booklists, keep track of your reading and find new literary gems.</p>
            </section>
        )};
}

