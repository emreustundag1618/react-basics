import React, { Component } from 'react';
import PropTypes from 'prop-types';


class User extends Component {
    state = {
        isVisible: false
    }

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         isVisible: false
    //     }
    // }

    onClickEvent = (e) => {
        this.setState({
            isVisible: !this.state.isVisible
        })
    }

    onDeleteUser = (e) => {
        // const {id, deleteUser} = this.props;
        // Consumer dispatch
        
    }

    render() {
        // destructing
        const { name, department, salary } = this.props;
        const { isVisible } = this.state;
        return (
            <div className="col-md-6 mb-4">
                <div className="card">
                    <div className="card-header d-flex justify-content-between align-items-center">
                        <h4 className="d-inline" onClick= {this.onClickEvent}>{name}</h4>
                        <i onClick = {this.onDeleteUser} className="fas fa-user-times fa-lg" style={{ cursor: "pointer" }}></i>
                    </div>
                    {
                        isVisible ?
                            <div className="card-body">
                                <p className="card-text">Maaş: {salary}</p>
                                <p className="card-text">Department: {department}</p>
                            </div> : null
                    }
                </div>
            </div>
        )
    }
}

User.defaultProps = {
    name: "Bilgi yok",
    department: "Bilgi yok",
    salary: "Bilgi yok",
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired
}

export default User;
