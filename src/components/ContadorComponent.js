import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Form, Icon, Input, Button, Card, Row, Col, Divider, Popover } from 'antd';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

/**
 * Autor: victor.delcarmen
 */

const FormItem = Form.Item;
const mapStateToProps = (state) => {
    return {
        state
    };
}

class ContadorComponent extends Component {
    constructor(props) {
        super();
        this.state = {
            count: props.count
        }

        this.incrementCount = this.incrementCount.bind(this);
        this.decrementCount = this.decrementCount.bind(this);
        this.resetCount = this.resetCount.bind(this);
    }

    incrementCount() {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
    }

    decrementCount() {
        this.setState((prevState) => ({ count: prevState.count - 1 }));
    }

    resetCount() {
        this.setState(() => ({ count: 0 }));
    }

    render() {
        return (
            <div className="container" style={{background: '#cfcfcf'}}>
                <div className="centrado">
                    <Row>
                        <Col span={24} >
                            <FormItem className="formitem-default" block={true} >
                                <Popover >
                                    {this.state.count}
                                </Popover>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={8} >
                            <FormItem className="formitem-default" block={true} >
                                <Button className="btn-accion btn-incremento" type="primary" block={true} onClick={this.incrementCount} >Incrementar</Button>
                            </FormItem>
                        </Col>
                        <Col span={8} >
                            <FormItem className="formitem-default" block={true} >
                                <Button className="btn-accion btn-reseteo" type="primary" block={true} onClick={this.resetCount} >Reiniciar</Button>
                            </FormItem>
                        </Col>
                        <Col span={8} >
                            <FormItem className="formitem-default" block={true} >
                                <Button className="btn-accion btn-decremento" type="primary" block={true} onClick={this.decrementCount} >Decrementar</Button>
                            </FormItem>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

ContadorComponent.defaultProps = {
    count: 0
};

ContadorComponent.propTypes = {
    count: PropTypes.number
};

export default withRouter(connect(mapStateToProps)(ContadorComponent));