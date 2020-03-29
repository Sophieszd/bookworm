import React, { Component } from 'react';
import { globalHistory } from '@reach/router';

export default class PrivateRoutes extends Component {
    render() {
        if (!this.props.user) {
            globalHistory.navigate("/signin");
            return null;
        } else {
            console.log(this.props.user);
            return this.props.children;
        }
    }
}