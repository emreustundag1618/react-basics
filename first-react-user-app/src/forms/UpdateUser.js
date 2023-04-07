import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import UserConsumer from '../context';
import axios from 'axios';

export default function UpdateUser() {
    const { id } = useParams();
    const [state, setState] = useState({
        name: "",
        department: "",
        salary: "",
        error: false
    });

    const navigate = useNavigate();

    const { name, department, salary, error } = state;

    const changeInput = (e) => {
        setState({
            ...state,
            // name = "name", salary = "salary input", department = "department input"
            [e.target.name]: e.target.value
        })
    }

    const validateForm = () => {
        const { name, salary, department } = state;
        if (name === "" || salary === "" || department === "") {
            return false;
        }
        return true;
    }

    const getData = async () => {


        const response = await axios.get(`http://localhost:3004/users/${id}`);
        const { salary, department, name } = response.data;
        
        setState({
            name,
            salary,
            department
        })

    }

    useEffect(() => {
        getData();
        
    }, [])

    const updateUser = async (dispatch, e) => {
        e.preventDefault();

        // update user
        const updatedUser = {
            name,
            salary,
            department
        }

        // validate
        if (!validateForm()) {
            setState({
                error: true
            })
            return;
        }

        const response = await axios.put(`http://localhost:3004/users/${id}`, updatedUser);

        dispatch({ type: "UPDATE_USER", payload: response.data });

        navigate("/")
    }


    return (
        <UserConsumer>
            {
                value => {
                    const { dispatch } = value;
                    return (

                        <div className="col-md-8 mb-4">


                            <div
                                className="card">
                                <div className="card-header">
                                    <h4>Update User Form</h4>
                                </div>
                                <div className="card-body">
                                    {
                                        error ?
                                            <div className="alert alert-danger">Lütfen bilgileri kontrol edin</div>
                                            : null
                                    }
                                    <form onSubmit={updateUser.bind(this, dispatch)}>
                                        <div className="form-group">
                                            <label htmlFor="name">Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                id="id"
                                                placeholder='Enter name'
                                                className="form-control"
                                                value={name}
                                                onChange={changeInput}
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
                                                onChange={changeInput}
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
                                                onChange={changeInput}
                                            />
                                        </div>
                                        <button className="btn btn-danger btn-block" type="submit">Edit User</button>
                                    </form>
                                </div>
                            </div>

                        </div>
                    )
                }
            }
        </UserConsumer>
    )
}