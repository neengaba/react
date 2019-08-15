import React, { Component } from "react";
import { Form, Icon, Input, Button, Card, Row, Col, Divider, Popover } from 'antd';
import { linksRouter } from "../configs/urlsNav";
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import logo from '../imgs/inelogo.png';

const FormItem = Form.Item;
const mapStateToProps = (state) => {
    return {
        state: state
    };
}

class FooterComponent extends Component {

    render() {
        return(
            <footer>
                <React.Fragment>
                    <Row className="footer-container">
                        <Col span={4}>
                            <img src={logo} className="App-logo" alt="logo" />
                        </Col>
                        <Col span={16}>
                            Para más información, visita <a className="App-link" href="https://ine.mx" target="_blank" rel="noopener noreferrer">www.ine.mx</a>.
                        </Col>
                        <Col span={4} />
                    </Row>
                </React.Fragment>
            </footer>
        )
    }
}

export default withRouter(connect(mapStateToProps)(FooterComponent));