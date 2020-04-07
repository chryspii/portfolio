import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import StudentTableRow from './StudentTableRow';

export default class List extends Component {
    constructor(props) {
        super(props)

        this.state = {
            students: [],
        }
        this.fetchData = this.fetchData.bind(this)
    }

    fetchData() {
        axios.get('http://localhost:4000/student/')
            .then(res => {
                this.setState({
                    students: res.data
                })
            }).catch((error) => {
                console.log(error)
            })
    }

    componentDidMount() {
        this.fetchData();
    }

    DataTable() {
        if(this.state.students.length === 0) {
            return (
                <tr>
                    <td colSpan={4} className='text-center'>No Record Found</td>
                </tr>
            )
        } else {
            return this.state.students.map((res, i) => {
                return <StudentTableRow obj={res} fetchData={this.fetchData} key={i} />
            })
        }
    }

    // componentDidUpdate() {
    //     axios.get('http://localhost:4000/student/')
    //         .then(res => {
    //             this.setState({
    //                 students: res.data
    //             })
    //         }).catch((error) => {
    //             console.log(error)
    //         })
    // }

    render() {
        return (
            <div className="table-wrapper">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Roll No</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.DataTable()}
                    </tbody>
                </Table>
            </div>
        )
    }
}