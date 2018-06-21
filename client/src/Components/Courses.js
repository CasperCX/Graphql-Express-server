import React from 'react';
import { Query } from 'react-apollo';
import { ALL_COURSES } from '../Queries/courseQueries';
import Course from './Course';
// import ClickQuery from './ClickQuery';
import CourseImage from './CourseImage';

const Courses = () => (
    <div>
        <div>
            <Query query={ALL_COURSES}>
                {({ loading, error, data }) => {
                    if (loading) return <p>Loading...</p>;
                    if (error) return <p>Error :(</p>;

                    return data.allCourses.map((course) => (
                        <Course course={course} />
                    ));
                    }}
                </Query>
        </div>
        <div>

            <CourseImage />
        </div>
    </div>
    );

export default Courses;


