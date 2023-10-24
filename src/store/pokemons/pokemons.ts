import { SimplePokemon } from "@/pokemons";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/*
  {
    favorites: {
      '1': { id: '1', name: 'bulbasaur' },
      '4': { id: '4', name: 'charmander' },

    }
  }
*/

interface PokemonsState {
  favorites: { [key: string]: SimplePokemon };
}

//* Copilot
// const getInitialState = (): PokemonsState => {
//   const favoritePokemons = localStorage.getItem("favoritePokemons");

//   if (!favoritePokemons) {
//     return {};
//   }

//   return JSON.parse(favoritePokemons);
// };

// const getInitialState = (): PokemonsState => {
//   // if (typeof localStorage === "undefined") return {};
//   const favorites = JSON.parse(
//     localStorage.getItem("favoritePokemons") ?? "{}"
//   );

//   return favorites;
// };

const initialState: PokemonsState = {
  favorites: {},
  // ...getInitialState(),
  // "1": { id: "1", name: "bulbasaur" },
  // "4": { id: "4", name: "charmander" },
  // "7": { id: "7", name: "squirtle" },
};

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    setFavoritePokemons(
      state,
      action: PayloadAction<{ [key: string]: SimplePokemon }>
    ) {
      state.favorites = action.payload;
    },
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;

      if (!!state.favorites[id]) {
        delete state.favorites[id];
        // return;
      } else {
        state.favorites[id] = pokemon;
      }

      //! No se debe hacer esto en Redux
      localStorage.setItem("favoritePokemons", JSON.stringify(state.favorites));
    },
  },
});

export const { toggleFavorite, setFavoritePokemons } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
