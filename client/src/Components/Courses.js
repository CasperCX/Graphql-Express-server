import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';
import { ALL_COURSES } from '../Queries/courseQueries';
import Course from './Course';
// import ClickQuery from './ClickQuery';


class Courses extends Component {
    render() {
        return (
            <div>
                <div>
                    <Query query={ALL_COURSES}>
                        {({ loading, error, data }) => {
                            if (loading) return <p>Loading...</p>;
                            if (error) return <p>Error :(</p>;

                            return data.allCourses.map((course) => (
                                <li key={course.id}>
                                    <Link to={`/course/${course.id}`}> {course.title} </Link>
                                </li>
                            ));
                            }}
                        </Query>
                </div>
                <div>
                    <Link to="/create">Create Course</Link>
                </div>
            </div>
            );
    }

}

export default Courses;


