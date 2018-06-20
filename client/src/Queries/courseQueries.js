import gql from 'graphql-tag';

export const ALL_COURSES = gql`
    {
        allCourses {
            id
            title
            author
            }
        }
    `;

