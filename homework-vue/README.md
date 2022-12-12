# Homework 4

Before starting, you have to create a PostgreSQL database on your computer.

If you don't want to change anything in Node files, then create a database "testwad" with user "postgres" and password "postgres". Make sure your database is located on localhost:5432.

If you already have a database with other values, you can assign them in the /homework-node/database.js file's lines 3-7. Make sure your database does not have tables named "users" and "posts" or that they have the same format as specified in the end of that database.js file.

### Database info (database.js lines 3-7)
```
user: "postgres",
password: "postgres",
database: "testwad",
host: "localhost",
port: "5432"
```

### Start Node
```
cd homework-node
npm install
node server
```

### Start Vue
```
cd homework-vue
npm install
npm run serve
```
