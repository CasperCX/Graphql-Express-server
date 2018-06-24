const path = require("path");
const db_path = path.resolve(__dirname, "../db/courses.sqlite");

var Knex = require('knex')({
    client: 'sqlite3',
    connection: {
      filename: db_path
    },
    useNullAsDefault: true
  });


const resolvers = {
    Query: {
        async allCourses () {
            try {
                const courses = await Knex('Courses');
                return courses   
            } catch(err) {
                console.log(err);
            }
        },
  
        async course (root, {id})  {
            try {
                const course = await Knex('Courses').where({ id: id });
                return course   
            } catch(err) {
                console.log(err);
            }
        },

        courseImage: (root, {id}) => {
            return [{}];
       }
    },
    Mutation: {
        async createCourse(root, {title, author, description, topic, url}) {
            try {
                const createdcourse = await Knex('Courses').insert({ 
                    id: null,
                    title: title ? "undefined" : title,
                    author: author ? "undefined" : author,
                    description: description ? "undefined" : description,
                    topic: topic ? "undefined" : topic,
                    url: url ? "undefined" : url
                 })
                 console.log(db_path);
                 console.log("created row");
            } catch(err) {
                console.log(err);
            } 
        }
    }
};


// export default resolvers;
module.exports = resolvers;





 

 
// let sql = `SELECT DISTINCT Name name FROM playlists
//            ORDER BY name`;
 
// db.all(sql, [], (err, coursess) => {
//   if (err) {
//     thcourses err;
//   }
//   coursess.forEach((courses) => {
//     console.log(courses.name);
//   });
// });
 
// close the database connection
// db.close();