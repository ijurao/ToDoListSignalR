using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ToDoListAPI.Models;

namespace ToDoListAPI.Data
{
    public class ApplicationDBContext: IdentityDbContext<UserApplication,Role,int,IdentityUserClaim<int>,
                                       UserRole,IdentityUserLogin<int>,IdentityRoleClaim<int>,IdentityUserToken<int>>
    {


        public ApplicationDBContext(DbContextOptions<ApplicationDBContext> options) : base(options)
        {

        }
     

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<UserRole>(userRole =>
            {
                userRole.HasKey(ur => new { ur.UserId, ur.RoleId });
                userRole.HasOne(ur => ur.Role)
                         .WithMany(r => r.UserRoles)
                         .HasForeignKey(ur => ur.RoleId)
                         .IsRequired();

                userRole.HasOne(ur => ur.User)
                        .WithMany(r => r.UserRoles)
                        .HasForeignKey(ur => ur.UserId)
                        .IsRequired();



            });

            builder.Entity<ToDoItem>(toDoItem => toDoItem.HasOne(todo => todo.User).WithMany(user => user.ToDoList).OnDelete(DeleteBehavior.Restrict));


        }

        public DbSet<UserApplication> Users { get; set; }
        public DbSet<ToDoItem> ToDoItems { get; set; }
    }
}
