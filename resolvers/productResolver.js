//FAKE LIVE DB
const db = require("../db");

//TODO
//Here resolve query with: Knex, Sequelize on SQL DB , or Mongoose for mongoDB
const resolvers = {
    Query: {
        allCourses: () => {
            return db;
        },
        course: (root, {id}) => {
            return db.filter(course => {
                return course.id === id;
            })[0]
        },
        courseImage: (root, {id}) => {
            return db.filter(course => {
                return course.id === id;
            })[0]
       }
    }
};

// export default resolvers;
module.exports = resolvers;