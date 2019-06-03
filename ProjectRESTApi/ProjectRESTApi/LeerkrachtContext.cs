using Microsoft.EntityFrameworkCore;

namespace ProjectRESTApi
{
    public class LeerkrachtContext : DbContext
    {

        public LeerkrachtContext(DbContextOptions<LeerkrachtContext> options) : base(options)
        {
        }

        public DbSet<Leerkracht> Leerkracht { get; set; }

    }
}
