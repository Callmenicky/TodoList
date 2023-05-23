using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Todolist.Controllers;
using Todolist.Models;
using Xunit;

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
            // Arrange

            // Act
            var result = await _controller.GetTodo();

            // Assert
            Assert.IsType<ActionResult<IEnumerable<Todo>>>(result);
            Assert.NotNull(result.Value);
            Assert.Equal(0, result.Value.Count());
            Assert.IsType<OkObjectResult>(result.Result);
        }

        [Fact]
        public async Task GetTodo_WithExistingId_ReturnsOkResult()
        {
            // Arrange
            var todo = new Todo { ID = 1, Name = "Test Todo" };
            _context.Todolist.Add(todo);
            await _context.SaveChangesAsync();

            // Act
            var result = await _controller.GetTodo();

            // Assert
            Assert.IsType<ActionResult<IEnumerable<Todo>>>(result);
            Assert.NotNull(result.Value);
            Assert.Equal(1, result.Value.Count());
            Assert.IsType<OkObjectResult>(result.Result);
        }

        [Fact]
        public async Task GetTodo_WithInvalidId_ReturnsNotFoundResult()
        {
            // Arrange

            // Act
            var result = await _controller.GetTodo(1);

            // Assert
            Assert.IsType<ActionResult<Todo>>(result);
            Assert.IsType<NotFoundResult>(result.Result);
        }

        // Add more test cases for other actions

        [Fact]
        public async Task SortTodo_ReturnsSortedTodoList()
        {
            // Arrange
            var todo1 = new Todo { ID = 1, Name = "Task B", Priority = "Medium" };
            var todo2 = new Todo { ID = 2, Name = "Task A", Priority = "High" };
            var todo3 = new Todo { ID = 3, Name = "Task C", Priority = "Low" };
            _context.Todolist.AddRange(todo1, todo2, todo3);
            await _context.SaveChangesAsync();

            // Act
            var result = await _controller.SortTodo("name");

            // Assert
            Assert.IsType<ActionResult<IEnumerable<Todo>>>(result);
            Assert.NotNull(result.Value);
            Assert.Equal(3, result.Value.Count());
            Assert.Equal("Task A", result.Value.First().Name);
            Assert.Equal("Task C", result.Value.Last().Name);
        }

        [Fact]
        public async Task FilterTodoList_ReturnsFilteredTodoList()
        {
            // Arrange
            var todo1 = new Todo { ID = 1, Name = "Task 1", Description = "Test task", Priority = "High" };
            var todo2 = new Todo { ID = 2, Name = "Task 2", Description = "Another task", Priority = "Medium" };
            var todo3 = new Todo { ID = 3, Name = "Task 3", Description = "Extra task", Priority = "Low" };
            _context.Todolist.AddRange(todo1, todo2, todo3);
            await _context.SaveChangesAsync();

            // Act
            var result = await _controller.FilterTodoList("test");

            // Assert
            Assert.IsType<ActionResult<IEnumerable<Todo>>>(result);
            Assert.NotNull(result.Value);
            Assert.Single(result.Value);
            Assert.Equal("Task 1", result.Value.First().Name);
        }
    }
}
