import React , { Component } from 'react';
import { graphql }  from 'react-apollo';
import { GET_COURSE } from '../Queries/courseQueries';

import { Query } from 'react-apollo';

class CourseDetail extends Component {


    renderresults() {
        console.log("Course detail props: ", this.props);
        console.log("params id:", this.props.match);
        
    };

    render() {
        return (
                <div>{this.renderresults()}</div>
            //     <div>
            //     <Query query={GET_COURSE} variables={{id: this.props.match.params.id}}>
            //         {({ loading, error, data }) => {
            //             if (loading) return <p>Loading...</p>;
            //             if (error) return <p>Error :(</p>;
                         
            //             return <p>{data.course.title}</p>
            //         }}
            //     </Query>
            //     {this.renderresults()}
            // </div>
            )
        }
    };


    export default graphql(GET_COURSE, {
        options: (props) => { return { variables: { id: props.match.params.id }} }
    })(CourseDetail);

    // export default(CourseDetail);