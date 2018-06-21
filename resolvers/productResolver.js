const db = require("../db");

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
            console.log("recieved:", id);
            return db.filter(course => {
                return course.id === id;
            })[0]
       }
    }
};

// export default resolvers;
module.exports = resolvers;