import React, { Component } from "react";
import styles from "./SideBar.module.scss";
// import SearchBar from "../Main/BookList/SearchBar";
// import firebase, { firebase } from "../../firebase";

export default class SideBar extends Component {
    render() {
        return (
            <section className={styles.SideBar}>
                <p>Menu</p>
                <div>
                    <div onClick={this.props.signIn} className={styles.google}>
                        <button>Sign In with Google</button>
                    </div>
                    <button>Sign Out with Google</button>
                    <p>Favourites</p>
                    <p>Currently Reading</p>
                    <p>Past Reads</p>
                    <p>Future Reads</p>
                </div>
            </section>);
    }
}
