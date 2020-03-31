import React, { Component } from "react";
import styles from "./MyDashboard.module.scss";
import SideBar from "../SideBar";
import Header from "../Main/Header";

export default class MyDashboard extends Component {

   

    render() {
        return (
            <div className={styles.dashboard}>
                <p>Currently Reading</p>
                <p>Next on Reading List</p>
                {/* <SideBar className={styles.sidebar}/>
                <Header /> */}
                {/* <button onClick={this.props.signOut}>Sign Out</button> */}
                <div onClick={this.props.signOut}>
                    <button className={styles.google}>Sign out with google</button>
                </div>
            </div>
        );
    }
}