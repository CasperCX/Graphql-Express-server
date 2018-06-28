import React , { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { CREATE_COURSE, LIKE_COURSE } from '../Mutations/courseMutations';
import { ALL_COURSES } from '../Queries/courseQueries';


class Test extends Component {
    constructor(props) {
        super(props);
        this.state = { title: '', author: '' }
    }

    onSubmit(e) {
        console.log("clicked onsubmist");
        e.preventDefault();
        this.props.createCourse({
            variables: {
                title: this.state.title,
                author: this.state.author
            }}
        )
    }

    handleLike(id) {
        this.props.likeCourse({
            variables: {
                id: id
            }
        })
    };
        

    renderCourses() {
        return this.props.data.Courses.map(course => {
            return (
                <li key={course.id}> 
                    <div onClick={() => this.handleLike(course.id)}>{course.title} {course.likes}</div>
                </li>
                )
            })
        };



    render() {
       
        if (this.props.data.loading) { return <div>Loading..</div> }
        console.log(this.props);
        return (
            <div>
                <form onClick={this.onSubmit.bind(this)}>
                <input 
                    value={this.state.title}
                    type="text"
                    placeholder="title"
                    onChange={e => this.setState({ title: e.target.value })} />
                <input 
                    value={this.state.author}
                    type="text"
                    placeholder="author"
                    onChange={e => this.setState({ author: e.target.value })} />
                <button type="submit" />
            </form>
                <ul>
                    {this.renderCourses()}
                </ul>
            </div>
        )
    }
}



export default compose(
    graphql(ALL_COURSES, { name: 'data' }),
    graphql(LIKE_COURSE, { options: { refetchQueries: [{query: ALL_COURSES}] }, name: 'likeCourse'}),
    graphql(CREATE_COURSE, { options: { refetchQueries: [{query: ALL_COURSES}] }, name: 'createCourse'})
  )(Test);

   



  

//   graphql(fetchSongQuery, {
//     options: props => ({
//         variables: {
//             id: props.params.id,
//         },
//     }),
// }),
  


//   export default graphql(LIKE_COURSE) (
//         graphql(CREATE_COURSE) (
//         graphql(ALL_COURSES)(Test)
//     )
// );

