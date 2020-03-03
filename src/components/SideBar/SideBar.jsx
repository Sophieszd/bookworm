import React, { Component } from "react";
import styles from "./SideBar.module.scss";
// import firebase, { firebase } from "../../firebase";

class SideBar extends Component {
    render() {
        return (
            <section className={styles.SideBar}>
                <p>Menu</p>
                <p>Number of Books in Catalogue:</p>
            </section>);
    }
}

export default SideBar;