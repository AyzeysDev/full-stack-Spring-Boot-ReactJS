import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LandingPage extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <h1>Hello there!!!</h1>
                <div className="container">
                Herzlich Willkommen {this.props.match.params.name}.
                    Manage your Activites <Link to="/list">here</Link>.
                </div>
            </>
        )
    }

}


export default LandingPage;
