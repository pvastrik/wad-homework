const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",
    password: "veebirakendused",
    database: "testwad",
    host: "localhost",
    port: "5432"
});

const execute = async(query) => {
    try {
        await pool.connect(); // gets connection
        await pool.query(query); // sends queries
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    }
}

const createPostTblQuery = `
    CREATE TABLE IF NOT EXISTS "posts" (
	    "id" SERIAL PRIMARY KEY,         
	    "date" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	    "body" VARCHAR(200) NOT NULL,
        "userid" SERIAL NOT NULL
    );`;

const createUserTblQuery = `
    CREATE TABLE IF NOT EXISTS "users" (
	    "id" SERIAL PRIMARY KEY,         
	    "name" VARCHAR(200) NOT NULL,
	    "password" VARCHAR(200) NOT NULL,
        "email" VARCHAR(200)  NOT NULL UNIQUE
    );`;
// A function to execute the previous query
execute(createPostTblQuery).then(result => {
    if (result) {
        console.log('created the "posts" table');
    }

});

// A function to execute the previous query
execute(createUserTblQuery).then(result => {
    if (result) {
        console.log('created the "users" table');
    }
});


module.exports = pool;