import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import { ALL_COURSES } from '../Queries/courseQueries';
import { DELETE_COURSE } from '../Mutations/courseMutations';
import Course from './Course';


class Courses extends Component {

    deleteCourse(id) {
        this.props.mutate({
                variables: {
                    id: id
                }}).then(() => this.props.data.refetch())
        };
    
        renderCourses() {
            return this.props.data.Courses.map(course => {
                return (
                    <li key={course.id}> 
                        <Link to={`/course/${course.id}`}> {course.title} </Link>
                        <div onClick={() => this.deleteCourse(course.id)}>DEL</div>
                    </li>
                )
            })
        };


    render() {
        if (this.props.data.loading) { return <div>Loading..</div> }
        return (
            <div>
                <ul>
                    {this.renderCourses()}
                </ul>
                <Link to="/create">Create Course</Link>
            </div>
        )
    }
}

export default graphql(DELETE_COURSE) (
graphql(ALL_COURSES)(Courses)
);


