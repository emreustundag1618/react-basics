import React, { Component } from 'react'

class AddUser extends Component {
    render() {
        return (
            <div className="col-md-8 mb-4">
                <div className="card">
                    <div className="card-header">
                        <h4>Add User Form</h4>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="id"
                                    placeholder='Enter name'
                                    className="form-control"
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
                                />
                            </div>
                            <button className="btn btn-danger btn-block" type="submit">Add User</button>
                        </form>
                    </div>
                </div>

            </div>
        )
    }
}

export default AddUser;