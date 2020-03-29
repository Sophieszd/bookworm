import React, { Component } from "react";
import { Router, Redirect, globalHistory } from "@reach/router";
import firebase, { providers } from "../../firebase";

import Main from "../../components/Main";
import SideBar from "../../components/SideBar/SideBar";
import SignIn from "../../components/SideBar/SignIn";
import MyDashboard from "../../components/MyDashboard";
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
            globalHistory.navigate("/signin");
        })
    }

    render() {
        return (
            <Router>
                <Redirect noThrow from="/" to="signin" />
                <Main path="home" />
                <SignIn path="signin" signIn={this.signIn}/>
                <PrivateRoutes path="myreads" user={this.state.user}>
                    <MyDashboard path="mydashboard" user={this.state.user} signOut={this.signOut} />
                </PrivateRoutes>
                {/* <NotFound default /> */}
            </Router>
        )
    }
}