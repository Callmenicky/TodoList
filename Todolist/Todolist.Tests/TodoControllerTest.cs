using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.InMemory;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Todolist.Controllers;
using Todolist.Models;
using Xunit;
using Xunit.Abstractions;

namespace Todolist.Tests.Controllers
{
    public class TodoControllerTests
    {
        private readonly TodoController _controller;
        private readonly TodoContext _context;

        public TodoControllerTests()
        {
            var options = new DbContextOptionsBuilder<TodoContext>()
                .UseInMemoryDatabase(databaseName: "TodoDatabase")
                .Options;

            _context = new TodoContext(options);
            _controller = new TodoController(_context);
        }

        [Fact]
        public async Task GetTodo_ReturnsOkResult()
        {
            var todo1 = new Todo { ID = 1, Name = "Task 1", Description = "Test task", Priority = "High", Status = "Pending" };
            var todo2 = new Todo { ID = 2, Name = "Task 2", Description = "Another task", Priority = "Medium", Status = "Completed" };

            _context.Todolist.AddRange(todo1, todo2);
            await _context.SaveChangesAsync();

            // Act
            var result = await _controller.GetTodo();

            // Assert
            var okObjectResult = Assert.IsType<OkObjectResult>(result.Result);
            var todos = Assert.IsAssignableFrom<IEnumerable<Todo>>(okObjectResult.Value);

            Assert.NotNull(todos);
            Assert.Equal(2, todos.Count());

            // Delete the objects
            _context.Todolist.RemoveRange(todo1, todo2);
            await _context.SaveChangesAsync();
        }


        [Fact]
        public async Task GetTodo_WithExistingId_ReturnsOkResult()
        {
            var todo1 = new Todo { ID = 1, Name = "Task 1", Description = "Test task", Priority = "High", Status = "Pending" };

            _context.Todolist.AddRange(todo1);
            await _context.SaveChangesAsync();

            // Act
            var result = await _controller.GetTodo(1);

            // Assert
            var okObjectResult = Assert.IsType<OkObjectResult>(result.Result);
            var todos = Assert.IsAssignableFrom<Todo>(okObjectResult.Value);

            Assert.NotNull(todos);
            Assert.Equal("Task 1", todos.Name);

            // Delete the objects
            _context.Todolist.RemoveRange(todo1);
            await _context.SaveChangesAsync();
        }


        [Fact]
        public async Task GetTodo_WithInvalidId_ReturnsNotFoundResult()
        {
            // Arrange

            // Act
            var result = await _controller.GetTodo(25);

            // Assert
            Assert.IsType<ActionResult<Todo>>(result);
            Assert.IsType<NotFoundResult>(result.Result);
        }


        // Add more test cases for other actions

        [Fact]
        public async Task SortTodo_ReturnsSortedTodoList()
        {
            // Arrange
            var todo3 = new Todo { ID = 3, Name = "Task 3", Description = "Yet another task", Priority = "Low", Status = "Pending" };
            var todo4 = new Todo { ID = 4, Name = "Task 4", Description = "Sample description", Priority = "High", Status = "Completed" };
            var todo5 = new Todo { ID = 5, Name = "Task 5", Description = "Additional task", Priority = "Medium", Status = "Pending" };

            _context.Todolist.AddRange(todo4, todo3, todo5);
            await _context.SaveChangesAsync();

            // Act
            var result = await _controller.SortTodo("priority");

            // Assert
            Assert.IsType<ActionResult<IEnumerable<Todo>>>(result);
            Assert.NotNull(result.Value);
            Assert.Equal(3, result.Value.Count());
            Assert.Equal("Task 4", result.Value.First().Name);
            Assert.Equal("Task 3", result.Value.Last().Name);

            // Delete the objects
            _context.Todolist.RemoveRange(todo4, todo5, todo3);
            await _context.SaveChangesAsync();
        }

        [Fact]
        public async Task FilterTodoList_ReturnsFilteredTodoList()
        {
            // Arrange
            var todo6 = new Todo { ID = 6, Name = "Task 6", Description = "New task", Priority = "Low", Status = "Completed" };
            var todo7 = new Todo { ID = 7, Name = "Task 7", Description = "Important task", Priority = "High", Status = "Pending" };
            var todo8 = new Todo { ID = 8, Name = "Task 8", Description = "Urgent task", Priority = "Very High", Status = "Pending" };


            _context.Todolist.AddRange(todo6, todo7, todo8);
            await _context.SaveChangesAsync();

            // Act
            var result = await _controller.FilterTodoList("Task 7");

            // Assert
            Assert.IsType<ActionResult<IEnumerable<Todo>>>(result);
            Assert.NotNull(result.Value);
            Assert.Single(result.Value); // Expecting 1 result

            // Delete the objects
            _context.Todolist.RemoveRange(todo6, todo7, todo8);
            await _context.SaveChangesAsync();
        }
    }
}
