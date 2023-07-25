# MVC-CRUD_with_nodejs_and_mysql


**Introduction**

This is a simple CRUD (Create, Read, Update, Delete) application built using Node.js and MySQL. The project follows the MVC (Model-View-Controller) architectural pattern to organize the codebase, making it easier to manage and maintain.

**Features**

Create, Read, Update, and Delete operations on a MySQL database.
Follows the MVC pattern for a structured project organization.
Express.js framework for handling HTTP requests and routes.
MySQL database for data storage.

**Requirements**

To run the Node.js MVC CRUD application, make sure you have the following installed on your machine:

Node.js (v12 or higher)
npm (Node Package Manager)
MySQL Server (local or remote)
Installation
Clone the repository to your local machine:

bash
Copy code
git clone <https://github.com/DilipKumarSuna/MVC-CRUD_with_nodejs_and_mysql.git>
Install the required dependencies:

bash
Copy code
cd nodejs-mvc-crud
npm install
Configure the MySQL database:

Create a new database and import the database.sql file included in the project to set up the required table.
Update database credentials:

In the config/db.js file, replace the placeholder values with your MySQL database credentials.
Usage
To start the Node.js application, run the following command:

bash
Copy code
npm start
The server will start running at http://localhost:3000.

**MVC Structure**

The project follows the MVC (Model-View-Controller) pattern, which separates the application into three components:

Models: Responsible for handling data and database interactions.
Views: Display templates that render data and user interface.
Controllers: Handle incoming requests, process data, and interact with models and views.
API Endpoints
The CRUD operations can be accessed through the following API endpoints:

GET /: Home page, displays a list of all items.
GET /item/:id: View details of a specific item.
POST /item: Create a new item.
PUT /item/:id: Update an existing item.
DELETE /item/:id: Delete an item.

**Contributing**

Contributions to the Node.js MVC CRUD project are welcome! If you find any bugs or have ideas for improvements, feel free to open an issue or submit a pull request.

**Credits**

The Node.js MVC CRUD application was developed by Dilip Kumar Suna.
