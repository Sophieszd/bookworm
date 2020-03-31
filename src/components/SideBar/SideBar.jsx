import React, { Component } from "react";
import styles from "./SideBar.module.scss";
import NavItem from "./NavItem";
import SignIn from "./SignIn";
import { Nav } from "react-bootstrap";
// import SearchBar from "../Main/BookList/SearchBar";
// import firebase, { firebase } from "../../firebase";

export default class SideBar extends Component {
    render() {
        return (
            <section className={styles.SideBar}>
                <div>
                    <ul className={styles.NavList}>
                        {/* <SignIn route="/signin" name="Sign in with Google" /> */}
                        <NavItem route="/home" name="Home" />
                        <NavItem route="/signin" name="Sign In" onClick={this.props.signIn} />
                        <NavItem route="/private/mydashboard" name="My Dashboard" />
                        <NavItem route="/favourites" name="Favourites" />
                        {/* <NavItem route="/currentlyreading" name="Currently Reading" /> */}
                    </ul>
                    </div>
            </section>);
    }
}
