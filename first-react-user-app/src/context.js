import React, { Component } from "react";

export const UserContext = React.createContext();

const reducer = (state, action) => {
    switch(action.type) {
        case "DELETE_USER":
            return {
                ...state,
                users: state.users.filter(user => action.payload !== user.id)
            }
        default:
            return state
    }
}

// Provider, Consumer

export class UserProvider extends Component {
    state = {
        users: [
            {
                id: 1,
                name: "Emre Üstündağ",
                department: "Bilişim",
                salary: "5000"
            },
            {
                id: 2,
                name: "Emre Üstündağ 2",
                department: "asfasdf",
                salary: "3000"
            },
            {
                id: 3,
                name: "Emre Üstündağ 3",
                department: "Bifgshgflişim",
                salary: "4000"
            },
        ],
        dispatch: action => {
            this.setState(state => reducer(state, action))
        }
    }
    render() {
        return (
            <UserContext.Provider value={this.state}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

const UserConsumer = UserContext.Consumer;

export default UserConsumer;
