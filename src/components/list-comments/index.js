import React, {Component} from 'react';
import axios from 'axios';
import {List} from 'semantic-ui-react'

const Comment = props => (
    <List.Item>
        <List.Content>
            <List.Header>{props.comment.comment}</List.Header>
            <List.Description>- {props.comment.username}</List.Description>
        </List.Content>
    </List.Item>
)


export default class ListComments extends Component {
    constructor(props) {
        super(props);

        this.state = {comment : []};
    }

    componentDidMount() {
        axios.get('http://michaelyoung.kim/api/comments/')
          .then(response => {
            this.setState({ comment: response.data })
            console.log(this.state.comment);
          })
          .catch((error) => {
            console.log(error);
          })
      }
    

    commentList() {
        return this.state.comment.map(currentcomment => {
            console.log(currentcomment);
            return <Comment comment={currentcomment} key={currentcomment._id}/>;
        })
    }

    render() {
        return(
            <div>
                <h3>List of encouragements:</h3>
                <List divided relaxed>
                    { this.commentList() }
                </List>
            </div>
        );
    }
}