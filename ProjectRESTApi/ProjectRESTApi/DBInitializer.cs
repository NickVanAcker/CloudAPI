using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectRESTApi
{
    public class DBInitializer
    {

        public static void Initialize(LeerkrachtContext context)
        {
            context.Database.EnsureCreated();


            if (!context.Leerkracht.Any())
            {
                var lk = new Leerkracht()
                {
                    Id=0,
                    FirstName="Nick",
                    LastName="Van Acker",
                    Gender="M",
                    Email="blablaba@hotmail",
                    IpAddress="192.168.0.110",
                    Number="049294003",
                    Postcode=2600,
                    Street="JoskeStraat"
                    
                };

                context.Leerkracht.Add(lk);

                context.SaveChanges();
            }
    }
  }
}
