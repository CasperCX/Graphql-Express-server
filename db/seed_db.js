const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database('./db/courses.sqlite');

//CREATE SQLITE3 TABLE
  db.run("CREATE TABLE if not exists Courses (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, author TEXT, description TEXT, topic TEXT, url TEXT, likes INTEGER)", function(err)
    {
      if (err) throw err;
    });

//INSERT VALUES INTO TABLE
  db.run('INSERT INTO Courses (id, title, author, description, topic, url, likes) VALUES (?, ?, ?, ?, ?, ?, ?)', 1, `The Complete Node.js Developer Course`, `Andrew Mead, Rob Percival`, `Learn Node.js by building real-world applications with Node, Express, MongoDB, Mocha, and more!`, `Node.js`, `https://codingthesmartway.com/courses/nodejs/`, 1, function(err)    
    {
      if (err) console.log("cant insert into record 1");
    });

  db.run('INSERT INTO Courses (id, title, author, description, topic, url, likes) VALUES (?, ?, ?, ?, ?, ?, ?)', 2, 'Node.js, Express & MongoDB Dev to Deployment', `Brad Traversy`, `Learn by example building & deploying real-world Node.js applications from absolute scratch`, `Node.js`, `https://codingthesmartway.com/courses/nodejs-express-mongodb/`, 1, function(err)    
  {
    if (err) console.log("cant insert into record 2");
  });

  db.run('INSERT INTO Courses (id, title, author, description, topic, url, likes) VALUES (?, ?, ?, ?, ?, ?, ?)', 3, `JavaScript: Understanding The Weird Parts`, `Anthony Alicea`, `An advanced JavaScript course for everyone! Scope, closures, prototypes, this, build your own framework, and more`, 'Javascript', `https://codingthesmartway.com/courses/understand-javascript/`, 1, function(err)    
  {
    if (err) console.log("cant insert into record 3");
  });
 
  
console.log("successfully seeded");
db.close();