using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ToDoListAPI.Data
{
    public interface IRepository<T> where T : class
    {
        Task<List<T>> GetAll();
        Task<T> Get(int id);
        void Add(T entity);
        Task<T> Update(T entity);
        void Delete(T entity);

        Task<bool> SaveAll();
    }
}
