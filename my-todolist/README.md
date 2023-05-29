# TodoList Frontend

This repository contains the frontend implementation of the TodoList application using React.js. The frontend consists of the CRUD component, which provides user interfaces to manage todo items.

## CRUD Component

The `CRUD` component is responsible for handling CRUD operations for todo items. It includes features such as creating a new task, editing an existing task, deleting a task, filtering tasks, and sorting tasks. The component uses various libraries and components, such as React Bootstrap, Axios, and React Toastify, to provide an enhanced user experience.

## Usage

1. Navigate to the project directory:
    ```shell
    cd <project-directory>
    ```

2. Install the dependencies:
    ```shell
    npm install
    ```

3. To start the Todolist application, run the following command in the project directory:
    ```shell
    npm start
    ```

4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to access the application.

## Features

### Add Task

To add a task to the Todolist:

1. Enter the name, description, due date, status, and priority of the task in the input fields.
2. Click the "Submit" button.
3. The task will be added to the Todolist, and you will receive a success notification.

### Edit Task

To edit a task in the Todolist:

1. Click the "Edit" button next to the task you want to edit.
2. Update the name, description, due date, status, or priority of the task in the modal that appears.
3. Click the "Save Changes" button.
4. The task will be updated in the Todolist, and you will receive a success notification.

### Delete Task

To delete a task from the Todolist:

1. Click the "Delete" button next to the task you want to delete.
2. Confirm the deletion when prompted.
3. The task will be deleted from the Todolist, and you will receive a success notification.

### Filter Tasks

To filter tasks in the Todolist:

1. Enter the filter criteria in the "Filter" input field.
2. Click the "Filter" button.
3. The Todolist will display only the tasks that match the filter criteria.

### Sort Tasks

To sort tasks in the Todolist:

1. Select a sorting option from the "Sort" dropdown.
2. Click the "Sort" button.
3. The Todolist will display the tasks sorted based on the selected sorting option.


### Dependencies

The TodoList frontend uses the following dependencies:

- React: A JavaScript library for building user interfaces.
- React Bootstrap: A UI library that provides pre-built Bootstrap components for React.
- Axios: A promise-based HTTP client for making API requests.
- React Toastify: A notification library for displaying success/error messages.

## Test Cases

The application includes a set of test cases implemented using the `@testing-library/react` library. These test cases ensure the correctness of the application's functionality.

### `CRUD.test.js`

This file contains the test cases for the CRUD functionality of the application. **Please be aware that the test cases are tested on example data in a duplicate component of CRUD2**. Let's analyze each test case:

1. **displays correct number of rows**: This test case verifies that the table in the application displays the correct number of rows. It counts the number of rows excluding the header row and expects the count to be 2.

2. **adds a new task**: This test case tests the functionality of adding a new task. It fills in the task details in the input fields, clicks the submit button, and then waits for the task to be added to the table. It asserts that the input fields are still present after the task is added.

3. **edits an existing task**: This test case tests the functionality of editing an existing task. It finds a specific task in the table based on its name, clicks the edit button to open the edit modal, modifies the task details in the modal, saves the changes, and then asserts that the updated task details are still present in the table.

4. **deletes a task**: This test case tests the functionality of deleting a task. It finds a specific task in the table based on its name, clicks the delete button, and then verifies that the deleted task is no longer present in the table while another task is still present.

These test cases cover the major CRUD operations of the application and ensure that the functionality is working as expected.

#### Testing Library

The tests are written using **React Testing Library**, which provides a set of utilities to interact with React components and assert their behavior. It focuses on testing the application from the user's perspective.

For more information on React Testing Library, refer to the [official documentation](https://testing-library.com/docs/react-testing-library/intro/).

#### Jest

**Jest** is a testing framework commonly used with React applications. It provides a simple and intuitive API for writing tests and comes with built-in features like mocking, assertions, and code coverage.

## Contributing

Contributions are welcome! If you find any issues or want to add new features, feel free to submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

Special thanks to the open-source projects and libraries that were used in building this TodoList frontend.
