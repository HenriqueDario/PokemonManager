using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PokemonManager.Models
{
    public class User
    {
        private string Username { get; set; }
        private string Password { get; set; }
        private UserLevel level { get; set; }
    }

    enum UserLevel
    {
        Admin,
        common,
        Mod
    }
}
