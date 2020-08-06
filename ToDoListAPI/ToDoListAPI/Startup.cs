using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Authorization;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using ToDoListAPI.Data;
using ToDoListAPI.Hubs;
using ToDoListAPI.Mapping;
using ToDoListAPI.Models;

namespace ToDoListAPI
{
    public class Startup
    {
        private string MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy(name: MyAllowSpecificOrigins,
                                  builder =>
                                  {
                                      builder.WithOrigins("http://localhost:4200",
                                                          "http://www.contoso.com")
                                                          .AllowAnyHeader()
                                                  .AllowAnyMethod().AllowAnyHeader().AllowCredentials();

                                  });  
            });
            var mappingConfig = new MapperConfiguration(mc =>
            {
                mc.AddProfile(new ToDoListMappingProfile());
            });


            IMapper mapper = mappingConfig.CreateMapper();
            services.AddSingleton(mapper);
           // services.AddScoped<IRepository<ToDoItem>, EfCoreRepository<ToDoItem>>();
            services.AddScoped<IToDoListRepository, EfCoreToDoListRepository>();
                
            IdentityBuilder identityBuilder = services.AddIdentityCore<UserApplication>(options =>
            {

                options.Password.RequireDigit = false;
                options.Password.RequiredLength = 4;
                options.Password.RequireNonAlphanumeric = false;
                options.Password.RequireLowercase = false;
                options.Password.RequireUppercase = false;

            });

            identityBuilder = new IdentityBuilder(identityBuilder.UserType, typeof(Role), services);
            identityBuilder.AddEntityFrameworkStores<ApplicationDBContext>();
            identityBuilder.AddRoleValidator<RoleValidator<Role>>();
            identityBuilder.AddRoleManager<RoleManager<Role>>();


       


            services.Configure<IdentityOptions>(options =>
    options.ClaimsIdentity.UserIdClaimType = ClaimTypes.NameIdentifier);
            services.AddDbContext<ApplicationDBContext>(options => options.UseSqlServer(Configuration.GetConnectionString("default")).UseLazyLoadingProxies());

            services.AddSignalR();
            services.AddControllers(options =>
           {
               var policy = new AuthorizationPolicyBuilder().RequireAuthenticatedUser().Build();
               options.Filters.Add(new AuthorizeFilter(policy));
           }).AddNewtonsoftJson(op => {

               op.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;
           });
            identityBuilder.AddSignInManager<SignInManager<UserApplication>>();
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
               .AddJwtBearer(options =>
               {
                   options.TokenValidationParameters = new Microsoft.IdentityModel.Tokens.TokenValidationParameters
                   {
                       ValidateIssuerSigningKey = true,
                       IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(Configuration.GetSection("Appsetings:Token").Value)),
                       ValidateIssuer = false,
                       ValidateAudience = false

                   };
                   options.Events = new JwtBearerEvents
                   {
                        OnMessageReceived = context =>
                        {
                            var accesstoken = context.Request.Query["access_token"];
                            var path = context.HttpContext.Request.Path;
                            if (!string.IsNullOrEmpty(accesstoken) &&
                                (path.StartsWithSegments("/panel")))
                            {
                                // Read the token out of the query string
                                context.Token = accesstoken;
                            }
                            return Task.CompletedTask;
                        }
                   };
                   
               }
               );



        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();
            app.UseDefaultFiles();
            app.UseStaticFiles();
            app.UseCors(MyAllowSpecificOrigins);
            app.UseRouting();

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
                endpoints.MapHub<PanelUsersHub>("/panel");
                endpoints.MapFallbackToController("Index", "Fall");

            });
        }
    }
}

