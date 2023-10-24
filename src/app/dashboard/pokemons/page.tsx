import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";

export const metadata = {
  title: "1st Generation Pokemons",
  description: "151 Pokemons from 1st Generation",
};

const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));

  return pokemons;
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons(151);
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        <strong className="text-blue-500">Static</strong> List of Pokemons
      </span>
      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}
