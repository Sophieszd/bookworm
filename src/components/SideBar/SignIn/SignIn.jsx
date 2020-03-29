import React, { Component } from 'react';
import styles from "./SignIn.module.scss";
import SideBar from "../../SideBar";
import Header from "../../Main/Header";

export default class SignIn extends Component {
    render() {
        return (
            <div className={styles.wholepage}>
                <SideBar className={styles.sidebar}/>
                <Header />
                <div className={styles.signin}>
                    <p>To access your Well Read Dashboard, please sign in with Google:</p>
                    <button className={styles.google} onClick={this.props.signIn}>Sign-in with Google</button>
                </div>
            </div>
        )
    }
}