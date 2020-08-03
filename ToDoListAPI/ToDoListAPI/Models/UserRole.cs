using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace ToDoListAPI.Models
{
    public class UserRole: IdentityUserRole<int>
    {

        public virtual UserApplication User { get; set; }
        public virtual  Role Role { get; set; }
    }
}
