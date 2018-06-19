const express = require("express");
const express_graphql = require("express-graphql");
const { buildSchema } = require("graphql");
const config = require("./config/config");
const db = require("./db");
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


const getCourse = (args) => {
    let id = args.id;
    return db.filter(course => {
        return course.id == id;
    })[0]
};

const getCourses = (args) => {
    if (args.topic) {
        let topic = args.topic;
        return db.filter(course => {
            return course.topic === topic
        })
    } else {
        return db;
    }
};

const updateCourseTopic = ({id, topic}) => {
    if (id && topic) {
        db.map(course => {
            if (course.id === id) {
                course.topic = topic;
                return course;
            }
        });
    } else {
        return db;
    }
    return db.filter(course => {
        return course.id == id;
    })[0];
};

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