using AutoMapper;
using BGS.Data;
using BGS.Dtos;
using BGS.models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace BGS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class AuthController : ControllerBase
    {
        private readonly IAuthRepository _repo;
        private readonly IMapper _mapper;
        public IConfiguration _config { get; }


        public AuthController(IAuthRepository repo, IConfiguration config, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;
            _config = config;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(PlayerForRegisterDto playerForRegisterDto)
        {



            playerForRegisterDto.Username = playerForRegisterDto.Username.ToLower();

            if (await _repo.PlayerExists(playerForRegisterDto.Username))
                return BadRequest("Username already Exists");

            var playerToCreate = _mapper.Map<Player>(playerForRegisterDto);

            var createdPlayer = await _repo.Register(playerToCreate, playerForRegisterDto.Password);

            var playerToReturn = _mapper.Map<PlayerForDetailedDto>(createdPlayer);


            return Ok(201);
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(PlayerForLoginDto playerForLoginDto)
        {
            var playerFromRepo = await _repo.Login(playerForLoginDto.Username.ToLower(), playerForLoginDto.Password);

            if (playerFromRepo == null)
                return Unauthorized();

            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier, playerFromRepo.id.ToString()),
                new Claim(ClaimTypes.Name, playerForLoginDto.Username)
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config.GetSection("AppSettings:Token").Value));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddDays(1),
                SigningCredentials = creds
            };

            var tokenHandler = new JwtSecurityTokenHandler();

            var token = tokenHandler.CreateToken(tokenDescriptor);

            return Ok(new
            {
                token = tokenHandler.WriteToken(token)
            });
        }
    }
}
