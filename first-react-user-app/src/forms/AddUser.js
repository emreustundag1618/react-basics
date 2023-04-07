import React, { Component } from 'react';
import {
    AnimatePresence,
    motion
} from "framer-motion";
import UserConsumer from '../context';
import axios from 'axios';

// json-server kendi otomatik unique id vereceği için buna gerek yok
// var uniqid = require('uniqid');


class AddUser extends Component {

    state = {
        visible: false,
        name: "",
        department: "",
        salary: "",
        error: false
    }

    changeVisibility = (e) => {
        this.setState({
            visible: !this.state.visible
        })
    }

    validateForm = () => {
        const {name, salary, department} = this.state;
        if (name === "" || salary === "" || department === "") {
            return false;
        }
        return true;
    }

    changeInput = (e) => {
        console.log(e.target.value)
        this.setState({
            ...this.state,
            // name = "name", salary = "salary input", department = "department input"
            [e.target.name]: e.target.value
        })
    }

    

    addUser = async (dispatch, e) => {
        e.preventDefault();
        const { name, department, salary } = this.state;

        const newUser = {
            // id : uniqid(),
            // ES6 kolaylığı: name: name, salary: salary yerine tekli kullanılabilir
            name,
            salary,
            department
        }

        // validate
        if (!this.validateForm()) {
            this.setState({
                error: true
            })
            return;
        }


        const response = await axios.post(`http://localhost:3004/users`, newUser)
        dispatch({ type: "ADD_USER", payload: response.data });

        
        // redirect
        window.location.href = '/'
    }


    render() {
        const { visible, name, salary, department, error } = this.state;

        return (
            <UserConsumer>
                {
                    value => {
                        const { dispatch } = value;
                        return (

                            <div className="col-md-8 mb-4">
                                <button onClick={this.changeVisibility} className="btn btn-dark bg-success btn-block mb-2">{visible ? "Close" : "Add User"}</button>
                                <AnimatePresence initial="false">
                                    {visible && (
                                        <motion.div initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{ once: true }}
                                            className="card">
                                            <div className="card-header">
                                                <h4>Add User Form</h4>
                                            </div>
                                            <div className="card-body">
                                                {
                                                    error ? 
                                                    <div className="alert alert-danger">Lütfen bilgileri kontrol edin</div>
                                                    : null
                                                }
                                                <form onSubmit={this.addUser.bind(this, dispatch)}>
                                                    <div className="form-group">
                                                        <label htmlFor="name">Name</label>
                                                        <input
                                                            type="text"
                                                            name="name"
                                                            id="id"
                                                            placeholder='Enter name'
                                                            className="form-control"
                                                            value={name}
                                                            onChange={this.changeInput}
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="name">Department</label>
                                                        <input
                                                            type="text"
                                                            name="department"
                                                            id="id"
                                                            placeholder='Enter department'
                                                            className="form-control"
                                                            value={department}
                                                            onChange={this.changeInput}
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="name">Salary</label>
                                                        <input
                                                            type="text"
                                                            name="salary"
                                                            id="id"
                                                            placeholder='Enter salary'
                                                            className="form-control"
                                                            value={salary}
                                                            onChange={this.changeInput}
                                                        />
                                                    </div>
                                                    <button className="btn btn-danger btn-block" type="submit">Add User</button>
                                                </form>
                                            </div>
                                        </motion.div>
                                    )
                                    }

                                </AnimatePresence>

                            </div>
                        )
                    }
                }
            </UserConsumer>
        )

    }
}

export default AddUser;