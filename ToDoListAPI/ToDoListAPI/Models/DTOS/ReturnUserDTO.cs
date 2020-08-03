using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ToDoListAPI.Models.DTOS
{
    public class ReturnUserDTO
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public ICollection<UserRoleDTO> UserRoles { get; set; }
    }
}
