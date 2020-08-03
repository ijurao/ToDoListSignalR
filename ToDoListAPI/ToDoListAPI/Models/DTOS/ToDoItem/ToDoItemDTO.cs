using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ToDoListAPI.Models.DTOS.ToDoItem
{
    public class ToDoItemDTO
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public DateTime CreatedDate { get; set; }
        public bool Completed { get; set; }

        public string UserName { get; set; }

    }
}
