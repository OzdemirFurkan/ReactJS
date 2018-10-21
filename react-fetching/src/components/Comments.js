import React, { Component } from 'react';
import LoaderHOC from "./LoaderHOC";

class Comments extends Component {
    render() {
        return (
            <div>
                <h2>Comments</h2>
                {
                        this.props.comments.map(comment =>
                            <div key={comment.id}>
                                {comment.body}
                            </div>
                        )
                }
            </div>
        );
    }
}

export default LoaderHOC(Comments,'comments');

