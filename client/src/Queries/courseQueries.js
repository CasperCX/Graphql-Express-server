import gql from 'graphql-tag';

export const ALL_COURSES = gql`
    {
        Courses {
            id
            title
            author
            likes
            }
        }
    `;

export const GET_COURSE = gql`
    query getCourse($id: Int!) {
        course(id: $id) {
            id
            title
            author
            }
        }
    `;

export const GET_IMAGE = gql`
        query GetImage($id: Int!) {
            course(id: $id) {
            url
            }
        }
    `;

   

  

    //   export const GET_IMAGE = gql`
    //   {
    //       courseImage(id: id) {
    //           id
    //           url
    //           }
    //       }
    //   `;
