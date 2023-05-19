import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component{
    render(){
        return(
            <ul>
                <li><Link to='/'>Counter</Link></li>
                <li><Link to='/parent-to-child'>Parent to Child communication</Link></li>
            </ul>
        )
    }
}

export default Header;