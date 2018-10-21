import React, { Component } from 'react';

class Child extends Component {

    componentWillMount(){
        console.log('-CHILD- componentWillMount');
    }

    componentDidMount() {
        console.log('-CHILD- componentDidMount');
    }

    componentWillReceiveProps(nextProps){
        console.log("-CHILD- componentWillReceiveProps", nextProps);
    }

    render() {
        console.log("-CHILD- RENDER");

        return (
            <div>
                CHILD
            </div>
        );
    }
}

export default Child;
