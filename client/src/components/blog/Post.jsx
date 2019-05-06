import React, { Component } from 'react';
import { Container, Card } from "react-bootstrap";

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            content: this.props.content,
            author: this.props.author,
            date_time: this.props.date
        }
    }
    render() {
        const { title, content, author, date_time } = this.state;
        const date = date_time.slice(0, 10);
        const time = date_time.slice(11, 16);
        return (
            <Card className="shadow-sm bg-black text-light border-light mt-4" style={{ width: '50rem', margin: "auto" }}>
                <Card.Body>
                    <Card.Title>
                        {title}
                    </Card.Title>
                    <Card.Text>
                        {content}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    Posted by: {author}, {date} {time}
                </Card.Footer>
            </Card>
        );
    }
}

export default Post;