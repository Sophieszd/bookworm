import React, { Component } from "react";
import { Router, Redirect, globalHistory } from "@reach/router";
import SideBar from "../../components/SideBar/SideBar";
import firebase, { providers } from "../../firebase";
import PrivateRoutes from "./PrivateRoutes";

const NotFound = () => (<h2>Not Found</h2>);

export default class Routes extends Component {
    state = {
        user: null
    }

    signIn = () => {
        firebase
            .auth()
            .signInWithPopup(providers.google)
            .then(result => {
                this.setState({user: result.user})
            })
            .catch(error => {
                console.log(error);
            })
    }

    signOut = () => {
        firebase
        .auth()
        .signOut()
        .then(() => {
            this.setState({user: null});
            globalHistory.navigate("/login");
        })
    }

    render() {
        return (
            <Router>
                <Redirect noThrow from="/" to="books" />
                <SideBar path="signin" signIn={this.signIn} />
                {/* <PrivateRoutes>
                </PrivateRoutes> */}
                {/* <NotFound default /> */}
            </Router>
        )
    }
}