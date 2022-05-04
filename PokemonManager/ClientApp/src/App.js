import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { AdmArea } from './components/Login';
import { RegisterEditType } from './components/Login';
import { ListType } from './components/Login';
import { RegisterEditPokemon } from './components/Login';
import { ListPokemon } from './components/Login';
import { PokemonList } from './components/PokemonList';

import './custom.css'

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/login' component={Login} />
                <Route path='/PokemonList/' component={PokemonList} />
            </Layout>
        );
    }
}
