using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ToDoListAPI.Models;

namespace ToDoListAPI.Data
{
    public class EfCoreToDoListRepository : EfCoreRepository<ToDoItem>, IToDoListRepository
    {
        public EfCoreToDoListRepository(ApplicationDBContext context) : base(context) { }

        public async Task<ICollection<ToDoItem>> GetToDosForUser(UserApplication user, int page, int pageSize)
        {
            var list =  this.applicationDBContext.ToDoItems.AsQueryable();
            if (user.UserRoles.FirstOrDefault(x => x.Role.Name.ToLower() == "admin") == null)
            {
                list  = list.Where(x => x.User.Id == user.Id);
            }

            list = list.Skip(( page - 1) * pageSize).Take(pageSize);

            return await list.ToListAsync();
        }
    }
}
