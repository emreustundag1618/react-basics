import React, { Component } from 'react';

class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            a: 10
        }
        console.log("Test component constructor called for uderstanding lifecycle");
        console.log("test component props: ",this.props);

    }
    componentDidMount = () => {
        this.setState({
            a: 20
        })
        console.log("component did mount")
    }

    componentDidUpdate = (prevProps, prevState) => {
      console.log("component did update")
    }

    shouldComponentUpdate = () => {
        console.log("shouldComponentUpdate");
        return true
    }
    

    render() {
        console.log("render called")

        return (
            <div>

            </div>
        )
    }
}

export default Test;
