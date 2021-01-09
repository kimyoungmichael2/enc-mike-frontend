import React, {Component} from 'react';
import axios from 'axios';
import { Button, Form, TextArea } from 'semantic-ui-react'


export default class CreateComments extends Component {
    constructor(props) {
        super(props);

        this.onChangeComment = this.onChangeComment.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            comment: '',
            username: ''
        }
    }

    onChangeComment(e) {
        this.setState({
            comment: e.target.value
        });
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const comment ={
            comment: this.state.comment,
            username: this.state.username,
        }

        console.log(comment)

        axios.post('http://michaelyoung.kim/api/comments/add', comment)
            .then(res => console.log(res.data));

        window.location = '/';
    }

    render() {
        return (
        <div>
            <h3>Write an encouragement to Michael!</h3>
            <Form onSubmit={this.onSubmit}>
                <Form.TextArea
                    label='Message'
                    onChange={this.onChangeComment}
                    required
                    value={this.state.comment}
                    type='text'
                />
                {/* <Form.Field>
                <label>Message:</label>
                <input 
                    type="text"
                    required
                    value={this.state.comment}
                    onChange={this.onChangeComment}
                />
                </Form.Field> */}
                <Form.Field required>
                <label>Signed by:</label>
                <input 
                    type="text"
                    required
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                />
                </Form.Field>
                <Button type="submit">Submit</Button>
            </Form>

        </div>
        )
    }

}