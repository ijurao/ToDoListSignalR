using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ToDoListAPI.Models
{
    public class UserApplication: IdentityUser<int>
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime LastAccess { get; set; }

        public string PhotoUrl { get;  set; }

        public virtual ICollection<UserRole> UserRoles { get; set; }
        public virtual ICollection<ToDoItem> ToDoList { get; set; }
        public UserApplication()
        {
            CreatedDate = DateTime.Now;
        }
    }
}
