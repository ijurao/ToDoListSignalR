using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using ToDoListAPI.Data;
using ToDoListAPI.Hubs;
using ToDoListAPI.Migrations;
using ToDoListAPI.Models;
using ToDoListAPI.Models.DTOS;
using ToDoListAPI.Models.DTOS.ToDoItem;

namespace ToDoListAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class ToDoListController : ControllerBase
    {
        private readonly IToDoListRepository repository;
        private readonly UserManager<UserApplication> userManager;
        private readonly IMapper mapper;
        private readonly IHubContext<PanelUsersHub> hub;

        public ToDoListController(IToDoListRepository repository, UserManager<UserApplication> userManager, IMapper mapper, IHubContext<PanelUsersHub> hub)
        {
            this.repository = repository;
            this.userManager = userManager;
            this.mapper = mapper;
            this.hub = hub;
        }
        [HttpGet]

        public async Task<IActionResult> GetAllTodoList()
        {
            var result = await this.repository.GetAll();
            return Ok(result);
        }


        [HttpPost("assign/{toDoItemId}/{userId}")]
        [Authorize(Roles = nameof(Helpers.EnumRoles.Roles.Admin))]

        public async Task<IActionResult> AssignToDoItemToUser(int toDoItemId, int userId)
        {

            var currentUser = await this.userManager.GetUserAsync(HttpContext.User);
            bool isAdmin = await this.userManager.IsInRoleAsync(currentUser, "Admin");
            if (!isAdmin)
            {
                return BadRequest("User not allowed to perform this action");
            }
            var userToAssignFromRepo = await this.userManager.FindByIdAsync(userId.ToString());
            if (userToAssignFromRepo == null)
            {
                return BadRequest("User not exist");
            }
            var toDoItemFromRepo = await this.repository.Get(toDoItemId);
            if (toDoItemFromRepo == null)
            {
                return BadRequest("TodoItem not exist");
            }
            if (userToAssignFromRepo.ToDoList.Where(x => x.Id == toDoItemId).Any())
            {
                return BadRequest("User already has this task assigned");
            }
            userToAssignFromRepo.ToDoList.Add(toDoItemFromRepo);
            if (await this.repository.SaveAll())
            {
                await this.hub.Clients.User(userToAssignFromRepo.Id.ToString()).SendAsync("newTask", this.mapper.Map<ToDoItemDTO>(toDoItemFromRepo));
                return Ok(this.mapper.Map<ToDoItemDTO>(toDoItemFromRepo));
            }
            return BadRequest("Error performing this action");
        }



        [HttpGet("{userId}")]
        public async Task<IActionResult> GetToDoItemsForUser(int userId, [FromQuery] ToDoListParameters parameters)
        {
            var currentUserID = this.User.FindFirst(ClaimTypes.NameIdentifier).Value;
            if (userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
            {
                return BadRequest("Invalid request");

            }
            else
            {
                var currentUser = await this.userManager.GetUserAsync(HttpContext.User);
                var list = await this.repository.GetToDosForUser(currentUser, parameters.Page, parameters.PageSize);
                var listToReturn = this.mapper.Map<List<ToDoItemDTO>>(list);

                return Ok(listToReturn);
            }

        }

        [HttpPost("addToDo")]
        public async Task<IActionResult> AddToDoItemForUser(ToDoItem toDoItemDTO)
        {
            var currentUser = await this.userManager.GetUserAsync(HttpContext.User);
            if (currentUser == null)
            {
                return BadRequest("Not user logged");
            }
            var ToDoItem = new ToDoItem
            {
                Description = toDoItemDTO.Description,
                User = currentUser
            };

            currentUser.ToDoList.Add(ToDoItem);
            this.repository.Add(ToDoItem);

            if (await this.repository.SaveAll())
            {
                var todoToReturn = this.mapper.Map<ToDoItemDTO>(ToDoItem);
                return Ok(todoToReturn);

            }
            return BadRequest("Error trying to insert the item");
        }

        [HttpPost("changeState/{id}")]
        public async Task<IActionResult> ChangeState(int id)
        {
            var toDoItemFromRepo = await this.repository.Get(id);
            // var currentUserID = int.Parse(this.User.FindFirst(ClaimTypes.NameIdentifier).Value);
            var currentUser = await userManager.GetUserAsync(User);

            if (currentUser.Id != toDoItemFromRepo.User.Id && !(await userManager.IsInRoleAsync(currentUser, "Admin")))
            {
                return Unauthorized("Not allowed");
            }

            toDoItemFromRepo.Completed = !toDoItemFromRepo.Completed;
            await this.repository.SaveAll();
            return Ok(toDoItemFromRepo);


        }


        [HttpPost("delete/{itemId}")]
        public async Task<IActionResult> DeleteToDoItem(int itemId)
        {
            var toDoItemFromRepo = await this.repository.Get(itemId);
            var currentUser = await userManager.GetUserAsync(User);

            if (currentUser.Id != toDoItemFromRepo.User.Id && !(await userManager.IsInRoleAsync(currentUser, "Admin")))
            {
                return Unauthorized("Not allowed");
            }
            if (toDoItemFromRepo.Completed)
            {
                return BadRequest("You cant delete pending tasks");
            }
             this.repository.Delete(toDoItemFromRepo);
            if (await this.repository.SaveAll())
            {
                var toDoToReturn = this.mapper.Map<ToDoItemDTO>(toDoItemFromRepo);
                return Ok(toDoToReturn);
            }
            return BadRequest("Error deleting item");

        }

    }
}