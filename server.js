const express = require("express");
const express_graphql = require("express-graphql");
const { buildSchema } = require("graphql");
const config = require("./config/config");
const { getCourse, getCourses, updateCourseTopic } = require('./resolvers');

const app = express();

//GraphQL schema
const schema = buildSchema(`
    type Query {
        course(id: Int!): Course
        courses(topic: String): [Course]
    }
    type Mutation {
        updateCourseTopic(id: Int!, topic: String!): Course
    }
    type Course {
        id: Int,
        title: String,
        author: String,
        description: String,
        topic: String,
        url: String
    }
`);


//Root resolver
const root = {
    course: getCourse,
    courses: getCourses,
    updateCourseTopic: updateCourseTopic

};

app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(config.PORT, () => {
    console.log(`Graphql server is running on port: ${config.PORT}`);
});


//MUTATION EXAMPLE
// mutation updateCourseTopic($id: Int!, $topic: String!) {
//     updateCourseTopic(id:$id, topic: $topic) {
//       ...courseFields
//     }
//   }
//   fragment courseFields on Course {
//     title
//     author
//       description
//     url
//     topic
//   }