# **TODO List Web Application**

This is a scalable and well-designed TODO list web application that allows users to manage their TODOs. It provides a full stack solution with a backend API developed in C# using ASP.NET Core and a frontend user interface built with React. The application demonstrates full stack development skills, API design expertise, and software engineering best practices.

## Features
+ TODOs CRUD operations (Create, Read, Update, Delete)
+ Filtering TODOs by status and due date
+ Sorting TODOs by due date, status, and name
+ Responsive user interface for managing TODOs


## Nice-to-have Features
+ Additional attributes for each TODO, such as priority and tags
+ User authentication and registration
+ Team features including authorization and real-time collaboration
+ DevOps integration with CI/CD pipeline, Docker, and Kubernetes
+ Architecture diagram

## Technical Design
+ Adheres to SOLID principles
+ Developed using Test-Driven Development (TDD)
+ Ensures code and design consistency

## Database
The application uses SQL Server as the database to store TODOs and user data.

## Prerequisites
Before running the TODO list web application, ensure the following prerequisites are met:

+ ASP.NET Core SDK installed on your machine
+ SQL Server installed and configured
+ Node.js installed on your machine (for frontend dependencies)


## Getting Started
To set up and run the TODO list web application, follow these steps:

### Clone the GitHub repository to your local machine: 
    
    git clone https://github.com/your-username/todo-list-webapp.git
    

### Navigate to the project's root directory:

    cd todo-list-webapp


### Configure the database connection:

+ Open the appsettings.json file in the backend project.
+ Update the connection string with your SQL Server details.

### Install backend dependencies:

- Open a terminal and navigate to the backend project's directory:
        
        cd backend
        
- Restore the backend dependencies:

        dotnet restore

### Run the database migrations:

        dotnet ef database update

### Install frontend dependencies:

- Open a new terminal and navigate to the frontend project's directory:

        cd ../frontend
        
- Install the frontend dependencies:

        npm install

### Build and run the application:
- Open a terminal and navigate back to the backend project's directory:

        cd ../backend

- Build and run the backend API:

        dotnet run

- Open a new terminal and navigate to the frontend project's directory:

        cd ../frontend


- Start the frontend development server:

        npm start

### Access the TODO list web application:
- Open your web browser and visit http://localhost:3000 to access the application.

## API Documentation
The backend API provides the following endpoints:

+ **GET/api/todo** 
    + Retrieves all TODOs.

+ **GET /api/todo/{id}**
    + Retrieves a specific TODO by ID.

+ **POST /api/todo**
    + Creates a new TODO.

+ **PUT /api/todo/{id}**
   + Updates a specific TODO by ID.

+ **DELETE /api/todo/{id}**
    + Deletes a specific TODO by ID.

+ **GET /api/todo/sort/{sortBy}**
    + Sorts TODOs based on the specified parameter.
    + Available sort options: "name", "priority", "duedate"

+ **GET /api/todo/filter?keyword={keyword}**
    + Filters TODOs based on the specified keyword.


## License
This project is licensed under the MIT License.
