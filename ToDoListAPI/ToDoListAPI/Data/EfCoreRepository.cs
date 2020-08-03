using Microsoft.EntityFrameworkCore;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mime;
using System.Threading.Tasks;
using ToDoListAPI.Models;

namespace ToDoListAPI.Data
{
    public abstract class EfCoreRepository<T> : IRepository<T> where T : class
    {

        protected readonly ApplicationDBContext applicationDBContext;

        public EfCoreRepository(ApplicationDBContext context )
        {
            applicationDBContext = context;
        }
        public async void Add(T entity)
        {
            
              this.applicationDBContext.Add(entity);
        }

        public  void Delete(T entity)
        {
          this.applicationDBContext.Remove(entity);
        }

        public async Task<T> Get(int id)
        {
            return await this.applicationDBContext.Set<T>().FindAsync(id);
        }

        public async Task<List<T>> GetAll()
        {
            return await this.applicationDBContext.Set<T>().ToListAsync();
        }

        public async   Task<bool> SaveAll()
        {
            return await this.applicationDBContext.SaveChangesAsync() > 0;
        }

        public Task<T> Update(T entity)
        {
            throw new NotImplementedException();
        }

       
    }
}
