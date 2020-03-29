import React, { Component } from "react";
import styles from "./Header.module.scss";

export default class Header extends Component {

    render() {
        return ( 
            <section>
            {/* <h1 className={styles.header}>Well Read</h1> */}
            <div className={styles.title}>
                <div className={styles.one}>W</div>
                <div className={styles.two}>E</div>
                <div className={styles.one}>L</div>
                <div className={styles.two}>L</div>
                <div className={styles.one}>R</div>
                <div className={styles.two}>E</div>
                <div className={styles.one}>A</div>
                <div className={styles.two}>D</div>
            </div>
            <div className={styles.subtitle}>
            <p>A place to curate booklists, keep track of your reading and find new literary gems.</p>
            </div>
            </section>
        )};
}

