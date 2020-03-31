import React, { Component } from "react";
import styles from "./BookRecos.module.scss";

export default class BookRecos extends Component {

    render() {
        const bookRecosData = this.props.bookRecosData;
        return (
            <div className={styles.books}>
            <section className={styles.book}>
                <div className={styles.cover}>
                    <img className={styles.image} src={require("../../../../static/images/bravenewworld.png")}/>
                </div>
                <div className={styles.info}>
                    <p className={styles.title}>Brave New World</p>
                    <p className={styles.authors}>Aldous Huxley</p>
                    <p>Page Count: 343</p>
                    <p>Genre: Fiction</p>
                </div>
            </section>

            <section className={styles.book}>
                <div className={styles.cover}>
                    <img className={styles.image} src={require("../../../../static/images/thealchemist.png")}/>
                </div>
                <div className={styles.info}>
                    <p className={styles.title}>The Alchemist</p>
                    <p className={styles.authors}>Paulo Coelho</p>
                    <p>Page Count: 212</p>
                    <p>Genre: Fiction</p>
                </div>
            </section>
            </div>
        )
    }

}