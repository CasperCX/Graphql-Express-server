const express = require("express");
const express_graphql = require("express-graphql");
const { buildSchema } = require("graphql");
const config = require("./config/config");
const app = express();

//GraphQL schema
const schema = buildSchema(`
    type Query {
        course(id: Int!): Course
        courses(topic: String): [Course]
    }
    type Course {
        id: Int,
        title: String,
        author: String,
        topic: String
    }
`);

//Root resolver
const root = {
    message: () => 'Hello world'
};


app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(config.PORT, () => {
    console.log(`Graphql server is running on port: ${config.PORT}`);
});