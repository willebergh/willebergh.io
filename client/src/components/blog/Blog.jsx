import React, { Component } from 'react';
import axios from "axios";
import { Container } from "react-bootstrap";

import Post from "./Post";

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
        this.api = "http://dampgang.com:5000/api"
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
            <Container>
                {this.state.posts.map(post => {
                    return <Post key={post._id} title={post.title} content={post.content} author={post.author} date={post.date} />
                })}
            </Container>
        );
    }
}

export default Blog;