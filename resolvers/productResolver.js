
//FAKE LIVE DB
const db = require("../db");
const path = require("path");
// const Promise = require('bluebird');
//LOCAL DB 
// const sqlite = require('sqlite');
const sqlite3 = require('sqlite3').verbose();
const db_path = path.resolve(__dirname, "courses.db");

// const dbPromise = sqlite.open(db_path, { Promise });
//TODO
//Here resolve query with: Knex, Sequelize on SQL DB , or Mongoose for mongoDB
const resolvers = {
    Query: {
        allCourses: () => {
            return db;
            // let db3 = new sqlite3.Database(db_path);
            
            // db3.all("SELECT * FROM Courses", (err, rows) => {
            //     if(err) {
            //         console.log(err);
            //     } else {
            //         return rows;
            //     }
            // });
          
            // db3.close();
        },
  
        async course(root, {id}) {
            const db3 = await dbPromise;
            let results = [];
            // let db2 = new sqlite3.Database(db_path);
            // db2.get(`SELECT * FROM Courses WHERE id  = ?`, [id], (err, row) => {
            //     if (err) {
            //         db2.close();
            //         return console.error(err.message);
            //     } else {
            //         results.unshift(row);
            //         console.log(results);
            //         db2.close();
            //         return results;
            //     }
            //   });
            try {
                const fetchresults = await db3.get(`SELECT * FROM Courses WHERE id  = ?`, id)
                results.unshift(fetchresults);
                console.log(typeof results, results);
                return results;
            } catch(err) {
                console.log(err);
            }
        },

        courseImage: (root, {id}) => {
            return db.filter(course => {
                return course.id === id;
            })[0]
       }
    },
    Mutation: {
        async createCourse(root, {title, author}) {
            let db3 = new sqlite3.Database(db_path);
                try {
                    // const createcourse = await db3.run(`INSERT INTO Courses VALUES(NULL, ${title}, ${author}, ?, ?, ?`);
                    const createcourse = db3.prepare(`INSERT into Courses VALUES(?, ?, ?, ?, ?, ?);`);
                    createcourse.run(null, title, author, "test", "test", "test");
                    return createcourse;
                } catch(err) {
                    console.log(err);
                }
            db3.close();
        }
    }
};


// export default resolvers;
module.exports = resolvers;





 

 
// let sql = `SELECT DISTINCT Name name FROM playlists
//            ORDER BY name`;
 
// db.all(sql, [], (err, rows) => {
//   if (err) {
//     throw err;
//   }
//   rows.forEach((row) => {
//     console.log(row.name);
//   });
// });
 
// close the database connection
// db.close();