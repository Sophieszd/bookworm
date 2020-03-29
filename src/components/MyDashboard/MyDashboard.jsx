import React, { Component } from "react";
import styles from "./MyDashboard.module.scss";
import SideBar from "../SideBar";
import Header from "../Main/Header";

export default class MyDashboard extends Component {
    render() {
        return (
            <div>
                <SideBar className={styles.sidebar}/>
                <Header />
                <button onClick={this.props.signOut}>Sign Out</button>
            </div>
        );
    }
}