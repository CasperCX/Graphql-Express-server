const db = require("./db");

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



module.exports = { getCourse, getCourses, updateCourseTopic };