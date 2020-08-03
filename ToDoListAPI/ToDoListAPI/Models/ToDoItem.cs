using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ToDoListAPI.Models
{
    public class ToDoItem
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public DateTime CreatedDate { get; set; }
        public bool Completed { get; set; }
        public virtual UserApplication User { get; set; }

        public ToDoItem()
        {
            CreatedDate = DateTime.Now;
            Completed = false;
        }
    }
}
