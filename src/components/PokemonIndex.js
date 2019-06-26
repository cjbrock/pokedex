import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {
  state ={
    pokemon:[],
    searchTerm: ""
  }

  componentDidMount(){
    fetch("http://localhost:3000/pokemon")
    .then(resp => resp.json())
    .then(data =>{
      this.setState({
        pokemon: data
      })
    })
  }

  search = (e, {value}) =>{
    this.setState({
      searchTerm:value
    })
  }


  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(this.search, 500)} showNoResults={false} />
        <br />
        <PokemonCollection pokemon={this.state.pokemon.filter(pokemon => pokemon.name.includes(this.state.searchTerm))}/>
        <br />
        <PokemonForm />
      </div>
    )
  }
}

export default PokemonPage
