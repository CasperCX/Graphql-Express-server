import React, { Component } from 'react';
import history from '../history';
import { graphql } from 'react-apollo';
import { CREATE_COURSE } from '../Mutations/courseMutations';
import { ALL_COURSES } from '../Queries/courseQueries';

class CourseCreate extends Component {
    constructor(props) {
        super(props);
        this.state = { title: '', author: '', description: '', topic: '', url: ''}
    }
    
    handleSubmit(e) {
        e.preventDefault();
        this.props.mutate({
            variables: {
                title: this.state.title,
                author: this.state.author,
                description: this.state.description,
                topic: this.state.topic,
                url: this.state.url
            },
            refetchQueries: [{ ALL_COURSES }]
        }).then(() => history.push('/'));
    }

 
    render() {
        return(
            <div>
                <p>Create a course</p>
                <form onSubmit={this.handleSubmit.bind(this)}>
                <label>Add Course</label>
                    <input 
                        value={this.state.title}
                        placeholder="title"
                        onChange={e => this.setState({ title: e.target.value })} />
                    <input 
                        value={this.state.author}
                        placeholder="author"
                        onChange={e => this.setState({ author: e.target.value })} />
                    <input 
                        value={this.state.description}
                        placeholder="description"
                        onChange={e => this.setState({ description: e.target.value })} />
                    <input 
                        value={this.state.topic}
                        placeholder="topic"
                        onChange={e => this.setState({ topic: e.target.value })} />
                     <input 
                        value={this.state.url}
                        placeholder="url"
                        onChange={e => this.setState({ url: e.target.value })} />
                    
                    <input type="submit" />
                </form>
            </div>
        )
    }
};

export default graphql(CREATE_COURSE)(CourseCreate);