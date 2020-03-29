import React, { Component } from "react";
import { Link } from "@reach/router";
import styles from "./NavItem.module.scss";

export default class NavItem extends Component {
    render() {
        return (
            <section className={styles.NavList}>
                <Link to={this.props.route}>{this.props.name}</Link>
            </section>);
    }
}