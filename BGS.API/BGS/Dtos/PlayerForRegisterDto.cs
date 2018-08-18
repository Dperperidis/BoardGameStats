using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BGS.Dtos
{
    public class PlayerForRegisterDto
    {

        [Required]
        public string Username { get; set; }
        [Required]
        [StringLength(12, MinimumLength = 4, ErrorMessage = "You must specify password between 4 and 12 numbers and letters")]
        public string Password { get; set; }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        public string Gender { get; set; }
        [Required]
        public DateTime DateOfBirth { get; set; }
        public DateTime LastActive { get; set; }

        public PlayerForRegisterDto()
        {
            LastActive = DateTime.Now;
        }
    }

}
