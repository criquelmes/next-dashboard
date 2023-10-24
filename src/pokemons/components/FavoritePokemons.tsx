"use client";

import { useAppSelector } from "@/store";
import { PokemonGrid } from "./PokemonGrid";
import { useEffect, useState } from "react";
import { IoHeartOutline } from "react-icons/io5";

export const FavoritePokemons = () => {
  const favoritePokemons = useAppSelector((state) =>
    Object.values(state.pokemons.favorites)
  );
  // const [pokemons, setPokemons] = useState(favoritePokemons);

  // useEffect(() => {
  //   // console.log({ favoritePokemons });
  //   // setPokemons(favoritePokemons);
  // }, [favoritePokemons]);

  //   return <PokemonGrid pokemons={favoritePokemons} />;
  return (
    <>
      {favoritePokemons.length === 0 ? (
        <NotFavorites />
      ) : (
        <PokemonGrid pokemons={favoritePokemons} />
      )}
    </>
  );
};

export const NotFavorites = () => {
  return (
    <div className="flex flex-col h-[10vh] items-center justify-center">
      <IoHeartOutline size={100} className="text-red-500" />
      <span>No Favorites</span>
    </div>
  );
};
