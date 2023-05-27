# **TODO List Web Application**

This is a scalable and well-designed TODO list web application that allows users to manage their TODOs. It provides a full stack solution with a backend API developed in C# using ASP.NET Core and a frontend user interface built with React. The application demonstrates full stack development skills, API design expertise, and software engineering best practices.

## Features
+ TODOs CRUD operations (Create, Read, Update, Delete)
+ Filtering TODOs by status and due date
+ Sorting TODOs by due date, status, and name
+ Responsive user interface for managing TODOs

## Application Functions
The TodoList application provides several functions to help users effectively manage their tasks and stay organized. Here are the main functions available:

+ **Create a TODO:** 
    + Users can easily create new tasks by providing a name, description, due date, and status. 
    + This allows users to capture and organize their tasks in a structured manner.

+ **View TODOs:** 
    + Users can view all their existing tasks in a list format. Each task is displayed with its relevant details, including the name, description, due date, and current status. 
    + This provides users with an overview of their tasks and their corresponding deadlines.

+ **Update a TODO:**
    + Users have the ability to update the details of their tasks. They can modify the name, description, due date, and status of a task to reflect any changes or progress made.
    +  This allows for flexibility in managing and adapting tasks as needed.

+ **Delete a TODO:**
    + If a task is no longer relevant or completed, users can easily delete it from their list. 
    + This helps keep the task list clean and focused on active tasks, reducing clutter and improving organization.

+ **Sort TODOs:** 
    + Users can sort their tasks based on specific criteria such as name, priority, or due date. 
    + This enables users to prioritize their tasks effectively and focus on the most important or time-sensitive ones.

+ **Filter TODOs:** 
    + The application offers a filtering feature that allows users to search for specific tasks based on keywords. 
    + Users can enter a keyword, and the application will filter the tasks accordingly, displaying only the tasks that match the search criteria. This helps users quickly find relevant tasks based on their specific needs.

+ **Additional Features:**
    + The TodoList application also provides additional features to enhance task management and collaboration. 
    + These may include assigning priorities to tasks and responsive user interface for managing TODOs.

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
