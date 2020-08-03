using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using ToDoListAPI.Helpers;
using ToDoListAPI.Hubs;
using ToDoListAPI.Models;
using ToDoListAPI.Models.DTOS;

namespace ToDoListAPI.Controllers
{
    [Route("api/[controller]")]
    [AllowAnonymous]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly UserManager<UserApplication> userManager;
        private readonly SignInManager<UserApplication> signInManager;
        private readonly RoleManager<Role> roleManager;
        private readonly IMapper mapper;
        private IConfiguration _configuration;
        private readonly IHubContext<PanelUsersHub> hub;

        public AuthController(UserManager<UserApplication> userManager, SignInManager<UserApplication> signInManager,RoleManager<Role> roleManager,
                              IMapper mapper, IConfiguration config, IHubContext<PanelUsersHub> hub)
        {
            this.userManager = userManager;
            this.signInManager = signInManager;
            this.roleManager = roleManager;
            this.mapper = mapper;
            this._configuration = config;
            this.hub = hub;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginDTO loginDTO)
        {
           // return Unauthorized("test");
            var userFromRepo = await this.userManager.FindByNameAsync(loginDTO.UserName);
            if(userFromRepo == null)
            {
                return BadRequest("User not found");

            }
            var result = await this.signInManager.CheckPasswordSignInAsync(userFromRepo,loginDTO.Password,false);
            if (result.Succeeded)
            {
                // build token and send object back

                var userToReturn = this.mapper.Map<ReturnUserDTO>(userFromRepo);
               // this.sendNotification(userToReturn);
                return Ok( new { token = this.buildToken(userFromRepo), user= userToReturn });
            }

            return BadRequest("User not found");
        }

        //private void sendNotification(ReturnUserDTO user)
        //{
        //    this.hub.
        //}

        private string buildToken(UserApplication user)
        {

            var claims = new List<Claim>
            {
               new Claim(ClaimTypes.NameIdentifier,user.Id.ToString()),
               new Claim(ClaimTypes.Name,user.UserName),
                //new Claim("roles", JsonConvert.SerializeObject(user.UserRoles,new JsonSerializerSettings
                //{
                // ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore ,
                // Formatting = Formatting.Indented
                //}))



        };
            foreach (var role in user.UserRoles)
            {
                claims.Add(new Claim(ClaimTypes.Role, role.Role.Name));
            }
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration.GetSection("Appsetings:Token").Value));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);
            var tokenDescriptor = new SecurityTokenDescriptor()
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddDays(30),
                SigningCredentials = creds

            };

            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(RegisterUserDTO registerUserDTO)
        {

            var user = new UserApplication
            {
          
                UserName = registerUserDTO.Email,
                Email = registerUserDTO.Email,
                PasswordHash = registerUserDTO.Password

            };
            var result = await this.userManager.CreateAsync(user,registerUserDTO.Password);
            
             await  this.userManager.AddToRoleAsync(user, nameof(EnumRoles.Roles.Worker));
            

            if (result.Succeeded)
            {
                var userFromRepo = await userManager.FindByNameAsync(registerUserDTO.Email);
                var resultLogin = await this.signInManager.CheckPasswordSignInAsync(userFromRepo, registerUserDTO.Password, false);

                if (resultLogin.Succeeded)
                { 
                 var userToReturn = this.mapper.Map<ReturnUserDTO>(userFromRepo);
                 return Ok(new { token = this.buildToken(userFromRepo), user = userToReturn });

                }
                else
                {
                    return BadRequest("Error trying to login!");
                }
            }
            else
            {
                return BadRequest(result.Errors);
            }

        }

       


    }
}