import React, { Component } from "react";
import { Form, Icon, Input, Button, Card, Row, Col, Divider, Popover } from 'antd';
import { linksRouter } from "../configs/urlsNav";
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import logo from '../imgs/logosistema.jpg';
import MenuComponent from "./MenuComponent";

const FormItem = Form.Item;
const mapStateToProps = (state) => {
    return {
        state: state
    };
}

class HeaderComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            action: null
        }
    }

    onMenuClick = (e) => {
        console.log("Switch: " + e.target.id);
        switch(e.target.id) {
            case "homeEnlace":
                this.setState({ action: "/" + linksRouter.enlaceHome });
                break;
            case "unoEnlace":
                this.setState({ action: "/" + linksRouter.enlaceUno });
                break;
            case "dosEnlace":
                this.setState({ action: "/" + linksRouter.enlaceDos });
                break;
        }
    }

    render() {

        console.log("Estado de action: " + this.state.action);
        if(this.state.action !== null) {
            try {
                this.props.history.push(this.state.action);
                this.setState({ action: null });
            } catch(error) { }
        }

        return (
            <header>
                <React.Fragment>
                    <Row className="header-container">
                        <Col span={4}>
                            <img id={"homeEnlace"} src={logo} alt="logo" onClick={(e) => this.onMenuClick(e)} />
                        </Col>
                        <Col span={16}>
                            <MenuComponent />
                        </Col>
                        <Col span={4} >
                            <Form.Item>
                                <Button className="btn-accion btn-reseteo" type="primary" block={false}
                                    alt={"Iniciar sesión"} >Iniciar sesión</Button>
                            </Form.Item>
                        </Col>
                    </Row>
                </React.Fragment>
            </header>
        )
    }
}

export default withRouter(connect(mapStateToProps)(HeaderComponent));