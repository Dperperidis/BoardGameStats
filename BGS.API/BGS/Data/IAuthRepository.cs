using BGS.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BGS.Data
{
    public interface IAuthRepository
    {
        Task<Player> Register(Player player, string password);
        Task<Player> Login(string username, string password);
        Task<bool> PlayerExists(string username);
    }
}
