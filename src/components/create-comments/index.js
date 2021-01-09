import React, {Component} from 'react';
import axios from 'axios';

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

        axios.post('http://localhost:5000/comments/add', comment)
            .then(res => console.log(res.data));

        window.location = '/';
    }

    render() {
        return (
        <div>
            <h3>Write an encouragement to Michael!</h3>
            <form onSubmit={this.onSubmit}>
                <label>Message:</label>
                <input 
                    type="text"
                    required
                    value={this.state.comment}
                    onChange={this.onChangeComment}
                />
                <label>Signed by:</label>
                <input 
                    type="text"
                    required
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                />
                <input type="submit" value="Submit" />
            </form>

        </div>
        )
    }

}