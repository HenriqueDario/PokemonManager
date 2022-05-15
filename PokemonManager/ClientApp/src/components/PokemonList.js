import React, { Component } from 'react';

export class PokemonList extends Component {
    static displayName = PokemonList.name;

    constructor(props) {
        super(props);
        this.state = { pokemons: [], loading: true };
    }


    render() {
        return (
            <div>
                <h1>Pokemon List</h1>



            </div>
        );




    }
    /*async populateData() {
        const response = await fetch('pokemons');
        const data = await response.json();
        this.setState({ pokemons: data, loading: false });
    }*/
}
