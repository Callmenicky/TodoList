namespace Todolist.Models
{
    public class Todo
    {
        public int ID { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public DateTime Due_Date { get; set; }

        public string Status { get; set; }

        public string Priority { get; set; }
    }
}
