import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import { GET_IMAGE, ALL_COURSES } from '../Queries/courseQueries';

//HOC graphql test
class CourseImage extends Component{
    render() {
            if (this.props.data.loading) {
                console.log("loading", this.props.data);
                return <div>Loading....</div>
            } else {
                console.log(this.props.data);
                return <p></p>
            
            }    
        }
    };


export default graphql(GET_IMAGE, {
    options: (props) => ({variables: {id: 1} }) })(CourseImage);

        
// export default graphql(QueryTodos, {
//     options: (props) => ({ variables: { userId: props.userId } })
//   })( Home );