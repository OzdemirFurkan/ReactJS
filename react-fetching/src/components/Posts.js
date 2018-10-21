import React, { Component } from 'react';

class Posts extends Component {
    render() {
        return (
            <div>
                <h2>Posts</h2>
                {
                    this.props.isLoading ? <div>Loading...</div> :
                        this.props.posts.map(post =>
                            <div key={post.id}>
                                {post.title}
                            </div>
                        )
                }</div>
        );
    }
}

export default Posts;

