# CTF
CTF Web and App Task - 1 (Backend)

Database: MySQL
Backend: NodeJS, Express

Database name: Samp
2 tables 'ADMIN' and 'USER' are created. 
'ADMIN' table takes care of signing upp and login processes. Only admins will be able to do CRUD operations on users.
'USER' table contains 3 fields - ID Integer PrimaryKey, Name String, CreatedAt Timestamp

All the routes for USER are protected with Authorization done using JWT where the token issued is used as headers in other API calls.
check-auth.js file in middleware folder
models folder contains all the files for routes and CRUD operations.
config folder is used for configuring MySQL database.

# HOW TO RUN?
Go to 'models' folder and run node db.js first to setup database connection
Then, run node server.js (server.js is present in root directory)
