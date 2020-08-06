using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore.Internal;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ToDoListAPI.Data;
using ToDoListAPI.Helpers;
using ToDoListAPI.Models;
using static ToDoListAPI.Helpers.EnumRoles;

namespace ToDoListAPI.Seeders
{
    public class Seeder
    {
        public async  static  Task SeedRoles(RoleManager<Role> roleManager)
        {
            if (!roleManager.Roles.Any())
            { 
                foreach (var role in Enum.GetNames(typeof(Roles)))
                {
                    Role c = new Role
                    {
                        Name = role,
                    };

                 await roleManager.CreateAsync(c); 
                }
            }
        }

        public async static Task SeedUsers(IServiceProvider serviceProvider)
        {
            var db = serviceProvider.GetService<ApplicationDBContext>();
            var userManager = serviceProvider.GetService < UserManager<UserApplication>>();

            if (! db.Users.Any())
            {
                UserApplication superAdmin = new UserApplication()
                {
                    Email = "admin@gmail.com",
                    PasswordHash = "123456",
                    UserName = "admin@gmail.com"
                };

                await userManager.CreateAsync(superAdmin, superAdmin.PasswordHash);
                await userManager.AddToRoleAsync(superAdmin, nameof(EnumRoles.Roles.Admin));
                await db.SaveChangesAsync();


                for (int i = 0; i < 10; i++)
                {
                
                    UserApplication u = new UserApplication()
                    {
                        Email = "user" + i + "@gmail.com",
                        PasswordHash = "password",
                        UserName = "user" + i + "@gmail.com"
                    };

                    var list = new List<ToDoItem>();

                    for (int j = 0; j < 20; j++)
                    {
                        ToDoItem todo = new ToDoItem()
                        {
                            Description = "Tareja " + j + "for user " + u.UserName,
                            User = u
                        };

                        list.Add(todo);


                    }
                    db.ToDoItems.AddRange(list);


                    var result = await userManager.CreateAsync(u, u.PasswordHash);

                    await userManager.AddToRoleAsync(u, nameof(EnumRoles.Roles.Worker));
                    await db.SaveChangesAsync();
                }
            }

        }

    }
}
