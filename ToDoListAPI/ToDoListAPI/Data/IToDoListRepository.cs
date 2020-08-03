using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ToDoListAPI.Models;

namespace ToDoListAPI.Data
{
    public interface IToDoListRepository: IRepository<ToDoItem>
    {
        Task<ICollection<ToDoItem>> GetToDosForUser(UserApplication user, int page, int pageSize);
    }
}
