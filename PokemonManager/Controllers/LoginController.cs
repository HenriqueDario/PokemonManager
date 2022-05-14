using Microsoft.AspNetCore.Mvc;
using PokemonManager.Models;
using System;
using System.Collections.Generic;

namespace PokemonManager.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LoginController : ControllerBase
    {
        private User user;

        public LoginController(User user)
        {
            this.user = user;
        }

        [HttpPost]
        public Boolean Login()
        {
            return user != null;
        }
    }
}
