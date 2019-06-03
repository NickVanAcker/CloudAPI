using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ProjectRESTApi.Controllers
{
    [Route("api/v1/leerkracht")]
    [ApiController]
    public class LeerkrachtController : ControllerBase
    {

        private readonly LeerkrachtContext context;

        public LeerkrachtController(LeerkrachtContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public List<Leerkracht> GetAllLeerkrachten(string vnaam,string anaam, string sort, int? page,int length = 10)
        {

            IQueryable<Leerkracht> query = context.Leerkracht;

            if (!string.IsNullOrWhiteSpace(vnaam))
            {
                query = query.Where(d => d.FirstName == vnaam);
            }

            if (!string.IsNullOrWhiteSpace(anaam))
            {
                query = query.Where(d => d.LastName == anaam);
            }

            if (!string.IsNullOrWhiteSpace(sort))
            {
                switch (sort)
                {

                    case "postcode":
                        query.OrderByDescending(d => d.Postcode);
                        break;

                    case "voornaam":
                        query.OrderBy(d => d.FirstName);
                        break;
                }
            }



            if (page.HasValue)
            {
                query = query.Skip(page.Value * length);
            }
            query = query.Take(length);

            return query.ToList();
        }

        [Authorize]
        [Route("{id}")]
        [HttpGet]
        public IActionResult GetBook(int id)
        {
            var leerkracht = context.Leerkracht.Find(id);

            if (leerkracht == null)
            {
                return NotFound();
            }
            return Ok(leerkracht);
        }

        [HttpPost]
        public IActionResult CreateLeerkracht([FromBody] Leerkracht newLeerkracht)
        {
            context.Leerkracht.Add(newLeerkracht);
            context.SaveChanges();

            return Created("", newLeerkracht);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Leerkracht updateLeerkracht)
        {
            var orgLeerkracht = context.Leerkracht.Find(updateLeerkracht.Id);
            if (orgLeerkracht == null)
            {
                return NotFound();
            }

            orgLeerkracht.FirstName = updateLeerkracht.FirstName;
            orgLeerkracht.LastName = updateLeerkracht.LastName;
            orgLeerkracht.Gender = updateLeerkracht.Gender;
            orgLeerkracht.Email = updateLeerkracht.Email;
            orgLeerkracht.IpAddress = updateLeerkracht.IpAddress;
            orgLeerkracht.Number = updateLeerkracht.Number;
            orgLeerkracht.Postcode = updateLeerkracht.Postcode;
            orgLeerkracht.Street = updateLeerkracht.Street;

            context.SaveChanges();
            return Ok(orgLeerkracht);
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var leerkracht = context.Leerkracht.Find(id);
            if (leerkracht==null)
            {
                return NotFound();
            }

            context.Leerkracht.Remove(leerkracht);
            context.SaveChanges();

            return NoContent();
        }
    }
}