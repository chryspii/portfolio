import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

export default class Create extends Component {
    constructor(props) {
        super(props)

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeRollno = this.onChangeRollno.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            email: '',
            rollno: ''
        }
    }

    onChangeName(e) {
        this.setState({name: e.target.value})
    }

    onChangeEmail(e) {
        this.setState({email: e.target.value})
    }

    onChangeRollno(e) {
        this.setState({rollno: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault()

        const studentObject = {
            name: this.state.name,
            email: this.state.email,
            rollno: this.state.rollno
        }
        axios.post('http://localhost:4000/student', studentObject)
            .then((res) => {
                console.log(res.data)
                console.log('Created Succesfully')
            }).catch((error) => {
                console.log(error)
            })

        this.setState({name: '', email: '', rollno: ''})
    }

    render() {
        return (
            <div className="form-wrapper">
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="Name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={this.state.name} onChange={this.onChangeName} />
                    </Form.Group>

                    <Form.Group controlId="Email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" value={this.state.email} onChange={this.onChangeEmail} />
                    </Form.Group>

                    <Form.Group controlId="Name">
                        <Form.Label>Roll No</Form.Label>
                        <Form.Control type="text" value={this.state.rollno} onChange={this.onChangeRollno} />
                    </Form.Group>

                    <Button variant="danger" size="lg" block="block" type="submit">
                        Create
                    </Button>
                </Form>
            </div>
        );
    }
}