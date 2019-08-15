import React, { Component } from "react";
import { Form, Icon, Input, Button, Card, Row, Col, Divider, Popover, Menu, Dropdown, Breadcrumb, Select, Switch, Radio, Checkbox, Alert, Modal, Table, Result, Progress } from 'antd';
import { linksRouter } from "../configs/urlsNav";
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { fetchObject } from "../actions/Creator/actionPruebaVic";
import { sendMessage } from "../actions/Creator/MessagesCreator";

const Option = Select.Option;
const mapStateToProps = (state) => {
    return {
        state
    };
}

const mapDispatchToProps = (dispatch) => ({
    fetchObject: (arg1, arg2) => dispatch(fetchObject(arg1, arg2)),
    sendMessage: (arg1, arg2, arg3) => dispatch(sendMessage(arg1, arg2, arg3))
});

class FormPruebaVic extends Component {

    constructor(props) {
        super(props);

        this.state = {
            estatus: 0,
            valorRadios: null,
            retrievedData: null,
            valorChecks: [],
            statusGuardado: { },
            percent: 0
        }

        this.getList();

        this.handleMenuClick = this.handleMenuClick.bind(this);
        this.onChangeRadios = this.onChangeRadios.bind(this);
        this.onChangeChecks = this.onChangeChecks.bind(this);
    }

    componentDidMount() {
        // this.getList();
    }

    getList() {
        this.props.fetchObject(1, 2).then(data => {
            this.setState({
                retrievedData: data.message,
                percent: 100
            });
        });
        console.log(this.state.retrievedData);
    }

    handleMenuClick = e => {
        console.log("Se presionó " + e);
    }

    onChangeRadios = e => {
        console.log("Se cambió a: " + e.target.value);
        this.setState({
            valorRadios: e.target.value
        });
    }

    onChangeChecks = checkedValues => {
        console.log("Se cambió a: " + checkedValues);
        this.setState({
            valorChecks: checkedValues
        });
    }

    menuDesplegable = (
        <Menu onClick={this.handleMenuClick}>
            <Menu.Item key="1">
                <Icon type="user" />
                Opción 1
            </Menu.Item>
            <Menu.Item key="2">
                <Icon type="user" />
                Opción 3
            </Menu.Item>
            <Menu.Item key="3">
                <Icon type="user" />
                Opción 3
            </Menu.Item>
        </Menu>
    );

    sendData = () => {
        const parametrosCadena = {"name":"test","salary":"123","age":"23","id":"719"};
        const fetchParams = {
            method: "POST",
            cache: "no-cache",
            cors: "cors",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(parametrosCadena),
            redirect: "manual"
        };
        console.log(fetchParams);

        return fetch("http://dummy.restapiexample.com/api/v1/create",
            fetchParams)
            .then(response => {
                console.log("Pasó...");
                console.log(response);
                if(response.ok) {
                    this.setState({
                        statusGuardado: this.props.sendMessage(1, "Exitoso", "Respondió bien.")
                    });
                    return response;
                } else {
                    let error = new Error("Generic");
                    error.response = response;
                    console.log(error);
                    this.setState({
                        statusGuardado: this.props.sendMessage(2, "Error", "Respondió mal. Causa: " + error.message)
                    });
                    throw error;
                }
            }, error => {
                let mensaje = new Error(error.mensaje);
                console.log(error);
                this.setState({
                    statusGuardado: this.props.sendMessage(2, "Error", "Respondió mal. Causa: " + error.mensaje)
                });
                throw mensaje;
            }).catch(err => {
                this.setState({
                    statusGuardado: this.props.sendMessage(2, "Error", "Respondió mal. Causa: " + err.status)
                });
                console.log("Error...");
                console.log(err);
            });
    }

    opcionesRadioButtons = [
        { label: 'Opción 1', value: '0', disabled: false },
        { label: 'Opción 2', value: '1', disabled: true },
        { label: 'Opción 3', value: '2', disabled: false }
    ];

    info = () => {
        Modal.info({
            title: "Este es un mensaje de notificación",
            content: (
                <div>
                    <p>Algo de texto párrafo 1...</p>
                    <p>Algo de texto párrafo 2...</p>
                </div>
            ),
            okText: "Aceptar",
            onOk() {},
        });
    }

    columnas = [
        {
            title: "id",
            dataIndex: "id"
        },
        {
            title: "employee_name",
            dataIndex: "employee_name"
        },
        {
            title: "employee_salary",
            dataIndex: "employee_salary"
        },
        {
            title: "employee_age",
            dataIndex: "employee_age"
        },
        {
            title: "profile_image",
            dataIndex: "profile_image"
        }
    ];

    render() {
        return (
            <div className="container formulario">
                <Breadcrumb>
                    <Breadcrumb.Item>Inicio</Breadcrumb.Item>
                    <Breadcrumb.Item><a href="">Nivel 1</a></Breadcrumb.Item>
                    <Breadcrumb.Item><a href="">Nivel 2</a></Breadcrumb.Item>
                </Breadcrumb>
                <p className="espaciador-pequenio" />
                <h1>Título del módulo</h1>
                <p className="espaciador-pequenio" />
                <Row>
                    {
                        (this.state.statusGuardado.showMessage == true) &&
                        <Alert message={this.state.statusGuardado.title} description={this.state.statusGuardado.description}
                            type={this.state.statusGuardado.notificationType === 1 ? "success" : "error"} closable={false} showIcon />
                    }
                </Row>
                <Row>
                    <Col span={24}>
                        <Card title="Título de sección del formulario" extra={<a onClick={() => this.info()}>Más</a>}>
                            <Row className="separador-renglon">
                                <Col span={12}>
                                    <Row>
                                        <span className="etiqueta-campo requerido">Combo de selección 1</span>
                                        <Col>
                                            <Dropdown overlay={this.menuDesplegable}>
                                                <Button>
                                                    Selecciona <Icon type="down" />
                                                </Button>
                                            </Dropdown>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col span={12}>
                                    <Row>
                                        <span className="etiqueta-campo requerido">Combo de selección 2</span>
                                        <Col>
                                            <Select defaultValue="0">
                                                <Option value="0">Selecciona</Option>
                                                <Option value="1">Opción 1</Option>
                                                <Option value="2">Opción 2</Option>
                                            </Select>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row className="separador-renglon">
                                <Col span={24}>
                                    <Row>
                                        <span className="etiqueta-campo requerido">Texto de input</span>
                                        <Col>
                                            <Input style={{ backgroundColor: '#fff' }}
                                                placeholder="Ingresa texto..." />
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row className="separador-renglon">
                                <Col span={6}>
                                    <Row>
                                        <span className="etiqueta-campo requerido">Componente switch</span>
                                        <Col>
                                            <Switch checkedChildren={<Icon type="check" />} unCheckedChildren={<Icon type="close" />} defaultChecked />
                                        </Col>
                                    </Row>
                                </Col>
                                <Col span={9}>
                                    <Row>
                                        <span className="etiqueta-campo requerido">Radio botones</span>
                                        <Col>
                                            <Radio.Group options={this.opcionesRadioButtons} onChange={this.onChangeRadios} value={this.state.valorRadios} />
                                        </Col>
                                    </Row>
                                </Col>
                                <Col span={9}>
                                    <Row>
                                        <span className="etiqueta-campo requerido">Check boxes</span>
                                        <Col>
                                            <Checkbox.Group options={this.opcionesRadioButtons} onChange={this.onChangeChecks} value={this.state.valorChecks} />
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>

                            <Row className="separador-renglon">
                                <span>Tabla con datos dummy</span>
                                <Col span={24}>
                                    <Table dataSource={this.state.retrievedData} columns={this.columnas} />
                                </Col>
                                <Progress type="circle" percent={this.state.percent} />
                            </Row>
                        </Card>
                    </Col>
                </Row>

                <Row className="separador-renglon">
                    <Col span={24} className="contenedor-centrado" >
                        <Button >Acción secundaria</Button>
                        <Button type="primary" onClick={() => this.sendData()}>Acción principal</Button>
                    </Col>
                </Row>
            </div>
        )
    }

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FormPruebaVic));