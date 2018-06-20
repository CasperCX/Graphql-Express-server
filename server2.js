import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress } from 'apollo-server-express';
import config from './config/config';


const app = express();


app.use('graphql', bodyParser.json(), graphqlExpress({}));

app.listen(config.PORT, () => {
    console.log(`Graphql server is running on port: ${config.PORT}`);
});
