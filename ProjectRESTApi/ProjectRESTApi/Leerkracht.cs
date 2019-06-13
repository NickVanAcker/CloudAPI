using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectRESTApi
{
    public class Leerkracht
    {

        public int Id { get; set; }

        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }

        [EmailAddress]
        public string Email { get; set; }

        public string Gender { get; set; }

        
        public string IpAddress { get; set; }

        public string Street { get; set; }

        public int Postcode { get; set; }

        
        public string Number { get; set; }


    }
}
