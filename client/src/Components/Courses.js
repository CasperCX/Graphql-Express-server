import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const Courses = () => (
    <Query query={gql`
    {
        allCourses {
            id
            title
            author
            }
        }
    `}>
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