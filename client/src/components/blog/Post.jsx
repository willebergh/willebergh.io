import React, { Component } from 'react';
import { Container } from "react-bootstrap";

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            content: this.props.content,
            date_time: this.props.date,
            author: this.props.author,
        }
        this.api = "http://localhost:5000/api"
    }

    render() {
        const { title, content, author, date_time } = this.state;
        const date = date_time.slice(0, 10);
        const time = date_time.slice(11, 16);
        return (
            <Container className="text-light col col-lg-8 col-md-10">
                <Container>
                    <h1 className="h3">
                        {title}
                    </h1>
                </Container>
                <Container>
                    <p>
                        {content}
                    </p>
                </Container>
                <Container>
                    {author.fullName}, {date}, {time}
                </Container>
            </Container>
        );
    }
}

export default Post;