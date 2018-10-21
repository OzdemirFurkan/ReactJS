import React, { Component } from 'react';
import LoaderHOC from "./LoaderHOC";

class Posts extends Component {
    render() {
        return (
            <div>
                <h2>Posts</h2>
                {
                        this.props.posts.map(post =>
                            <div key={post.id}>
                                {post.title}
                            </div>
                        )
                }</div>
        );
    }
}

export default LoaderHOC(Posts,'posts');

