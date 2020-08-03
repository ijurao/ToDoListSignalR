using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using ToDoListAPI.Data;
using ToDoListAPI.Models;
using ToDoListAPI.Seeders;

namespace ToDoListAPI
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var host = CreateHostBuilder(args).Build();
            using (var scope = host.Services.CreateScope())
            {
                var serviceProvider = scope.ServiceProvider;
                try
                {
                    var db = serviceProvider.GetRequiredService<ApplicationDBContext>();
                    db.Database.Migrate();
                    var roleManagerService = serviceProvider.GetRequiredService<RoleManager<Role>>();
                    Seeder.SeedRoles(roleManagerService).Wait();
                    Seeder.SeedUsers(serviceProvider).Wait();
                    

                }
                catch (Exception e)
                {
                    throw (e);
                }
            }
            host.Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
