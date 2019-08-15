import React, { Component } from "react";
import { Form, Icon, Input, Button, Card, Row, Col, Divider, Popover, Menu } from 'antd';
import { linksRouter } from "../configs/urlsNav";
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import SubMenu from "antd/lib/menu/SubMenu";

/**
 * Autor: victor.delcarmen
 */

const FormItem = Form.Item;
const mapStateToProps = (state) => {
    return {
        state: state
    };
}

const mapDispatchToProps = (dispatch) => ({
    
});

class MenuComponent extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            current: "0",
            action: null
        }
    }

    handleClick = e => {
        this.setState({
            current: e.key
        });
    }

    render() {
        return (
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                <Menu.Item key="0">
                    <Icon type="mail" />
                    Navegación Uno
                    <Link to={"/" + linksRouter.contador}/>
                </Menu.Item>
                <Menu.Item key="1" disabled>
                    <Icon type="app" />
                    Navegación Dos
                </Menu.Item>
                <SubMenu title={<span className="submenu-title-wrapper"><Icon type="setting" />Navegación Tres</span>}>
                    <Menu.ItemGroup title="Elemento 1">
                        <Menu.Item key="2.0"><Link to={"/" + linksRouter.enlaceHome}/>Lalo</Menu.Item>
                        <Menu.Item key="2.1"><Link to={"/" + linksRouter.enlaceVic}/>Vic</Menu.Item>
                        <Menu.Item key="2.2"><Link to={"/" + linksRouter.enlaceDos}/>Balam</Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>
                <Menu.Item key="3">
                    <a href="https://www.google.com.mx" target="_blank" rel="noopener noreferrer" >
                        Navegación Cuatro - Link
                    </a>
                </Menu.Item>
            </Menu>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MenuComponent));