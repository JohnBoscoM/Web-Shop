using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebAPI.Interface;
using WebAPI.Data.Repository;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductController : Controller
    {
       private readonly IProductRepository productRepository;
        public ProductController()
        {
            productRepository = new ProductRepository();
        }
        // GET: api/<controller>
        [HttpGet]
        public async Task<ActionResult> GetProducts()
        {
            try
            {
                var products =  productRepository.GetProducts();
                return Ok(products);
            }
            catch (Exception e)
            {
                return StatusCode(500, new { ErrorMessage = e.Message });
            }
        }

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public async Task<ActionResult> GetProduct(int id)
        {
            try
            {
                var product = productRepository.GetProduct(id);
                return Ok(product);
            }
            catch(Exception e)
            {
                return StatusCode(500, new { ErrorMessage = e.Message });
            }          
        }

        // POST api/<controller>
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
