# TodoList Backend

This repository contains the backend implementation of the TodoList application built using ASP.NET Core. The backend consists of the TodoController, which provides API endpoints to manage todo items.

## TodoController

The `TodoController` is responsible for handling CRUD operations for todo items. It exposes the following API endpoints:

- `GET /api/todo`: Retrieves all todo items from the database.
- `GET /api/todo/{id}`: Retrieves a specific todo item by its ID.
- `POST /api/todo`: Creates a new todo item.
- `PUT /api/todo/{id}`: Updates an existing todo item.
- `DELETE /api/todo/{id}`: Deletes a todo item.
- `GET /api/todo/sort/{sortBy}`: Retrieves the sorted list of todo items based on the specified sorting criteria.
- `GET /api/todo/filter?keyword={keyword}`: Retrieves the filtered list of todo items based on the specified keyword.

## TodoControllerTests

The `TodoControllerTests` class contains a set of unit tests written using the xUnit testing framework. These tests ensure the correctness of the `TodoController` and cover various scenarios and actions within the controller.

The test methods included in the `TodoControllerTests` class are as follows:

- `GetTodo_ReturnsOkResult`: Verifies the behavior of the `GetTodo` action in the `TodoController` when it returns a successful result (HTTP 200 OK).
- `GetTodo_WithExistingId_ReturnsOkResult`: Verifies the behavior of the `GetTodo` action in the `TodoController` when called with a valid Todo ID.
- `GetTodo_WithInvalidId_ReturnsNotFoundResult`: Verifies the behavior of the `GetTodo` action in the `TodoController` when called with an invalid Todo ID.
- `SortTodo_ReturnsSortedTodoList`: Verifies the behavior of the `SortTodo` action in the `TodoController` when sorting the Todo list based on priority.
- `FilterTodoList_ReturnsFilteredTodoList`: Verifies the behavior of the `FilterTodoList` action in the `TodoController` when filtering the Todo list based on a search term.

To run the tests:

1. Set up the necessary dependencies and configure the test environment.
2. Execute the tests using a testing framework or the `dotnet test` command.

## Prerequisites

To run the TodoList backend, you need the following prerequisites:

- [.NET Core SDK](https://dotnet.microsoft.com/download) installed on your machine.
- An SQL Server or an in-memory database configured for the TodoContext.

## Getting Started

To get started with the TodoList backend:

1. Clone this repository to your local machine.
2. Configure the database connection in the `appsettings.json` file.
3. Build the project using the `dotnet build` command.
4. Run the application using the `dotnet run` command.

## Contributing

Contributions are welcome! If you find any issues or want to add new features, feel free to submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

Special thanks to the contributors and open-source projects that provided inspiration and support for this TodoList backend.
