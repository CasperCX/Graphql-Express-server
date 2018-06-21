import React, {Component} from 'react';
import { runQuery } from 'apollo-server-core';
import { withApollo } from 'react-apollo';
import { GET_COURSE } from '../Queries/courseQueries';

// class ClickQuery extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             data: 'not clicked'
//         }
//     }

//     runQuery() {
//         console.log("clciekd");
        // try {
        //     const recieved_data = await this.props.client.query({
        //         query: GET_COURSE,
        //         variables: { id: 1 }});
        //         console.log("recieved data:", recieved_data);
        //         this.setState({data: recieved_data})
        // } catch (err) {
        //     console.log("failed to recieve awaited data");
        // }


//         this.props.client.query({
//             query: GET_COURSE,
//             variables: {id: 1}
//         });
//     }
     

//     render() {
//             if (this.props.data.loading) {
//                 return (
//                     <p>Loading data....</p>
//                 );
//             } else {
//                 return (
//                     <div>
//                         {this.props.data.course}
//                         <button onClick={this.runQuery}>load results</button>
//                         {this.state.data}
//                     </div>
//                 );
//             }
//         }
//     };



// export default withApollo(ClickQuery);


// async runQuery() {
//     const data = await this.props.client.query({
//         query: GET_COURSE,
//         variables: { passedid: 1 }
//     }).then(({data, errors}) => {
//         return data;
//         })
//     };
 