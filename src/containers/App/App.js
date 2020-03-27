import React, { Component } from "react";
import styles from "./App.module.scss";
import Header from "../../components/Main/Header";
import BookList from "../../components/Main/BookList";
import SideBar from "../../components/SideBar";
import Main from "../../components/Main";
import Routes from "../routes/Routes";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
    render() {
      return (
        <section>
        <Header />
        <div  className={styles.Container}>
          <SideBar className={styles.sidebar}/>
          <Main className={styles.main}/>
          <Routes />
        </div>
        </section>

    );
  }
}