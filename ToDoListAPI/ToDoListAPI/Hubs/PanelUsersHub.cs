using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Metadata.Ecma335;
using System.Security.Claims;
using System.Threading.Tasks;
using ToDoListAPI.Models;
using ToDoListAPI.Models.DTOS;

namespace ToDoListAPI.Hubs
{
    [Authorize]

    public class PanelUsersHub: Hub
    {
        const   string  methodNewUserConnected  = "newConnection";
        const   string  methodUserDisconnected  = "closeConnection";
       public static List<ReturnUserDTO> SignalRUsers = new List<ReturnUserDTO>();

        private readonly UserManager<UserApplication> manager;
        private readonly IMapper mapper;

        public PanelUsersHub(UserManager<UserApplication> manager, IMapper mapper)
        {
            this.manager = manager;
            this.mapper = mapper;
        }
        public   override Task OnConnectedAsync()
        {
            var currentUser =  this.manager.GetUserAsync(Context.User).GetAwaiter().GetResult();
            var userToReturn = this.mapper.Map<ReturnUserDTO>(currentUser);
            SignalRUsers.Add(userToReturn);
            return Clients.All.SendAsync(methodNewUserConnected, SignalRUsers);
        }

        public override Task OnDisconnectedAsync(Exception exception)
        {
            var currentUser = this.manager.GetUserAsync(Context.User).GetAwaiter().GetResult();
            var itemToRemove = SignalRUsers.SingleOrDefault(x => x.Id == currentUser.Id);
            SignalRUsers.Remove(itemToRemove);
            var userToReturn = this.mapper.Map<ReturnUserDTO>(currentUser);
            return Clients.All.SendAsync(methodUserDisconnected, SignalRUsers);
        }

        public List<ReturnUserDTO> GetUsers()
        {
            return SignalRUsers;
        }






    }
}
