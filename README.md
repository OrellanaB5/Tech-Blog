# Tech Blog

A CMS-style blog site where developers can publish their blog posts and comment on other developers' posts as well. Built with Node.js, Express, Sequelize, MySQL, and Handlebars.

## Features

- User authentication (login/signup with a username and password)
- Ability to create, edit, and delete posts
- Ability to comment on posts
- Session management with automatic logout after inactivity

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- MySQL

### Installing

Clone the repository then nnstall NPM packages with npm install

Create a .env file in the root directory and add the following:
DB_NAME='tech_blog_db'
DB_USER='your_mysql_username'
DB_PW='your_mysql_password'
DB_HOST='localhost' # or your database host
DB_SECRET='your_session_secret'

Run the schema.sql in the MySQL shell to create the database:
source db/schema.sql;

Seed the database:
npm run seed

Start the application:
npm start
