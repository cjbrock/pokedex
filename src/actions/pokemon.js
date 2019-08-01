import pokemon from "../reducers/pokemon";
// async action
export const fetchPokemon = () => {
    return (dispatch) => {
        dispatch({ type: 'COMMENCE_POKE_FETCH' })
        return fetch("http://localhost:3000/pokemon")
        .then(resp => resp.json())
        .then(pokemon =>dispatch({type:"SET_MON", pokemon} ))
        .then(x => dispatch({type:"FETCH_COMPLETE"}))
        
      };
}

export const addPokemon = (pokemon) =>{
    const { name, hp, frontUrl, backUrl } = pokemon
    return (dispatch) =>{
        return fetch('http://localhost:3000/pokemon', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            name,
            stats: [
              {
                value: hp,
                name: 'hp'
              }
            ],
            sprites: {
              front: frontUrl,
              back: backUrl
            }
          })
        })
          .then(resp => resp.json())
          .then(pokemon => dispatch({type:"ADD_POKEMON", pokemon}))
          .catch(error => console.error(error))
    }
}

// action creator
export const setSearch = (searchTerm) =>{
    return{
        type:"SET_SEARCH", search:searchTerm
    }
}