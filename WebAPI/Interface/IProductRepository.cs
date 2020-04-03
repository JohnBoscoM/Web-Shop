using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Models;

namespace WebAPI.Interface
{
    public interface IProductRepository
    {
      Task<List<Product>> GetProducts();
      Task<Product> GetProduct(int id);
    }
}
