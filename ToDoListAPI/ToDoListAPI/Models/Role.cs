﻿using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ToDoListAPI.Models
{
    public class Role:IdentityRole<int>
    {
      

        public virtual ICollection<UserRole> UserRoles { get; set; }
       
    }
}
