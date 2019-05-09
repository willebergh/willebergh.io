import React, { Component } from 'react';
import axios from "axios";
import { Container, Row } from "react-bootstrap";

import Post from "./Post";

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
        this.api = "http://localhost:5000/api"
    }

    componentDidMount() {
        this.getPosts();
    }

    getPosts = () => {
        axios.get(`${this.api}/post`)
            .then(res => this.setState({ posts: res.data }))
    }

    render() {
        return (
            <Container className="">
                {this.state.posts.map(post => {
                    return (
                        <Row className="p-0 mt-5 mb-5">
                            <Post key={post._id} title={post.title} content={post.content} author={post.author} date={post.date} />
                        </Row>
                    );
                })}
            </Container>
        );
    }
}

export default Blog;