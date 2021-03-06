import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import Posts from "./components/Posts";
import Comments from "./components/Comments";
import FirstNumber from "./components/FirstNumber";
import SecondNumber from "./components/SecondNumber";


class App extends Component {
  state = {
      users: [],
      posts: [],
      comments: [],
      firstNumber: Math.random(),
      secondNumber: Math.random(),
      isLoading:true
  };
    componentDidMount() {
        setInterval(() => {
            this.setState({
                firstNumber: Math.random(),
            });
        }, 1000);


        //Native fetch
        /*setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(data => data.json())
                .then(users => {
                    this.setState({
                        users,
                        isLoading: false
                    });
                })
        },3000)*/

        //With Axios
        setTimeout(() => {
            axios.get('https://jsonplaceholder.typicode.com/users')
                 .then(users => users.data)
                .then(users => {
                    this.setState({
                        users,
                        isLoading: false
                    });
                })
        },3000);

        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(posts => posts.data)
            .then(posts => {
                setTimeout(() => {
                    this.setState({
                        posts,
                    });
                }, 2000)
            })

        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then(comments => comments.data)
            .then(comments=> {
                setTimeout(() => {
                    this.setState({
                        comments,
                    });
                }, 1000)
            })

    }

    render() {
        const {isLoading} = this.state;
    return (
      <div className={"card-profile"}>
          <FirstNumber firstNumber={this.state.firstNumber}/>
          <br/>
          <SecondNumber secondNumber={this.state.secondNumber}/>
          <br/>

        <hr/>

        <h1>Users</h1>
        { isLoading ? 'Loading...' : '' }
        {!isLoading ? this.state.users.map(user =>
              <div key={user.id}>
                  {user.username} - @{user.email}
              </div>
          ) : null
        }
        <hr/>
          <Comments {...this.state}/>
        <hr/>

        <Posts {...this.state} />
      </div>
    );
  }
}

export default App;
