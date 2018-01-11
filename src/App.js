import React, {Component} from "react";
import logo from "./logo.svg";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/jquery/dist/jquery.min.js";

import NavbarTop from "./NavbarTop";
import Jumbotron from "./Jumbotron";
import Card from "./Card";

class App extends Component {
    render() {
        return (
            <div>
                {/* TODO props change name */}
                <NavbarTop titleName="PichaiLim"/>
                <Jumbotron/>
                <Card/>
            </div>
        );
    }
}

export default App;
