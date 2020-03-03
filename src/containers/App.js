import React from "react";
import styles from "./App.module.scss";
import BookList from "../components/Main/BookList";
import SideBar from "../components/SideBar";
import Main from "../components/Main";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <section>
    <h1 className={styles.header}>Book Worm</h1>
    <div  className={styles.Container}>
    <SideBar />
    <BookList />
    </div>
    </section>
  );
}

export default App;
