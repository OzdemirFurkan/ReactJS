import React, { Component } from 'react';

class ShouldComponentUpdate extends Component {
    state = {
      tl: 0
    };

    changeTl = (e) => {
        this.setState({
            tl: e.target.value
        })
    };

    shouldComponentUpdate(nextProps,nextState){
        console.log("-ShouldComponentUpdate-");
        return nextState.tl % 10 === 0;

    }

    componentWillUpdate(nextProps, nextState) {
        console.log("-componentWillUpdate- WillMount ile ayni ama shoulComponente bagli", nextProps, nextState);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("-componentDidUpdate- DidMount ile ayni ama shoulComponente bagli", prevProps, prevState);
    }


    render() {
        console.log("ShouldComponentUpdate RENDER");
        return (
            <div>
                <input name="" id="" onChange={this.changeTl} />
                <br/><br/>
                Her elma 10TL <br/>
                {this.state.tl / 10} tane elma alabilirsiniz
            </div>
        );
    }
}

export default ShouldComponentUpdate;
