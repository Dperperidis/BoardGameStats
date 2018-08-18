using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BGS.models;
using Microsoft.EntityFrameworkCore;

namespace BGS.Data
{
    class AuthRepository : IAuthRepository
    {
        private readonly SqlContext _context;

        public AuthRepository(SqlContext context)
        {
            _context = context;
        }


        public async Task<Player> Login(string username, string password)
        {
            //ελεγχος για αν υπαρχει το username
            var player = await _context.Players.FirstOrDefaultAsync(x => x.Username == username);

            if (player == null)
                return null;

            if (!VerifyPasswordHash(password, player.PasswordHash, player.PasswordSalt))
                return null;

            return player;
        }

        private bool VerifyPasswordHash(string password, byte[] passwordHash, byte[] passwordSalt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512(passwordSalt))
            {
               
                var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                for (int i = 0; i < computedHash.Length; i++)
                {
                    if (computedHash[i] != passwordHash[i]) return false;
                }
            }
            return true;
        }

        public async Task<bool> PlayerExists(string username)
        {

            if (await _context.Players.AnyAsync(x => x.Username == username))
                return true;

            return false;
        }


        //δημιουργια ασφαλες κωδικου
        public async Task<Player> Register(Player player, string password)
        {
            byte[] passwordHash, PasswordSalt;
            CreatePasswordHash(password, out passwordHash, out PasswordSalt);

            player.PasswordHash = passwordHash;
            player.PasswordSalt = PasswordSalt;

            await _context.Players.AddAsync(player);
            await _context.SaveChangesAsync();

            return player;
        }

        private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }
    }
}
