using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ToDoListAPI.Models;
using ToDoListAPI.Models.DTOS;
using ToDoListAPI.Models.DTOS.ToDoItem;

namespace ToDoListAPI.Mapping
{
    public class ToDoListMappingProfile : Profile
    {
        public ToDoListMappingProfile()
        {
            CreateMap<UserApplication, ReturnUserDTO>().ForMember
                 (dest => dest.UserRoles, opt => opt.MapFrom(src => src.UserRoles));

            CreateMap<UserRole, UserRoleDTO>();
            CreateMap<ToDoItem, ToDoItemDTO>().ForMember(
                dest => dest.UserName, opt => opt.MapFrom(src => src.User.UserName));

        }
    }
}
