using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ToDoListAPI.Models.DTOS
{
    public class LoginDTO
    {
        [Required,EmailAddress]
        public string UserName { get; set; }
        [Required,PasswordPropertyText]
        public string Password { get; set; }
    }
}
