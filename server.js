const express = require("express");
const cors = require('cors');
// const express_graphql = require("express-graphql");
// const { buildSchema } = require("graphql");
const config = require("./config/config");
const { getCourse, getCourses, updateCourseTopic } = require('./resolvers');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const bodyParser = require("body-parser");
const schema  = require("./schemas/productSchema");

const app = express();


app.use(cors());
app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql'
}));


app.use('/graphql', bodyParser.json(), graphqlExpress({
    schema
}));

app.listen(config.PORT, () => {
    console.log(`Graphql server is running on port: ${config.PORT}`);
});

