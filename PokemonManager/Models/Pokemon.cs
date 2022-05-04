using System.Collections.Generic;

namespace PokemonManager.Models
{
    public class Pokemon
    {
        private string Name { get; set; }
        private string Description { get; set; }
        private int EvolutionStage { get; set; }
        private PokeType PrincipalType { get; set; }
        private PokeType SecondType { get; set; }
        private List<Pokemon> Evolutions { get; set; }
        private string Image { get; set; }
    }
}
