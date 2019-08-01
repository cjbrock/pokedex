import React from 'react'
import {connect} from 'react-redux'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'
import {fetchPokemon, setSearch} from '../actions/pokemon'

class PokemonPage extends React.Component {
  // state ={
  //   searchTerm: "",
  //   pokemon:[]
  // }

  componentDidMount(){
    this.props.fetchPokemon()

    // fetch("http://localhost:3000/pokemon")
    //     .then(resp => resp.json())
    //     .then(pokemon => this.setState({pokemon}))
   }

  search = (e, {value}) =>{
    // this.setState({
    //   searchTerm:value
    // })
    this.props.setSearch(value)
  }


  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(this.search, 500)} showNoResults={false} />
        <br />
        <PokemonCollection pokemon={this.props.pokemon.filter(pokemon => pokemon.name.includes(this.props.searchTerm))}/>
        <br />
        <PokemonForm  />
      </div>
    )
  }
}



const mapStateToProps = state =>{
  return {
    pokemon:state.pokemon,
    searchTerm:state.search
  }
}

// const mapDispatchToProps = dispatch =>{
//   return{
//     fetchPokemon: () => dispatch(fetchPokemon()),
//     setSearch: (searchTerm) => dispatch(setSearch(searchTerm))
//   }
// }

export default connect(mapStateToProps, { fetchPokemon, setSearch })(PokemonPage)
// export default connect(mapStateToProps, mapDispatchToProps)(PokemonPage)
