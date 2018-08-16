using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BGS.models
{
    public class Player
    {
        public int id { get; set; }
        public string Username { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }

    }
}
