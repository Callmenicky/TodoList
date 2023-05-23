using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Todolist.Models;

namespace Todolist.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodoController : ControllerBase
    {
        private readonly TodoContext _todoContext;

        public TodoController(TodoContext todoContext)
        {
            _todoContext = todoContext;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Todo>>> GetTodo()
        {
            if (_todoContext == null)
            {
                return NotFound();
            }

            return await _todoContext.Todolist.ToListAsync();

        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Todo>> GetTodo(int id)
        {
            if (_todoContext == null)
            {
                return NotFound();
            }
            var todo = _todoContext.Todolist.Find(id);
            if (todo == null)
            {
                return NotFound();
            }
            return todo;

        }

        [HttpPost]

        public async Task<ActionResult<Todo>> PostTodo(Todo todo)
        {
            _todoContext.Todolist.Add(todo);
            await _todoContext.SaveChangesAsync();

            return CreatedAtAction(nameof(GetTodo), new { id = todo.ID }, todo);

        }

        [HttpPut("{id}")]

        public async Task<ActionResult> PutTodo(int id, Todo todo)
        {
            if(id !=todo.ID)
            {
                return BadRequest();
            }

            _todoContext.Entry(todo).State = EntityState.Modified;
            try 
            {
                await _todoContext.SaveChangesAsync();
            }

            catch (DbUpdateConcurrencyException) 
            {
                throw;
            }

            return Ok();
        }

        [HttpDelete("{id}")]
        
        public async Task <ActionResult> DeleteTodo (int id)
        {
            if(_todoContext.Todolist == null)
            {
                return NotFound();
            }

            var todo = await _todoContext.Todolist.FindAsync(id);

            if(todo == null) 
            {
                return NotFound();
            }

            _todoContext.Todolist.Remove(todo);
            await _todoContext.SaveChangesAsync();

            return Ok();
        }

        [HttpGet("sort/{sortBy}")]
        public async Task<ActionResult<IEnumerable<Todo>>> SortTodo(string sortBy)
        {
            IQueryable<Todo> todoList = _todoContext.Todolist;

            switch (sortBy.ToLower())
            {
                case "name":
                    todoList = todoList.OrderBy(todo => todo.Name);
                    break;
                case "priority":
                    todoList = todoList.OrderBy(todo =>
                        todo.Priority == "Very High" ? 0 :
                        todo.Priority == "High" ? 1 :
                        todo.Priority == "Medium" ? 2 :
                        todo.Priority == "Low" ? 3 : 4
                    );
                    break;
                case "duedate":
                    todoList = todoList.OrderBy(todo => todo.Due_Date);
                    break;
                default:
                    return BadRequest("Invalid sort parameter.");
            }

            return await todoList.ToListAsync();
        }

        [HttpGet("filter")]
        public async Task<ActionResult<IEnumerable<Todo>>> FilterTodoList(string keyword)
        {
            if (string.IsNullOrWhiteSpace(keyword))
            {
                return BadRequest("Keyword parameter is required.");
            }

            IQueryable<Todo> todoList = _todoContext.Todolist;

            todoList = todoList.Where(todo =>
            todo.Name.ToLower().Contains(keyword.ToLower()) ||
            todo.Description.ToLower().Contains(keyword.ToLower()) ||
            todo.Priority.ToLower().Contains(keyword.ToLower()) ||
            todo.Status.ToLower().Contains(keyword.ToLower()) ||
            todo.Due_Date.ToString().ToLower().Contains(keyword.ToLower())
        );

            return await todoList.ToListAsync();
        }



    }
}
