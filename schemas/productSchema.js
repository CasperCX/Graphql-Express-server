const { makeExecutableSchema } = require("graphql-tools");
const resolvers = require("../resolvers/productResolver");

const typeDefs = [`
    type Course {
        id: Int
        title: String
        author: String
        description: String
        topic: String
        url: String
    }
    type Query {
        allCourses: [Course]
        course(id: Int!): Course
    }
`];

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

// export default schema;
module.exports = schema;
