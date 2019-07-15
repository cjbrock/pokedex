export default (state = [], action) => {
    switch(action.type){

    case "COMMENCE_POKE_FETCH":
        console.log("we are about to send fetch request")
        return state
    case "SET_MON":
        return action.pokemon

    case "ADD_POKEMON":
        return [...state, action.pokemon]
        
    default:
        return state;
    }
  }
  