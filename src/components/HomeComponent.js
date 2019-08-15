import React, { Component } from "react";
import { linksRouter } from "../configs/urlsNav";
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { Form, Icon, Input, Button, Card, Row, Col, Divider, Popover } from 'antd';

import logo from '../imgs/inelogo.png';
import '../App.css';

/**
 * Autor: victor.delcarmen
 */

const FormItem = Form.Item;
const mapStateToProps = (state) => {
    return {
        state: state
    };
}

class HomeComponent extends Component {

    render() {
        return(
            <div className="container">
                <img src={logo} className="App-logo" alt="logo" />
                <p className="Espaciado-alto" />
                <p className="Texto original" >
                    Esta es la página en blanco para proyectos con React.
                </p>
                <a className="App-link" href="https://ine.mx" target="_blank" rel="noopener noreferrer">
                    Ir al sitio de INE.
                </a>
            </div>
        )
    }

}

export default withRouter(connect(mapStateToProps)(HomeComponent));