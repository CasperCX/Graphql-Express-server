import React from 'react';
import { Query } from 'react-apollo';
import { ALL_COURSES } from '../Queries/courseQueries';

const Courses = () => (
    <Query query={ALL_COURSES}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;

            return data.allCourses.map(({ id, title, author }) => (
                <div key={id}>
                <p>{`${title}: ${author}`}</p>
                </div>
            ));
            }}
        </Query>
    );

export default Courses;