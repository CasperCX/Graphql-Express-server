import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import { GET_IMAGE, ALL_COURSES, GET_COURSE } from '../Queries/courseQueries';

//HOC graphql test
class CourseImage extends Component{
    render() {
            if (this.props.data.loading) {
                console.log("loading", this.props.data.course);
                return <div>Loading....</div>
            } else {
                console.log("data.course", this.props.data);
                return <p>{this.props.data.course}</p>
            
            }    
        }
    };


export default graphql(GET_COURSE, {
    options: (props) => ({variables: {id: 2} }) })(CourseImage);

