import React , { Component } from 'react';
import { graphql }  from 'react-apollo';
import { GET_COURSE } from '../Queries/courseQueries';

class CourseDetail extends Component {
    constructor(props) {
        super(props);
    }

    renderresults() {
        console.log("Course detail props: ", this.props.data);
        console.log("params id:", this.props.match);
    };

    render() {
        return (
                <div>{this.renderresults()}</div>
            )
        }
    };


    export default graphql(GET_COURSE, {
        options: (props) => { return { variables: { id: props.match.params.id }} }
    })(CourseDetail);